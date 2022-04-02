const provider = new ethers.providers.Web3Provider(window.ethereum)
let a;
function myFunction() {
    a = provider.getBlockNumber();
}
myFunction();
console.log(a);