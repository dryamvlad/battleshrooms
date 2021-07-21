import { createStore } from 'vuex'
import Web3 from "web3";
import BabyBattleBots from '../../sol/abis/BabyBattleBots.json'

export default createStore({
    state: {
        web3: null,
        wallet: 0,
        bbbContract: null,
        netId: null
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
        }
    },
    actions: {
        async initWeb3({commit}) {
            var web3 = new Web3(window.ethereum);
            var accounts = await web3.eth.getAccounts();
            var netId = await web3.eth.net.getId();
            var bbbContract = new web3.eth.Contract(BabyBattleBots.abi, BabyBattleBots.networks[netId].address);

            commit('setWeb3', web3)
            commit('setWallet', accounts[0])
            commit('setBbbContract', bbbContract)
        }
    },
    getters: {

    },
    modules: {

    }
})