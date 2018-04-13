# JUST-miner 
If you were under impression that deploying a useless spam token is where it ends, you'd be wrong. This repository contains basically the equivalent of the black plague in code format.
## What is the JUST token?
At the time of creating this repository, `JUST powh.io` is the only ERC-20 token that _literally_ everyone and their mother _at least_ has 232 units of. I refer you to the [Etherscan page](https://etherscan.io/address/0x4FEE2D21aaCA705B70f86db48FE4b166482f7700) for [the sourcecode behind it](https://etherscan.io/address/0x4FEE2D21aaCA705B70f86db48FE4b166482f7700#code).


## What does the JUST-miner do?
The miner loops through every transaction in a random recently mined block. It then updates the Etherscan.io page for the sender and receiver of every of these transactions. After the block is fully "mined" by the app, it walks through the next block and repeats the process. Ad infinitum.

*Result?* **The etherscan.io page of every actively used ETH wallet will show `232 powh.io` in their token balance.** 


# How do I use it?
You either download the precompiled binaries, or compile/run from source.

## Downloading the .EXE & other OS equivalents
1. Go to https://github.com/mantso/JUST-miner/releases
2. Download your OS's release archive. `win` for Windows, etc. 
3. Extract the files into a directory.
4. Run miner-win.exe _or_ miner-linux _or_ miner-macos.app (whichever operating system equivalent you downloaded) and watch the fireworks.

## Executing from source
1. Make sure you have [NodeJS 8.x](https://nodejs.org/en/) installed.
2. Clone this repository to an empty directory.
3. Open a terminal window and traverse to the directory in which you cloned this repository.
4. Run `npm install`.
5. Wait. Done?
6. Run `node miner.js` and watch the fireworks.

## Compiling from source
1. Do the steps above ("running from source") .
2. Run `npm install pkg --global`.
3. Wait. Done?
4. Run `pkg miner.js`.
5. Voila. You have now compiled from source for every popular platform (Linux, Windows, MacOS).