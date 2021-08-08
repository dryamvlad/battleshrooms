const BabyBattleBotsGenOne = artifacts.require("BabyBattleBotsGenOne");
const SimpleStorage = artifacts.require("SimpleStorage");

module.exports = async function (deployer) {
  //deployer.deploy(SimpleStorage);
  deployer.deploy(BabyBattleBotsGenOne);
};
