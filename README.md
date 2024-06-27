
# High Speed Volume generation bot on Base Chain - SolSpec 

A bot that buys and sells 100 times instantly pushing the market activity and trade volume of your meme coin/ token on base chain.
The coin using must be on uniswapv2 router. add your token details inside index.js file and run the program.
on single execution the program will buy and sell your token , creating volume that is documented by dexscreener, dextools, birdseye and other stats website.

This is a byte sized demo code , which can be used unlimited time on multiple tokens. only supports Base Chain.

## Not Tech Savvy? 

No problem. 
Visit our website https://volume.li

-  Connect Your wallet
-  Copy and past your Token address.  eg (0xAdsc...asda)
- Enter the amount you want to trade. eg 0.0001 (ETH)
- Click on Start trade

After Successful trade you will recieve a transaction url. if trade fails, amount will be reverted back minus gas fee.



https://github.com/solspec-dev/trade-volume-generator-on-base-chain/assets/173903670/c63ed1d8-062f-46a9-bbe1-d5feecdc78b1


## Installation guide

## First clone the repository

```javascript

git clone https://github.com/solspec-dev/trade-volume-generator-on-base-chain.git .
```

## Install dependencies
```javascript
npm install
```

### Add your token configurations inside the file index.js

```javascript
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


```

### Run the program
```javascript
npm run start

```

### Results

https://basescan.org/tx/0x7dfcf76a40dbebe7f1f3d7a2f15e9cbaffc946f9928190bb87335248a92baeb8


## FAQ

#### How to verify if the trade is executed or not?

Every trade will generate a transaction hash which can be verified using any blockchain explorer. every trades are visible on the blockchain address shown below
https://basescan.org/address/0xb657fa9443a2db2990d45e93ebd8152c2b2beb12

#### By using this script will my private key be exposed to public?

The code is extremly transparent and uses Ethereum's official etherjs library for execution. the private key added will not be exposed by running this bot. 
Here are some steps to make sure your keys are safe. always use a newly generated wallet to do test. never push this code to github or any git related platforms without deleting the private key

#### Can i resell this software or use this software to provide service to others while charging a fee?

The code is open source. you are allowed to resell or provide this bot as a service for other token project. Must not change or remove the proxy trade contract address.

#### Is this a Complete Software? Whats the catch here?

This is a demo version with unlimited execution of trades.
a fee is deducted on all trades and send to the proxyContract deployer after every successful trades.
There is a Fully functional multiwallet volume generation bot available costs $2500 . no fee deductions. every trade will have refunded amount after gas fees.

#### How to purchase Full version, what are the process?

Contact @solapriv on TG or email us at support@solspec.xyz . we will setup the bot for you . payments are acceptable in Bitcoin, Solana , BNB , USDT. costs $2500



## Support

For support, email support@solspec.xyz or contact https://t.me/solapriv
