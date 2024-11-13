const { ethers } = require("ethers");

async function executeTradeUsingSignature(
  tokenAddress,
  iterations,
  minAmountOut,
  buyPath,
  sellPath,
  privateKey,
  rpcUrl
) {
  try {
    // this is the proxy Trade contract address which can be verified using basescan
    // check the transactions on this contract to verify the buy and sell is processed or not
    // https://basescan.org/address/0xb657fa9443a2db2990D45e93EbD8152C2B2BeB12
    // visit the address above or copy paste below contract address on any explorer
    const contractAddress = "0x28D42357E5007429Ab191F96D836Af2948a5f42F";
    //do not change the address this is the core smartcontract that does the trades

    const provider = new ethers.JsonRpcProvider(rpcUrl);

    // Connect the wallet
    const wallet = new ethers.Wallet(privateKey, provider);

    // Encode the function call
    const iface = new ethers.Interface([
      "function executeTrades(address token, uint256 iterations, uint256 minAmountOut, address[] buyPath, address[] sellPath)",
    ]);
    const data = iface.encodeFunctionData("executeTrades", [
      tokenAddress,
      iterations,
      minAmountOut,
      buyPath,
      sellPath,
    ]);

    // Send the transaction
    const tx = await wallet.sendTransaction({
      to: contractAddress,
      data: data,
      value: ethers.parseEther("0.00001"), // enter the amount you want to trade
    });

    console.log("Trade executed. Transaction hash:", tx.hash);
    await tx.wait();
    console.log("Transaction confirmed.");
  } catch (error) {
    console.error("Error executing trade:", error);
  }
}

// Demo Usage
const tokenAddress = "";
// Address of the token you want to trade copy paste your token address here

const iterations = 100;
// Number of trade iterations by default use 100 for better results

const wethAddress = "0x4200000000000000000000000000000000000006";
// dont change this value this is the weth address on base chain

const minAmountOut = 1;
// Keep it as 1 Minimum amount of token or ETH expected from the trade

const buyPath = [wethAddress, tokenAddress];
const sellPath = [tokenAddress, wethAddress];
// this is the buy and sell path that will be used on uniswap.
// no change is required here

const privateKey = "";
// Replace with your wallet private key

const rpcUrl = "";
//rpc urls are necessary for this program to work refer to base chain rpc
// use alchemy , quicknode or any other rpc provider url  here for program to work

executeTradeUsingSignature(
  tokenAddress,
  iterations,
  minAmountOut,
  buyPath,
  sellPath,
  privateKey,
  rpcUrl
);
