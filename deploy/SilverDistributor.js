// const { WNATIVE } = require("@sushiswap/sdk");

module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy } = deployments;
  
    const { deployer, dev } = await getNamedAccounts();

    const SilverAddress = (await deployments.get("SilverToken")).address;
  
    await deploy("SilverDistributor", {
      from: deployer,
      args: [SilverAddress, "60000000000000000000"],
      log: true,
      deterministicDeployment: false,
    });
  };
  
  module.exports.tags = ["SilverDistributor", "Farming"];
  module.exports.dependencies = ["SilverToken"];