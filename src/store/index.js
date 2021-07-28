import { createStore } from 'vuex'
import Web3 from "web3";
import BabyBattleBots from '../../sol/abis/BabyBattleBots.json'

export default createStore({
    state: {
        web3: null,
        wallet: 0,
        bbbContract: null,
        contractData: {}
    },
    mutations: {
        setWallet(state, newWallet) {
            state.wallet = newWallet;
        },
        setWeb3(state, newWeb3) {
            state.web3 = newWeb3;
        },
        setBbbContract(state, newBbbContract) {
            state.bbbContract = newBbbContract;
        },
        setContractData(state, newContractData) {
            state.contractData = newContractData;
        }
    },
    actions: {
        async initWeb3({ commit }) {
            const web3 = new Web3(window.ethereum);
            const accounts = await web3.eth.getAccounts();
            const netId = await web3.eth.net.getId();
            var wallet = accounts[0];


            if (netId == 4) {
                var bbbContract = new web3.eth.Contract(BabyBattleBots.abi, BabyBattleBots.networks[netId].address);
            } else {
                wallet = 'Wrong network';
            }

            commit('setWeb3', web3)
            commit('setWallet', wallet)
            commit('setBbbContract', bbbContract)

            this.dispatch('getContractData');
        },
        async getContractData() {
            const contractData = {
                totalSupply: await this.state.bbbContract.methods.totalSupply().call(),
                owned: await this.state.bbbContract.methods.balanceOf(this.state.wallet).call(),
                price: await this.state.bbbContract.methods.getPrice().call(),
            };
            this.commit('setContractData', contractData)
        },
        async mintBot({ commit }, number) {
            if (this.state.bbbContract) {
                const price = Number(this.state.contractData.price) * number;
                const gasAmount = await this.state.bbbContract.methods.mintBot(number).estimateGas({ from: this.state.wallet, value: price });
                const store = this;

                this.state.bbbContract.methods
                    .mintBot(number)
                    .send({ from: this.state.wallet, value: price, gas: String(gasAmount) })
                    .on('transactionHash', function (hash) {
                        console.log("transactionHash: ", hash)
                    })
                    .on('confirmation', function(receipt){
                        store.dispatch('getContractData');
                    })
            }
        }
    },
    getters: {
        ethPrice(state) {
            if (state.web3 && state.contractData.price > 0)
                return state.web3.utils.fromWei(state.contractData.price)
        }
    },
    modules: {

    }
})