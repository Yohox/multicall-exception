const Web3 = require('web3')
const { Multicall } = require('ethereum-multicall')
let web3 = new Web3(new Web3.providers.WebsocketProvider('wss://bsc-ws-node.nariox.org:443', {
    reconnect: {
        auto: true,
        delay: 5000, // ms
        onTimeout: false
    }
}));
const multicall = new Multicall({ web3Instance: web3, tryAggregate: true });
const contractCallContext = [];
contractCallContext.push({
    reference: 0,
    contractAddress: '0x6bD3d5242eF066b65809f10fA63B80C80D4D5096',
    abi: [
        {
            "constant": true,
            "inputs": [],
            "name": "decimals",
            "outputs": [
                {
                    "name": "",
                    "type": "uint8"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }],
    calls: [{ methodName: 'decimals' }]
})
multicall.call(contractCallContext).then(v => {
    console.log(v)
});