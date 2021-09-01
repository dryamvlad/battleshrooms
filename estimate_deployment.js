var BabyBattleBotsGenOne = artifacts.require("BabyBattleBotsGenOne");
var solc = require('solc')

module.exports = function(callback) {

    BabyBattleBotsGenOne.web3.eth.getGasPrice(function(error, result){ 
        var gasPrice = Number(result);
        console.log("Gas Price is " + gasPrice + " wei"); // "10000000000000"

        var BabyBattleBotsGenOneContract = new web3.eth.Contract(BabyBattleBotsGenOne.abi);
        var bytecode = BabyBattleBotsGenOne.bytecode;
        BabyBattleBotsGenOneContract.deploy({arguments:[], data: bytecode}).estimateGas(function(err, gas){
            console.log("gas estimation = " + gas + " units");
            console.log("gas cost estimation = " + (gas * gasPrice) + " wei");
            console.log("gas cost estimation = " + web3.utils.fromWei(String((gas * gasPrice)), 'ether') + " ether");
        });
    });
    return;
};