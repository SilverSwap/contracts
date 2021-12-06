module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();

  let wethAddress = "0xDd7FBd7e655DE4B8eccb2B3254F6B69B569F0A9a"; // This is for testnet
  // WCRO is 0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23
  // WTCRO is 0xDd7FBd7e655DE4B8eccb2B3254F6B69B569F0A9a
  // Actually.. Wrapped BNB or CRO
  // https://testnet.bscscan.com/address/0xae13d989dac2f0debff460ac112a837c89baa7cd
  // https://cronos.crypto.org/explorer/address/0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23

  const factoryAddress = (await deployments.get("SilverFactory")).address;

  await deploy("SilverRouter02", {
    from: deployer,
    args: [factoryAddress, wethAddress],
    log: true,
    deterministicDeployment: false,
  });
};

module.exports.tags = ["SilverRouter02", "AMM"];
module.exports.dependencies = ["SilverFactory"];

