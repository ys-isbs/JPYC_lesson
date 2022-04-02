let a;
async function myFunction() {
    const provider = await new ethers.providers.Web3Provider(window.ethereum)
    a = await provider.getBlockNumber();
}
myFunction();
console.log(a);