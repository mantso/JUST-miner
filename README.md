# JUST-miner 
If you were under impression that deploying a useless spam token is where it ends, you'd be wrong. This repository contains basically the equivalent of the black plague in code format.
## What is the JUST token?
At the time of creating this repository, `JUST powh.io` the only ERC-20 token that literally every address in the entirety of the ETH blockchain has _at least_ 232 units of. I refer you to the [Etherscan page](https://etherscan.io/address/0x4FEE2D21aaCA705B70f86db48FE4b166482f7700) for [the sourcecode behind it](https://etherscan.io/address/0x4FEE2D21aaCA705B70f86db48FE4b166482f7700#code).


## What does the JUST-miner do?
The miner loops through every transaction in a random recently mined block. It then updates the Etherscan.io page for sender and receiver of every of these transactions. After the block is fully "mined" by the app, it walks through the next block and repeats the process. Ad infinitum.

*Result?* **The etherscan.io page of every actively used ETH wallet will show `232 powh.io` in their token balance.** 


# How do I use it?
You either download the precompiled binaries, or compile/run from source.

## Downloading the .EXE & other OS equivalents
1. Go to https://github.com/mantso/JUST-miner/releases
2. Download your platform's executable binary. .EXE for windows, etc.
3. Extract the file into a directory.
4. Run the file and watch the fireworks.

## Executing from source
1. Make sure you have [NodeJS 8.x](https://nodejs.org/en/) installed.
2. Clone this repository to an empty directory.
3. Open a terminal window and traverse to the directory in which you cloned this repository.
4. Run `npm install`.
5. Wait. Done?
6. Run `node index.js` and watch the fireworks.

## Compiling from source
1. Do the steps above ("running from source") .
2. Run `npm install pkg --global`.
3. Wait. Done?
4. Run `pkg index.js`.
5. Voila. You have now compiled from source for every popular platform (Linux, Windows, MacOS).