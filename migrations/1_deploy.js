const BCBPuzzlePrizes = artifacts.require("BCBPuzzlePrizes");

module.exports = async function (deployer) {
  deployer.deploy(BCBPuzzlePrizes);
};
