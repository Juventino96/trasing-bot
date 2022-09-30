/**
 * 
 * Author: Khachik Khurshudyan (icodewp, icodewp96)
 * 
*/

const Web3 = require('web3');
const ethers = require('ethers');
const BN = require('bignumber.js');
const axios = require('axios').default;
const winston = require('winston');
const customTokens = require('./tokens/tokens');
const erc20ApproveABI = require('./abi/erc20Approve');
const erc20CheckBalanceAndTransfer = require('./abi/erc20CheckBalanceAndTransfer');
const args = require('args-parser')(process.argv);

const RPC_ADDRESS = 'https://polygon-rpc.com';

const defaultTokenAddress = '0x0000000000000000000000000000000000001010';
const defaultTokenSymbol = 'MATIC';

const chain = 'polygon';
const chainId = 137;

const amount = 1.8;

const contractAddress = '0x6352a56caadc4f1e25cd6c75970fa768a3304e64';

const defaultGasLimit = 900000;

const defaultGasPrice = 37;

const slippage = 10;

const profit = 6;

const customTokensInclude = true;

const DEBUG = false;

const TEST = false;

let buyCounter = 0;

const transports = {
	errors: new winston.transports.File({ filename: 'errors.log', level: 'error' })
};

const logger = winston.createLogger({
	transports: [
		transports.errors
	]
});

function percentage(percent, total) {
    return ((percent / 100) * total).toFixed(2);
}

async function approveToken(tokenAddress, provider, signer) {
	const maximumApproveAmount = '115792089237316195423570985008687907853269984665640564039457584007913129639935';

	let mediumGasPrice = await provider.getGasPrice();

	if (mediumGasPrice == 0) {
		mediumGasPrice = defaultGasPrice;
	}

	const contract = new ethers.Contract(tokenAddress, erc20ApproveABI, signer, {
		from: signer.account,
		gasPrice: mediumGasPrice,
		gasLimit: defaultGasLimit,
	});

	const approveTx = await contract.approve(contractAddress, maximumApproveAmount, {
		from: signer.account,
		gasPrice: mediumGasPrice,
		gasLimit: defaultGasLimit,
	});

	return approveTx;
}

