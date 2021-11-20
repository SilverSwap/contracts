require("dotenv/config");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan"); // To learn how to set multiple arguments: https://hardhat.org/plugins/nomiclabs-hardhat-etherscan.html
require("hardhat-deploy");
require("hardhat-deploy-ethers");
require("./tasks");

let accounts;

if (process.env.PRIVATE_KEY) {
    accounts = [process.env.PRIVATE_KEY];
} else {
    accounts = {
        mnemonic: process.env.MNEMONIC || "test test test test test test test test test test test junk",
    };
}

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    defaultNetwork: "BSC_TESTNET", // Change this back later to "moonriver"
    namedAccounts: {
        deployer: {
            default: 0,
        },
        dev: {
            default: 1,
        },
    },
    etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY,
    },
    networks: {
        MATIC_TESTNET: {
            url: `https://matic-mumbai.chainstacklabs.com`,
            chainId: 80001,
            accounts,
            live: true,
            saveDeployments: true,
            tags: ["MATIC_TESTNET"],
            gasPrice: 'auto',
            gas: 'auto',
        },
        CRONOS_TESTNET: {
            url: `https://cronos-testnet-3.crypto.org:8545/`,
            chainId: 338,
            accounts,
            live: true,
            saveDeployments: true,
            tags: ["CRONOS_TESTNET"],
            gasPrice: 'auto',
            gas: 'auto',
        },
        BSC_TESTNET: {
            url: `https://data-seed-prebsc-1-s1.binance.org:8545`,
            chainId: 97,
            accounts,
            live: true,
            saveDeployments: true,
            tags: ["BSC_TESTNET"],
            gasPrice: 'auto',
            gas: 'auto',
        },
    },
    solidity: {
        compilers: [
            {
                version: "0.6.12",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
            {
                version: "0.8.2",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
        ],
    },
};
