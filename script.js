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


// Functions for buy/sell menu


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


// Functions for total preview

// Bitcoin buy toal
function bitcoinBuyTotal() {
  const totalInUsd = ( $("#buy-btc-input").val() * bitcoinPrice);
  $("#preview-buy-btc").text( totalInUsd );
}
$("#buy-btc-input").on('input', bitcoinBuyTotal);

// Ethereum buy total
function ethereumBuyTotal() {
  const totalInUsd = ( $("#buy-eth-input").val() * ethereumPrice);
  $("#preview-buy-eth").text( totalInUsd );
}
$("#buy-eth-input").on('input', ethereumBuyTotal);

// Tether buy total
function tetherBuyTotal() {
  const totalInUsd = ( $("#buy-usdt-input").val() * tetherPrice);
  $("#preview-buy-usdt").text( totalInUsd );
}
$("#buy-usdt-input").on('input', tetherBuyTotal);

// Polkadot buy total
function polkadotBuyTotal() {
  const totalInUsd = ( $("#buy-dot-input").val() * polkadotPrice);
  $("#preview-buy-dot").text( totalInUsd );
}
$("#buy-dot-input").on('input', polkadotBuyTotal);

// Elrond buy total
function elrondBuyTotal() {
  const totalInUsd = ( $("#buy-egld-input").val() * elrondPrice);
  $("#preview-buy-egld").text( totalInUsd );
}
$("#buy-egld-input").on('input', elrondBuyTotal);

// Bitcoin sell toal
function bitcoinSellTotal() {
  const totalInUsd = ( $("#sell-btc-input").val() * bitcoinPrice);
  $("#preview-sell-btc").text( totalInUsd );
}
$("#sell-btc-input").on('input', bitcoinSellTotal);

// Ethereum sell toal
function ethereumSellTotal() {
  const totalInUsd = ( $("#sell-eth-input").val() * ethereumPrice);
  $("#preview-sell-eth").text( totalInUsd );
}
$("#sell-eth-input").on('input', ethereumSellTotal);

// Tether sell toal
function tetherSellTotal() {
  const totalInUsd = ( $("#sell-usdt-input").val() * tetherPrice);
  $("#preview-sell-usdt").text( totalInUsd );
}
$("#sell-usdt-input").on('input', tetherSellTotal);

// Polkadot sell toal
function polkadotSellTotal() {
  const totalInUsd = ( $("#sell-dot-input").val() * polkadotPrice);
  $("#preview-sell-dot").text( totalInUsd );
}
$("#sell-dot-input").on('input', polkadotSellTotal);

// Elrond sell toal
function elrondSellTotal() {
  const totalInUsd = ( $("#sell-egld-input").val() * elrondPrice);
  $("#preview-sell-egld").text( totalInUsd );
}
$("#sell-egld-input").on('input', elrondSellTotal);


// ------------------------------------------------------------


