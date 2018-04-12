const web3 = require("web3")
const _ = require("lodash")
const req = require("async-request")
const Promise = require("bluebird")
const log = require('./log')

// constrain our pool of blocks to discover from to the 10% most recent blocks, or whichever number you write here
const blockThreshold = 0.1
var blockchain = new web3("https://mainnet.infura.io/mG6jVQb9jtQvhQjr45cT")
var alreadyDid = {}

async function rotate(blockNum){
	log.methods.info(`miner.rotate`, `Targetting block #${blockNum}.`)
	await discover(blockNum)
	log.methods.info(`miner.rotate`, `Rotating to new block..`)
	let nextBlock = blockNum - 1;
	rotate(nextBlock)
	
}

async function load(){
	log.methods.info(`miner.load`, `Miner started. Fetching latest block number and randomizing starting point from one of the ${blockThreshold * 100}% most recent blocks.`)
	let latestBlock = await blockchain.eth.getBlock('latest')
	let blockNum = parseFloat(latestBlock.number)
	let targetBlock  = Math.floor(blockNum - (Math.random() * (blockNum * blockThreshold)))
	log.methods.info(`miner.load`, `Starting from block num #${targetBlock}.`)
		
	// initiate discoverer
	rotate(targetBlock)
} 

async function discover(blockNum){
	try {
		let latestBlock = await blockchain.eth.getBlock(blockNum)
		var txs = _.values(latestBlock.transactions)
		var max = txs.length;
		var count = 1;
		await Promise.mapSeries(txs, async (txNum) => {
			let tx = await blockchain.eth.getTransaction(txNum) 
			
			if(!alreadyDid[tx.from]){
				await req(`https://etherscan.io/token/0x4FEE2D21aaCA705B70f86db48FE4b166482f7700?a=${tx.from}`)
				await Promise.delay(500)
				alreadyDid[tx.from] = true
				log.methods.info(`miner.discover`, `[${count} / ${max}] updated etherscan wallet for ${tx.from}`)
			}

			if(!alreadyDid[tx.to]){
				await req(`https://etherscan.io/token/0x4FEE2D21aaCA705B70f86db48FE4b166482f7700?a=${tx.to}`)
				await Promise.delay(500)
				alreadyDid[tx.to] = true
				log.methods.info(`miner.discover`, `[${count} / ${max}] updated etherscan wallet for ${tx.to}`)

			}
			count++;
		})

		return true;
	} catch(e) {
		log.methods.error(`miner.discover`, `Somewhere, somehow, some error. Contact mantso with the following: ${JSON.stringify(e)}`)
		throw e;
	}
}



load()
