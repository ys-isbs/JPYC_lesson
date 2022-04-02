async function myFunction() {
    const provider = await new ethers.providers.Web3Provider(window.ethereum)
    const blockNumber = await provider.getBlockNumber();
    console.log(blockNumber);
}
myFunction();