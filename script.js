// Generating Balance
const totalBalance = Math.floor( (Math.random() * 100000));

// Generating Prices
const bitcoinPrice = Math.floor( (Math.random() * 10000) );
const ethereumPrice = Math.floor( (Math.random() * 10000) );
const polkadotPrice = Math.floor( (Math.random() * 10000) );
const elrondPrice = Math.floor( (Math.random() * 10000) );
const tetherPrice = 1;

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


// ------------------------------------------------------------


// Adding buy/sell menu functions


// Bitcoin buy menu
function bitcoinBuyMenu() {
  if ($("#buy-bitcoin-div").css('display') == 'none') {
    $(".buy-sell-div").hide();
    $(".arrow-button").removeClass('arrow-button-active');
    $("#buy-bitcoin-div").fadeIn(400);
    $("#bitcoin-arrow-market").addClass('arrow-button-active');
  }
  else if ($("#buy-bitcoin-div").css('display') !== 'none') {
    $("#buy-bitcoin-div").fadeOut(200);
    $("#bitcoin-arrow-market").removeClass('arrow-button-active');
  }
}
$("#bitcoin-arrow-market").on('click', bitcoinBuyMenu);


// Ethereum buy menu
function ethereumBuyMenu() {
  if ($("#buy-ethereum-div").css('display') == 'none') {
    $(".buy-sell-div").hide();
    $(".arrow-button").removeClass('arrow-button-active');
    $("#buy-ethereum-div").fadeIn(400);
    $("#ethereum-arrow-market").addClass('arrow-button-active');
  }
  else if ($("#buy-ethereum-div").css('display') !== 'none') {
    $("#buy-ethereum-div").fadeOut(200);
    $("#ethereum-arrow-market").removeClass('arrow-button-active');
  }
}
$("#ethereum-arrow-market").on('click', ethereumBuyMenu);


// Tether buy menu
function tetherBuyMenu() {
  if ($("#buy-tether-div").css('display') == 'none') {
    $(".buy-sell-div").hide();
    $(".arrow-button").removeClass('arrow-button-active');
    $("#buy-tether-div").fadeIn(400);
    $("#tether-arrow-market").addClass('arrow-button-active');
  }
  else if ($("#buy-tether-div").css('display') !== 'none') {
    $("#buy-tether-div").fadeOut(200);
    $("#tether-arrow-market").removeClass('arrow-button-active');
  }
}
$("#tether-arrow-market").on('click', tetherBuyMenu);


// Polkadot buy menu
function polkadotBuyMenu() {
  if ($("#buy-polkadot-div").css('display') == 'none') {
    $(".buy-sell-div").hide();
    $(".arrow-button").removeClass('arrow-button-active');
    $("#buy-polkadot-div").fadeIn(400);
    $("#polkadot-arrow-market").addClass('arrow-button-active');
  }
  else if ($("#buy-polkadot-div").css('display') !== 'none') {
    $("#buy-polkadot-div").fadeOut(200);
    $("#polkadot-arrow-market").removeClass('arrow-button-active');
  }
}
$("#polkadot-arrow-market").on('click', polkadotBuyMenu);


// Elrond buy menu
function elrondBuyMenu() {
  if ($("#buy-elrond-div").css('display') == 'none') {
    $(".buy-sell-div").hide();
    $(".arrow-button").removeClass('arrow-button-active');
    $("#buy-elrond-div").fadeIn(400);
    $("#elrond-arrow-market").addClass('arrow-button-active');
  }
  else if ($("#buy-elrond-div").css('display') !== 'none') {
    $("#buy-elrond-div").fadeOut(200);
    $("#elrond-arrow-market").removeClass('arrow-button-active');
  }
}
$("#elrond-arrow-market").on('click', elrondBuyMenu);


// Bitcoin sell menu
function bitcoinSellMenu() {
  if ($("#sell-bitcoin-div").css('display') == 'none') {
    $(".buy-sell-div").hide();
    $(".arrow-button").removeClass('arrow-button-active');
    $("#sell-bitcoin-div").fadeIn(400);
    $("#bitcoin-arrow-portfolio").addClass('arrow-button-active');
  }
  else if ($("#sell-bitcoin-div").css('display') !== 'none') {
    $("#sell-bitcoin-div").fadeOut(200);
    $("#bitcoin-arrow-portfolio").removeClass('arrow-button-active');
  }
}
$("#bitcoin-arrow-portfolio").on('click', bitcoinSellMenu);


// Ethereum sell menu
function ethereumSellMenu() {
  if ($("#sell-ethereum-div").css('display') == 'none') {
    $(".buy-sell-div").hide();
    $(".arrow-button").removeClass('arrow-button-active');
    $("#sell-ethereum-div").fadeIn(400);
    $("#ethereum-arrow-portfolio").addClass('arrow-button-active');
  }
  else if ($("#sell-ethereum-div").css('display') !== 'none') {
    $("#sell-ethereum-div").fadeOut(200);
    $("#ethereum-arrow-portfolio").removeClass('arrow-button-active');
  }
}
$("#ethereum-arrow-portfolio").on('click', ethereumSellMenu);


// Tether sell menu
function tetherSellMenu() {
  if ($("#sell-tether-div").css('display') == 'none') {
    $(".buy-sell-div").hide();
    $(".arrow-button").removeClass('arrow-button-active');
    $("#sell-tether-div").fadeIn(400);
    $("#tether-arrow-portfolio").addClass('arrow-button-active');
  }
  else if ($("#sell-tether-div").css('display') !== 'none') {
    $("#sell-tether-div").fadeOut(200);
    $("#tether-arrow-portfolio").removeClass('arrow-button-active');
  }
}
$("#tether-arrow-portfolio").on('click', tetherSellMenu);


// Polkadot sell menu
function polkadotSellMenu() {
  if ($("#sell-polkadot-div").css('display') == 'none') {
    $(".buy-sell-div").hide();
    $(".arrow-button").removeClass('arrow-button-active');
    $("#sell-polkadot-div").fadeIn(400);
    $("#polkadot-arrow-portfolio").addClass('arrow-button-active');
  }
  else if ($("#sell-polkadot-div").css('display') !== 'none') {
    $("#sell-polkadot-div").fadeOut(200);
    $("#polkadot-arrow-portfolio").removeClass('arrow-button-active');
  }
}
$("#polkadot-arrow-portfolio").on('click', polkadotSellMenu);


// Elrond sell menu
function elrondSellMenu() {
  if ($("#sell-elrond-div").css('display') == 'none') {
    $(".buy-sell-div").hide();
    $(".arrow-button").removeClass('arrow-button-active');
    $("#sell-elrond-div").fadeIn(400);
    $("#elrond-arrow-portfolio").addClass('arrow-button-active');
  }
  else if ($("#sell-elrond-div").css('display') !== 'none') {
    $("#sell-elrond-div").fadeOut(200);
    $("#elrond-arrow-portfolio").removeClass('arrow-button-active');
  }
}
$("#elrond-arrow-portfolio").on('click', elrondSellMenu);


// ------------------------------------------------------------

