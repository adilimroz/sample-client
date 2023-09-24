import { Provider } from "aptos";

const customEndpoints = {
    fullnodeUrl: "https://g.w.lavanet.xyz:443/gateway/apt1/rest/5e39175fde19250dbcb30b4b5ab1cb4f"
}

const client = new Provider(customEndpoints, undefined, true);

async function fetchAccountResources(address: string) {
    try {
        const res = await client.getAccountResources(address);
        return 'success';
    } catch (error) {
        console.log('Error:', error);
        return 'error';
    }
}

export { client, fetchAccountResources };
