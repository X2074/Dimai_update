/**
 * token key
 */
export const TOKEN = 'token'
/**
 * 用户信息 key
 */
export const USER_INFO = 'userInfo'
/**
 * token 创建的时间戳 key
 */
export const TIME_STAMP = 'timeStamp'
/**
 * 超时时长(毫秒) 2小时
 */
export const TOKEN_TIMEOUT_VALUE = 2 * 3600 * 1000
/**
 * w3m项目id
 * @type {string}
 */
export const W3M_PROJECT_ID = '57906c2a53779d0eeed9b515095f6d3b'
/**
 * 可用网络的rpc信息
 */
export const QngMainnet = {
    id: 813,
    name: 'Qitmeer',
    network: 'Qitmeer Network',
    nativeCurrency: {
        decimals: 18,
        name: 'Qitmeer',
        symbol: 'Meer'
    },
    rpcUrls: {
        public: { http: ['https://qng.rpc.qitmeer.io'] },
        default: { http: ['https://qng.rpc.qitmeer.io'] }
    },
    blockExplorers: {
        etherscan: { name: 'SnowTrace', url: 'https://qng.rpc.qitmeer.io' },
        default: { name: 'SnowTrace', url: 'https://qng.rpc.qitmeer.io' }
    }
}
export const QngTestnet = {
    id: 8131,
    name: 'Qitmeer Testnet',
    network: 'Qitmeer Testnet Network',
    nativeCurrency: {
        decimals: 18,
        name: 'Qitmeer',
        symbol: 'Meer'
    },
    rpcUrls: {
        public: { http: ['https://testnet-qng.rpc.qitmeer.io'] },
        default: { http: ['https://testnet-qng.rpc.qitmeer.io'] }
    },
    blockExplorers: {
        etherscan: { name: 'SnowTrace', url: 'https://qng-testnet.rpc.qitmeer.io' },
        default: { name: 'SnowTrace', url: 'https://qng-testnet.rpc.qitmeer.io' }
    }
}
export const AmanaTestnet = {
    id: 81341,
    name: 'Amana Testnet',
    network: 'Amana Testnet Network',
    nativeCurrency: {
        decimals: 18,
        name: 'Amana',
        symbol: 'Meer'
    },
    rpcUrls: {
        public: { http: ['https://testnet-amana.rpc.qitmeer.io'] },
        default: { http: ['https://testnet-amana.rpc.qitmeer.io'] }
    },
    blockExplorers: {
        etherscan: { name: 'SnowTrace', url: 'https://amana-testnet.rpc.qitmeer.io' },
        default: { name: 'SnowTrace', url: 'https://amana-testnet.rpc.qitmeer.io' }
    }
}
export const CHAINS = [QngMainnet, QngTestnet, AmanaTestnet]
/**
 * Default chain, use 8131 (qng testnet) for testing phase, change to 813 (qng mainnet) for production phase
 */
export const DEFAULT_CHAINID = 8131;

export const BASE_URL = "http://3.0.98.217:8080";

export const CONTRACT_ADDRESS = "0x984da12fD52Ec5640bEa903E6f596925385b9F9E";

export const ABI = [{"inputs":[{"internalType":"uint256","name":"payAmount","type":"uint256"}],"name":"buyDIM","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"destroyContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"payAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokenAmount","type":"uint256"}],"name":"BuyDIM","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldManager","type":"address"},{"indexed":true,"internalType":"address","name":"newManager","type":"address"}],"name":"ManagerSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"setor","type":"address"},{"indexed":false,"internalType":"uint256","name":"oldRatio","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newRatio","type":"uint256"}],"name":"RatioSet","type":"event"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newManager","type":"address"}],"name":"setManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newRatio","type":"uint256"}],"name":"setRatio","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token_","type":"address"}],"name":"setToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"setor","type":"address"},{"indexed":false,"internalType":"address","name":"tokenContract","type":"address"}],"name":"SetToken","type":"event"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawMeer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token_","type":"address"}],"name":"withdrawToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"},{"inputs":[],"name":"getManager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ratio","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];

