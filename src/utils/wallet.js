import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/html'
import { configureChains, createClient, getNetwork } from '@wagmi/core'
import { CHAINS, W3M_PROJECT_ID, DEFAULT_CHAINID, ABI, CONTRACT_ADDRESS } from '@/constant'
import {useUserStore} from "@/stores/user";
import {pinia} from "@/main";
import Web3 from "web3";


const projectId = W3M_PROJECT_ID
const { provider } = configureChains(CHAINS, [w3mProvider({ projectId })])
export const wagmiClient = createClient({
    autoConnect: true,
    connectors: w3mConnectors({ CHAINS, version: 1, projectId }),
    provider
})
export const ethereumClient = new EthereumClient(wagmiClient, CHAINS)
export const web3modal = new Web3Modal({
    projectId,
    themeVariables: {
        '--w3m-accent-color': '#FFFFFF',
        '--w3m-background-color': '#000000',
        '--w3m-accent-fill-color': '#FFFFFF',
    }
}, ethereumClient);

// web3modal.subscribeModal()

export const changeChain = async (chainId) => {
    if (getNetwork().chain.id !== chainId) {
        await ethereumClient.switchNetwork({chainId: chainId}).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }
}

ethereumClient.watchAccount(async (res) => {
    console.log('watchAccount:', res)
    const userStore = useUserStore(pinia);
    if (res.isConnected) {
        await userStore.login();
    } else {
        if (userStore.token !== '') {
            userStore.logout();
        }
    }
})
ethereumClient.watchNetwork((res) => {
    console.log('watchNetwork:', res)
});

export const web3 = new Web3(provider);

export const account = ethereumClient.getAccount();

export const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);



