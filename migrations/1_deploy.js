const BattleShroomsGenOne = artifacts.require("BattleShroomsGenOne");

module.exports = async function (deployer) {
  deployer.deploy(BattleShroomsGenOne);
};
