const contractAddress = "0xYourContractAddress";
const abi = [...] // Contract ABI here

let provider;
let signer;
let contract;

document.getElementById('connect').onclick = async() => {
    await connectWallet();
    await displayBalance();
};

async function connectWallet() {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    signer = provider.getSigner();
    contract = new ethers.Contract(contractAddress, abi, signer);
}

async function displayBalance() {
    const balance = await contract.balanceOf(await signer.getAddress());
    document.getElementById('balance').textContent = `Balance: ${ethers.utils.formatEther(balance)} STK`;
}