require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture bread tail tragic educate ranch remind concert hunt glimpse fringe spatial'; 
let testAccounts = [
"0xa4a936ec496160402113572644aff856244998957073c238537416c80fc99171",
"0xedbbec15f0d74388771ec3743edaa261b362df9fee7fb952b59889b06e0be030",
"0x6615bf2aa7ecda85669437aac2f763b23156d727a3629738bdc28613e180a776",
"0xb17eb4bcec25b74f288ac8dc6ed387f4b11ac0b1f67e100a84dd7ef404702fd8",
"0x77a1d9a0095e57d745752be3334618233209cb198396c4a539cdd260067c010d",
"0xae60df13876602b18032e5a17381e1a17b9aded4bb7873e8098ad7f84ae84cf2",
"0x59a6ab5066aa2fd637db59a0ded17dfb8dfeee9a6568d5834a780995229a7f8d",
"0xd86ec20f4316b544d33e58cf3a0540ff5248cee054fd39eb4d8fb8119a26061d",
"0x8a883d2a5bce62fbdd2c34f4bf4bc1521b067fc3c95f6f14cf49bb7fdad89e81",
"0xf9c7d55741de23615bd97c2dfd89ff6f3babf60fbe9b388f39f60ae3a516054d"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

