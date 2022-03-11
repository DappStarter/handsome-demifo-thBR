require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half arena october traffic walnut raw remain million hope enroll orange gentle'; 
let testAccounts = [
"0xf5618711252122659d9517c52df6fd4b1e4325359215ac71fda1f62c19858801",
"0x6d9b3bfa16b8a115b0115cffb1b0a96d78a5ad2ac616c27aa2529ec05ccf1efb",
"0x4f7a3d6b87acca71ef46f3a31328355a29f7516ff33c77d57f8331668d29ec77",
"0xf217ba839975335ec295551da76842858c228cf0c0f13ba3dab09de06e196ae6",
"0x41842f95ffdc7326783956ba9d6c910baeeb3138e098d0280e6c2a6033a50e3e",
"0x3c11eac0f0c74baf5978c5b883c68e3310e11665da6628881e0fdf422a7ac12d",
"0x3649f30e32c581ea017ecc192ed3a6266e1e1ef035812200e69f6f97a5876318",
"0x8c161e3dd6916acdf3cb6241db4d2406ad2e0b2cec334184ed45043c9e0b57f3",
"0xb6ee87f82f0a00780cc6e61192d81ddbf571e814f58437172cc80e8afd3edb8b",
"0xa2a3e42f0253a31ad2fd83e07ef993e5c71c3b63fcc21d46f8e5d73fb314ea8e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