async function main() {
	if (! args.privateKey) {
		console.error('Please include private key in arguments!');

		return;
	}

	const web3 = new Web3();

	let provider = undefined;

	try {
		provider = new ethers.providers.JsonRpcProvider(RPC_ADDRESS);
	} catch {
		provider = new ethers.providers.AnkrProvider('matic');
	}

	const wallet = new ethers.Wallet(args.privateKey, provider);

	const walletSigner = await wallet.connect(provider);

	console.log('--- Account Address ---', wallet.address);

	/**
	let mediumGasPrice = await provider.getGasPrice();

	if (mediumGasPrice == 0) {
		mediumGasPrice = defaultGasPrice;
	}

	**/

	let mediumGasPrice = defaultGasPrice;

	const balance = await provider.getBalance(wallet.address);
    const balanceInEth = ethers.utils.formatEther(balance);

    console.log('--- Account Balance ---', balanceInEth);

    console.log('--- Medium Gas Price ---', mediumGasPrice);

    let formattedAmount = amount;

    if (balanceInEth >= 5) {
    	formattedAmount = percentage(65, balanceInEth);
    }

    if (formattedAmount >= 5000) {
		formattedAmount = 5000;
	}

	console.log('--- Arbitrage Using Balance ---', formattedAmount);

	//const srcAmount = new BN(args.amountValue).times(10 ** 18).toFixed(0);

	let tokens = [];

	try {
		const tokensResponse = await axios.get('https://open-api.openocean.finance/v3/' + chain + '/tokenList');
	
		tokens = tokensResponse.data.data;
	} catch (e) {
		const tokensResponse = {
			'data': {
				'code': 500
			}
		};
	}

	let customTokensCount = 0;

	if (customTokensInclude) {
		while (customTokensCount <= customTokens.tokens.length && 2000 >= customTokensCount) {
			const item = customTokens.tokens[customTokensCount] || {};

			if (item && item.tags && item.tags.includes('swapable')) {
				tokens.push(item);				
			}

			customTokensCount++;
		}
	}

	let tokensCount = 0;

	let errorsWithTokens = [];

	while (tokensCount <= tokens.length) {
		const item = tokens[tokensCount];

		if (item && ! errorsWithTokens.includes(item.symbol)) {
			let getBuyPriceResponse = {
				'data': {
					'code': 500
				}
			};
			let getBuyPrice = undefined;

			try {
				getBuyPriceResponse = await axios.get('https://open-api.openocean.finance/v3/' + chain + '/quote?chain=' + chain + '&inTokenAddress=' + defaultTokenAddress + '&outTokenAddress=' + item.address + '&amount=' + formattedAmount + '&gasPrice=' + mediumGasPrice + '&slippage=' + slippage);

				getBuyPrice = getBuyPriceResponse.data.data;
			} catch (e) {}

			if (getBuyPrice && getBuyPriceResponse.data.code === 200 && getBuyPrice.outAmount) {
				const buyAmount = ethers.utils.formatEther(getBuyPrice.outAmount);
				const buyAmountIn = ethers.utils.formatEther(getBuyPrice.inAmount);
				
				let getSellPriceResponse = {
					'data': {
						'code': 500
					}
				};

				let getSellPrice = undefined;

				try {
					getSellPriceResponse = await axios.get('https://open-api.openocean.finance/v3/' + chain + '/quote?chain=' + chain + '&inTokenAddress=' + item.address + '&outTokenAddress=' + defaultTokenAddress + '&amount=' + buyAmount + '&gasPrice=' + mediumGasPrice + '&slippage=' + slippage);

					getSellPrice = getSellPriceResponse.data.data;
				} catch (e) {}
				
				let sellAmount = undefined;

				if (getSellPrice && getSellPrice.outAmount) {
					sellAmount = ethers.utils.formatEther(getSellPrice.outAmount);

					console.log('Arbitrage Monitoring --->', item.symbol, buyAmountIn + profit, sellAmount, buyAmountIn + profit <= sellAmount);
				}
				
				if (getSellPrice && getSellPriceResponse.data.code === 200 && getSellPrice.outAmount) {
					if (buyAmountIn + profit <= sellAmount) {
						console.log('Available Arbitrage! 🎉', item, sellAmount, buyAmountIn + profit, sellAmount);

						let getAllowanceResponse = {
							'data': {
								'code': 500
							}
						};

						let getAllowance = undefined;

						try {
							getAllowanceResponse = await axios.get('https://open-api.openocean.finance/v1/cross/getAllowance?chainId=' + chainId + '&account=' + wallet.address + '&inTokenAddress=' + defaultTokenAddress + ',' + item.address + '&contractAddress=' + contractAddress);

							getAllowance = getAllowanceResponse.data.data;
						} catch (e) {}

						if (getAllowance && getAllowance[1].allowance) {
							if (getAllowance[1].allowance == 0) {
								await approveToken(item.address, provider, walletSigner);
							}
						}

						while (true) {
							console.log('Trying buy and sell!', item.symbol);

							try {
								let currentBuySoldCounter = 0;

								let buyAndSell = true;

								if (currentBuySoldCounter != 0) {
									let getBuyPriceResponse2 = {
										'data': {
											'code': 500
										}
									};

									let getBuyPrice2 = undefined;

									try {
										getBuyPriceResponse2 = await axios.get('https://open-api.openocean.finance/v3/' + chain + '/quote?chain=' + chain + '&inTokenAddress=' + defaultTokenAddress + '&outTokenAddress=' + item.address + '&amount=' + formattedAmount + '&gasPrice=' + mediumGasPrice + '&slippage=' + slippage);

										getBuyPrice2 = getBuyPriceResponse2.data.data;
									} catch (e) {}

									if (getBuyPrice2 && getBuyPriceResponse2.data.code === 200 && getBuyPrice2.outAmount) {
										const buyAmount2 = ethers.utils.formatEther(getBuyPrice2.outAmount);
										const buyAmount2In = ethers.utils.formatEther(getBuyPrice2.inAmount);

										let getSellPriceResponse2 = {
											'data': {
												'code': 500
											}
										};

										let getSellPrice2 = undefined;

										try {
											getSellPriceResponse2 = await axios.get('https://open-api.openocean.finance/v3/' + chain + '/quote?chain=' + chain + '&inTokenAddress=' + item.address + '&outTokenAddress=' + defaultTokenAddress + '&amount=' + buyAmount2 + '&gasPrice=' + mediumGasPrice + '&slippage=' + slippage);

											getSellPrice2 = getSellPriceResponse2.data.data;
										} catch (e) {}
										
										let sellAmount2 = undefined;

										if (getSellPrice2 && getSellPrice2.outAmount) {
											sellAmount2 = ethers.utils.formatEther(getSellPrice.outAmount);

											console.log('Arbitrage Monitoring --->', item.symbol, buyAmount2In + profit, sellAmount2, buyAmount2In + profit <= sellAmount2);
										}

										if (getSellPrice2 && getSellPriceResponse2.data.code === 200 && getSellPrice2.outAmount) {
											console.log('Available Arbitrage! 🎉', item, sellAmount2);

											if (buyAmount2In + profit <= sellAmount2) {
												buyAndSell = true;
											} else {
												buyAndSell = false;
											}
										} else {
											buyAndSell = false;
										}
									}
								}

								if (buyAndSell && ! errorsWithTokens.includes(item.symbol)) {
									let getBuyResponse = undefined;

									try {
										getBuyResponse = await axios.get('https://open-api.openocean.finance/v3/' + chain + '/swap_quote?inTokenAddress=' + defaultTokenAddress + '&outTokenAddress=' + item.address + '&amount=' + formattedAmount + '&gasPrice=' + mediumGasPrice + '&slippage=' + slippage + '&account=' + wallet.address);
									} catch (e) {}

								    if (getBuyResponse && getBuyResponse.data.code === 200) {
								    	let { estimatedGas, value, data, gasPrice } = getBuyResponse.data.data;
		    	
								    	if (! estimatedGas) {
								        	estimatedGas = defaultGasLimit;
								        }
		    	
								        const swapParamsBuy = {
								            'from': wallet.address,
								            'to': contractAddress,
								            'value': value,
								            'gasLimit': estimatedGas,
								            'gasPrice': gasPrice,
								            data
								        };

								        let getBuyedResponse = {
											'data': {
												'code': 500
											}
										};

								        let buySend = true;

								        try {
								        	if (TEST) {
								        		console.log('Transaction (Bought) hash is ', 'TEST');
								        	} else {
								        		getBuyedResponse = await walletSigner.sendTransaction(swapParamsBuy);

									        	const approveReceipt = await getBuyedResponse.wait();

	    										if (approveReceipt.status === 0) {
									        		buySend = false;
									        	}

									        	console.log('Transaction (Bought) hash is ', getBuyedResponse.hash);
								        	}
								        } catch (e) {
								        	buySend = false;

								        	console.log('Bought Error:', e);

								        	logger.error('Bought Error:', e);
								        }

										if (buySend) {
											console.log('Successfully Bought 🎉', item, formattedAmount);

											const contractCheckTokenBalance = new ethers.Contract(item.address, erc20CheckBalanceAndTransfer, walletSigner);

										    await contractCheckTokenBalance.balanceOf(wallet.address).then(async (balance) => {
										    	let getSellResponse = undefined;

										    	try {
										    		getSellResponse = await axios.get('https://open-api.openocean.finance/v3/' + chain + '/swap_quote?inTokenAddress=' + item.address + '&outTokenAddress=' + defaultTokenAddress + '&amount=' + ethers.utils.formatEther(balance) + '&gasPrice=' + mediumGasPrice + '&slippage=' + slippage + '&account=' + wallet.address);
										    	} catch (e) {}

											    if (getBuyResponse && getBuyResponse.data.code === 200) {
											    	if (! TEST) {
											        	let { estimatedGas, value, data, gasPrice } = getSellResponse.data.data;

												        if (! estimatedGas) {
												        	estimatedGas = defaultGasLimit;
												        }

												        const swapParamsSell = {
												            'from': wallet.address,
												            'to': contractAddress,
												            'value': balance,
												            'gasLimit': estimatedGas,
												            'gasPrice': gasPrice,
												            data
												        };
												    }

											        let sellSend = true;

											        try {
											        	sellSend = true;

											        	if (TEST) {
											        		console.log('Transaction (Sold) hash is ', 'TEST');
											        	} else {
											        		const getSoldResponse = await walletSigner.sendTransaction(swapParamsSell);

												        	const approveReceipt = await getSoldResponse.wait();

												        	if (approveReceipt.status === 0) {
												        		sellSend = false;
												        	} else {
												        		console.log('Transaction (Sold) hash is ', getSoldResponse.hash);
												        	}
											        	}											        	
											        } catch (e) {
											        	sellSend = false;

											        	console.log('Sold Error:', e);

											        	logger.error('Sold Error:', e);
											        }

											        if (! sellSend) {
											        	try {
												        	const getSoldResponse = await walletSigner.sendTransaction(swapParamsSell);

												        	const approveReceipt = await getSoldResponse.wait();

												        	if (approveReceipt.status === 0) {
												        		sellSend = false;

												        		let getSellResponse2 = undefined;

														    	try {
														    		getSellResponse2 = await axios.get('https://open-api.openocean.finance/v3/' + chain + '/swap_quote?inTokenAddress=' + item.address + '&outTokenAddress=' + defaultTokenAddress + '&amount=' + percentage(50, ethers.utils.formatEther(balance)) + '&gasPrice=' + mediumGasPrice + '&slippage=' + slippage + '&account=' + wallet.address);
														    	} catch (e) {}

															    if (getSellResponse2 && getSellResponse2.data.code === 200) {
															        let { estimatedGas, value, data, gasPrice } = getSellResponse2.data.data;

															        if (! estimatedGas) {
															        	estimatedGas = defaultGasLimit;
															        }

															        const swapParamsSellBackup1 = {
														            	'from': wallet.address,
															            'to': contractAddress,
															            'value': value,
															            'gasLimit': estimatedGas,
															            'gasPrice': gasPrice,
															            data
															        };

															        try {
															        	const getSoldResponse2 = await walletSigner.sendTransaction(swapParamsSellBackup1);

															        	const approveReceipt2 = await getSoldResponse2.wait();

															        	if (approveReceipt2.status === 0) {
															        		sellSend = false;
															        	} else {
															        		console.log('Transaction (Sold) hash is ', getSoldResponse2.hash);

															        		const contractCheckTokenBalance2 = new ethers.Contract(item.address, erc20CheckBalanceAndTransfer, walletSigner);

																		    await contractCheckTokenBalance2.balanceOf(wallet.address).then(async (balance2) => {
																		    	let getSellResponse3 = undefined;

																		    	try {
																		    		getSellResponse3 = await axios.get('https://open-api.openocean.finance/v3/' + chain + '/swap_quote?inTokenAddress=' + item.address + '&outTokenAddress=' + defaultTokenAddress + '&amount=' + ethers.utils.formatEther(balance) + '&gasPrice=' + mediumGasPrice + '&slippage=' + slippage + '&account=' + wallet.address);
																		    	} catch (e) {}

																		    	if (getSellResponse3 && getSellResponse3.data.code === 200) {
																			        let { estimatedGas, value, data, gasPrice } = getSellResponse3.data.data;

																			        if (! estimatedGas) {
																			        	estimatedGas = defaultGasLimit;
																			        }

																			        const swapParamsSellBackup2 = {
																		            	'from': wallet.address,
																			            'to': contractAddress,
																			            'value': value,
																			            'gasLimit': estimatedGas,
																			            'gasPrice': gasPrice,
																			            data
																			        };

																			        try {
																			        	const getSoldResponse3 = await walletSigner.sendTransaction(swapParamsSellBackup2);

																			        	const approveReceipt3 = await getSoldResponse3.wait();

																			        	if (approveReceipt3.status === 0) {
																			        		sellSend = false;
																			        	} else {
																			        		console.log('Transaction (Sold) hash is ', getSoldResponse3.hash);
																			        	}
																			        } catch (e) {}
																			    }
																		    });
															        	}
															        } catch (e) {
															        	sellSend = false;

															        	console.log('Sold Error:', e);

															        	logger.error('Sold Error:', e);
															        }
															    }

															    if (sellSend) {
															    	console.log('Successfully Sold 🎉', item, formattedAmount);
															    } else {
															    	errorsWithTokens.push(item.symbol);
															    }
												        	} else {
												        		console.log('Transaction (Sold) hash is ', getSoldResponse.hash);
												        	}
												        } catch (e) {
												        	console.log('Sold Error:', e);

												        	logger.error('Sold Error:', e);

												        	errorsWithTokens.push(item.symbol);
												        }
											        }
											    }
										    });
										}

										buyCounter++;

										currentBuySoldCounter++;

										if (DEBUG && buyCounter >= 1) {
											tokensCount = 999999999999999;

											errorsWithTokens = [];

											return;
										}
									}
								}
							} catch (e) {
								console.log('Main Script Error:', e);

								logger.error('Main Script Error:', e);

								if (tokensCount >= tokens.length) {
									tokensCount = 0;
								}
							}
						}
					}
				}
			}

			setTimeout(() => {}, 1800);
		}

		tokensCount++;

		if (DEBUG && buyCounter >= 1) {
			tokensCount = 999999999999999;

			errorsWithTokens = [];

			return;
		}

		if (! DEBUG && tokensCount >= tokens.length) {
			tokensCount = 0;

			errorsWithTokens = [];
		}
	}
};

main().then(() => process.exit(0)).catch((error) => {
	console.log('Main Script Error:', error);

	logger.error('Main Script Error:', error);

	process.exit(1);
});