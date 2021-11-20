module.exports = async function ({ ethers, getNamedAccounts, deployments, getChainId }) {
    const { deploy } = deployments;

    const { deployer, dev } = await getNamedAccounts();
  
    await deploy("SilverFactory", {
      from: deployer,
      args: [deployer],
      log: true,
      deterministicDeployment: false,
    });
  };
  
  module.exports.tags = ["SilverFactory", "AMM"];
