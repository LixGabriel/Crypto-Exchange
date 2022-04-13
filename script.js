// Generating Balance
const totalBalance = Math.floor( (Math.random() * 1000) + 10000);

// Generating Prices
const bitcoinPrice = Math.floor( (Math.random() * 100) + 100);
const ethereumPrice = Math.floor( (Math.random() * 100) + 100);
const polkadotPrice = Math.floor( (Math.random() * 100) + 100);
const elrondPrice = Math.floor( (Math.random() * 100) + 100);
const tetherPrice = 100;

// Initial Owned Amounts
let ownedBitcoin = 0;
let ownedEthereum = 0;
let ownedTether = 0;
let ownedPolkadot = 0;
let ownedElrond = 0;

// Balance DOM Manipulation
$("#total-balance").text(totalBalance);

// Market Prices DOM Manipulation
$("#bitcoin-price").text(bitcoinPrice);
$("#ethereum-price").text(ethereumPrice);
$("#tether-price").text(tetherPrice);
$("#polkadot-price").text(polkadotPrice);
$("#elrond-price").text(elrondPrice);

// Portfolio Amounts DOM Manipulation
$("#bitcoin-owned").text(ownedBitcoin);
$("#ethereum-owned").text(ownedEthereum);
$("#tether-owned").text(ownedTether);
$("#polkadot-owned").text(ownedPolkadot);
$("#elrond-owned").text(ownedElrond);

