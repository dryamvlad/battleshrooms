const BabyBattleBots = artifacts.require("BabyBattleBots");

module.exports = function (deployer) {
  deployer.deploy(BabyBattleBots);
};
