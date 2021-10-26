import { createStore } from 'vuex'
import Web3 from "web3";
import { ABI } from '../contracts_config.js'
import { createToast } from 'mosha-vue-toastify';

import BattleShroomsGenOne from '../../sol/abis/polygon/BattleShroomsGenOne.json'

export default createStore({
    state: {
        web3: null,
        web3Connected: false,
        wallet: 0,
        bbbContract: null,
        contractData: {},
        transactionPending: false,
        price: 0.035,
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
        },
        setWeb3Connected(state, newWeb3Connected) {
            state.web3Connected = newWeb3Connected;
        },
        setTransactionPending(state, newTransactionPending) {
            state.transactionPending = newTransactionPending;
        },
    },
    actions: {
        async initWeb3({ commit }, vm) {
            const web3 = new Web3(window.ethereum);
            const accounts = await web3.eth.getAccounts();
            const netId = await web3.eth.net.getId();
            var wallet = accounts[0];

            if (netId !== 80001) {
                createToast("Wrong network", {
                    position: 'top-center',
                    type: 'danger',
                    transition: 'slide',
                    timeout: 20000,
                    showIcon: 'true',
                    hideProgressBar: 'true'
                })
                return;
            }
            if (accounts.length == 0) {
                return;
            }

            //DEBUG
            //var bbbContract = new web3.eth.Contract(ABI, "0x0111546FEB693b9d9d5886e362472886b71D5337");
            var bbbContract = new web3.eth.Contract(BattleShroomsGenOne.abi, BattleShroomsGenOne.networks[netId].address);
            var web3Connected = true;

            commit('setWeb3', web3)
            commit('setWeb3Connected', web3Connected)
            commit('setWallet', wallet)
            commit('setBbbContract', bbbContract)

            this.dispatch('getContractData');
        },
        async getContractData() {
            const contractData = {
                totalSupply: await this.state.bbbContract.methods.totalSupply().call(),
                owned: await this.state.bbbContract.methods.balanceOf(this.state.wallet).call(),
                price: await this.state.bbbContract.methods.getPrice().call(),
                paused: await this.state.bbbContract.methods._paused().call(),
                _presalePaused: await this.state.bbbContract.methods._presalePaused().call(),
                wlEligible: await this.state.bbbContract.methods._whiteListed(this.state.wallet).call(),
            };
            this.commit('setContractData', contractData)
        },
        async mintShroom({ commit }, number) {
            if (this.state.bbbContract) {
                const price = Number(this.state.contractData.price) * number;
                const store = this;
                this.state.bbbContract.methods.mintShroom(number).estimateGas({ from: this.state.wallet, value: price }).then(function (gasAmount) {
                    store.commit('setTransactionPending', true)

                    store.state.bbbContract.methods
                        .mintShroom(number)
                        .send({ from: store.state.wallet, value: price, gas: String(gasAmount) })
                        .on('transactionHash', function (hash) {
                            console.log("transactionHash: ", hash)
                        })
                        .on('receipt', function (receipt) {
                            if (receipt.status) {
                                createToast("You got it! Congrats!", {
                                    position: 'top-center',
                                    type: 'success',
                                    transition: 'slide',
                                    timeout: 20000,
                                    showIcon: 'true',
                                    hideProgressBar: 'true'
                                })
                            } else {
                                createToast("Transaction failed :(", {
                                    position: 'top-center',
                                    type: 'danger',
                                    transition: 'slide',
                                    timeout: 20000,
                                    showIcon: 'true',
                                    hideProgressBar: 'true'
                                })
                            }

                            store.dispatch('getContractData');
                            store.commit('setTransactionPending', false)
                        })
                        .on('error', function (error) {
                            store.commit('setTransactionPending', false)
                        })
                }).catch(function (error) {
                    createToast("Looks like you don't have enough funds, sorry :(", {
                        position: 'top-center',
                        type: 'danger',
                        transition: 'slide',
                        timeout: 20000,
                        showIcon: 'true',
                        hideProgressBar: 'true'
                    })
                    store.commit('setTransactionPending', false)
                })
            }
        },
        async mintEarlyBot({ commit }) {
            if (this.state.bbbContract) {
                const price = Number(this.state.contractData.price);
                const store = this;
                this.state.bbbContract.methods.mintESBot().estimateGas({ from: this.state.wallet, value: price }).then(function (gasAmount) {
                    store.commit('setTransactionPending', true)

                    store.state.bbbContract.methods
                        .mintESBot()
                        .send({ from: store.state.wallet, value: price, gas: String(1.2 * gasAmount) })
                        .on('transactionHash', function (hash) {
                            console.log("transactionHash: ", hash)
                        })
                        .on('receipt', function (receipt) {
                            if (receipt.status) {
                                createToast("You got it! Congrats!", {
                                    position: 'top-center',
                                    type: 'success',
                                    transition: 'slide',
                                    timeout: 20000,
                                    showIcon: 'true',
                                    hideProgressBar: 'true'
                                })
                            } else {
                                createToast("Transaction failed :(", {
                                    position: 'top-center',
                                    type: 'danger',
                                    transition: 'slide',
                                    timeout: 20000,
                                    showIcon: 'true',
                                    hideProgressBar: 'true'
                                })
                            }

                            store.dispatch('getContractData');
                            store.commit('setTransactionPending', false)
                        })
                        .on('error', function (error) {
                            store.commit('setTransactionPending', false)
                        })
                }).catch(function (e, error) {
                    createToast("Error running transaction", {
                        position: 'top-center',
                        type: 'danger',
                        transition: 'slide',
                        timeout: 20000,
                        showIcon: 'true',
                        hideProgressBar: 'true'
                    })
                    store.commit('setTransactionPending', false)
                })
            }
        },
        async addEarlySupporters({ commit }, earlySupporters) {
            const store = this;

            this.state.bbbContract.methods.addESMany(earlySupporters).estimateGas({ from: this.state.wallet }).then(function (gasAmount) {
                store.state.bbbContract.methods
                    .addESMany(earlySupporters)
                    .send({ from: store.state.wallet, gas: String(gasAmount) })
                    .on('transactionHash', function (hash) {
                        console.log("transactionHash: ", hash)
                    })
                    .on('receipt', function (receipt) {
                        console.log(receipt)
                    })
                    .on('error', function (error) {
                        console.log(error)
                    })
            }).catch(function (error) {
                console.log(error)
            })
        },
        async giveaway({ commit }, addresses) {
            const store = this;

            this.state.bbbContract.methods.giveAwayMany(addresses).estimateGas({ from: this.state.wallet }).then(function (gasAmount) {
                store.state.bbbContract.methods
                    .giveAwayMany(addresses)
                    .send({ from: store.state.wallet, gas: String(gasAmount) })
                    .on('transactionHash', function (hash) {
                        console.log("transactionHash: ", hash)
                    })
                    .on('receipt', function (receipt) {
                        console.log(receipt)
                    })
                    .on('error', function (error) {
                        console.log(error)
                    })
            }).catch(function (error) {
                console.log(error)
            })
        },
    },
    getters: {
        ethPrice(state) {
            if (state.web3 && state.contractData.price > 0)
                return state.web3.utils.fromWei(state.contractData.price)
        },
        shortWallet(state) {
            var str = new String(state.wallet)
            return str.substring(0, 4) + '...' + str.substring(str.length - 4)
        }
    },
    modules: {

    }
})