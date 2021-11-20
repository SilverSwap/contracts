// const { WNATIVE } = require("@sushiswap/sdk");

module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy } = deployments;
  
    const { deployer } = await getNamedAccounts();
  
    await deploy("SilverToken", {
      from: deployer,
      args: ['0x891b363AC490Ed7bd9b36378028f46eC857d2139'],
      log: true,
      deterministicDeployment: false,
    });
  };
  
  module.exports.tags = ["SilverToken", "ERC20"];