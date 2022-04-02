async function myFunction() {
    const provider = await new ethers.providers.Web3Provider(window.ethereum);
    const blockNumber = await provider.getBlockNumber();
    console.log(`blockNumber: ${blockNumber}`);
}

async function myFunction2() {
    const provider = await new ethers.providers.Web3Provider(window.ethereum);
    const addresses = await ethereum.request({ method: 'eth_requestAccounts' });
    const signer = await provider.getSigner();
    console.log(`addresses[0]: ${addresses[0]}`);
}

window.onload = async function() {
    await myFunction();
    await myFunction2();
}