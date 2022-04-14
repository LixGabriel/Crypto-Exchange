// Ready State
if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready);
}
else {
  ready();
}

function ready() {

  // Generating Prices
  const bitcoinPrice = Math.floor( (Math.random() * 10000) );
  const ethereumPrice = Math.floor( (Math.random() * 10000) );
  const polkadotPrice = Math.floor( (Math.random() * 10000) );
  const elrondPrice = Math.floor( (Math.random() * 10000) );
  const tetherPrice = 1;

  // Initial Owned Amounts
  let totalBalance = Math.floor( (Math.random() * 1000000));
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
      $(".input").val("");
      $("#preview-buy-btc").text("0");
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
      $(".input").val("");
      $("#preview-buy-eth").text("0");
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
      $(".input").val("");
      $("#preview-buy-usdt").text("0");
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
      $(".input").val("");
      $("#preview-buy-dot").text("0");
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
      $(".input").val("");
      $("#preview-buy-egld").text("0");
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
      $(".input").val("");
      $("#preview-sell-btc").text("0");
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
      $(".input").val("");
      $("#preview-sell-eth").text("0");
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
      $(".input").val("");
      $("#preview-sell-usdt").text("0");
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
      $(".input").val("");
      $("#preview-sell-dot").text("0");
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
      $(".input").val("");
      $("#preview-sell-egld").text("0");
    }
    else if ($("#sell-elrond-div").css('display') !== 'none') {
      $("#sell-elrond-div").fadeOut(200);
      $("#elrond-arrow-portfolio").removeClass('arrow-button-active');
    }
  }
  $("#elrond-arrow-portfolio").on('click', elrondSellMenu);



  // ------------------------------------------------------------



  // Functions for total preview

  // Bitcoin buy total
  function bitcoinBuyTotal() {
    if ( isNaN($("#buy-btc-input").val()) || ($("#buy-btc-input").val()) <= 0 ) {
      $("#preview-buy-btc").text("0");
    }
    else if ( !isNaN($("#buy-btc-input").val()) ) {
      let totalInUsd = ( $("#buy-btc-input").val() * bitcoinPrice);
      $("#preview-buy-btc").text( totalInUsd );
    }
  }
  $("#buy-btc-input").on('input', bitcoinBuyTotal);

  // Ethereum buy total
  function ethereumBuyTotal() {
    if ( isNaN($("#buy-eth-input").val()) || ($("#buy-eth-input").val()) <= 0 ) {
      $("#preview-buy-eth").text("0");
    }
    else if ( !isNaN($("#buy-eth-input").val()) ) {
      let totalInUsd = ( $("#buy-eth-input").val() * ethereumPrice);
      $("#preview-buy-eth").text( totalInUsd );
    }
  }
  $("#buy-eth-input").on('input', ethereumBuyTotal);

  // Tether buy total
  function tetherBuyTotal() {
    if ( isNaN($("#buy-usdt-input").val()) || ($("#buy-usdt-input").val()) <= 0 ) {
      $("#preview-buy-usdt").text("0");
    }
    else if ( !isNaN($("#buy-usdt-input").val()) ) {
      let totalInUsd = ( $("#buy-usdt-input").val() * tetherPrice);
      $("#preview-buy-usdt").text( totalInUsd );
    }
  }
  $("#buy-usdt-input").on('input', tetherBuyTotal);

  // Polkadot buy total
  function polkadotBuyTotal() {
    if ( isNaN($("#buy-dot-input").val()) || ($("#buy-dot-input").val()) <= 0 ) {
      $("#preview-buy-dot").text("0");
    }
    else if ( !isNaN($("#buy-dot-input").val()) ) {
      let totalInUsd = ( $("#buy-dot-input").val() * polkadotPrice);
      $("#preview-buy-dot").text( totalInUsd );
    }
  }
  $("#buy-dot-input").on('input', polkadotBuyTotal);

  // Elrond buy total
  function elrondBuyTotal() {
    if ( isNaN($("#buy-egld-input").val()) || ($("#buy-egld-input").val()) <= 0 ) {
      $("#preview-buy-egld").text("0");
    }
    else if ( !isNaN($("#buy-egld-input").val()) ) {
      let totalInUsd = ( $("#buy-egld-input").val() * elrondPrice);
      $("#preview-buy-egld").text( totalInUsd );
    }
  }
  $("#buy-egld-input").on('input', elrondBuyTotal);


  // Bitcoin sell total
  function bitcoinSellTotal() {
    if ( isNaN($("#sell-btc-input").val()) || ($("#sell-btc-input").val()) <= 0 ) {
      $("#preview-sell-btc").text("0");
    }
    else if ( !isNaN($("#sell-btc-input").val()) ) {
      let totalInUsd = ( $("#sell-btc-input").val() * bitcoinPrice);
      $("#preview-sell-btc").text( totalInUsd );
    }
  }
  $("#sell-btc-input").on('input', bitcoinSellTotal);

  // Ethereum sell total
  function ethereumSellTotal() {
    if ( isNaN($("#sell-eth-input").val()) || ($("#sell-eth-input").val()) <= 0 ) {
      $("#preview-sell-eth").text("0");
    }
    else if ( !isNaN($("#sell-eth-input").val()) ) {
      let totalInUsd = ( $("#sell-eth-input").val() * ethereumPrice);
      $("#preview-sell-eth").text( totalInUsd );
    }
  }
  $("#sell-eth-input").on('input', ethereumSellTotal);

  // Tether sell total
  function tetherSellTotal() {
    if ( isNaN($("#sell-usdt-input").val()) || ($("#sell-usdt-input").val()) <= 0 ) {
      $("#preview-sell-usdt").text("0");
    }
    else if ( !isNaN($("#sell-usdt-input").val()) ) {
      let totalInUsd = ( $("#sell-usdt-input").val() * tetherPrice);
      $("#preview-sell-usdt").text( totalInUsd );
    }
  }
  $("#sell-usdt-input").on('input', tetherSellTotal);

  // Polkadot sell total
  function polkadotSellTotal() {
    if ( isNaN($("#sell-dot-input").val()) || ($("#sell-dot-input").val()) <= 0 ) {
      $("#preview-sell-dot").text("0");
    }
    else if ( !isNaN($("#sell-dot-input").val()) ) {
      let totalInUsd = ( $("#sell-dot-input").val() * polkadotPrice);
      $("#preview-sell-dot").text( totalInUsd );
    }
  }
  $("#sell-dot-input").on('input', polkadotSellTotal);

  // Elrond sell total
  function elrondSellTotal() {
    if ( isNaN($("#sell-egld-input").val()) || ($("#sell-egld-input").val()) <= 0 ) {
      $("#preview-sell-egld").text("0");
    }
    else if ( !isNaN($("#sell-egld-input").val()) ) {
      let totalInUsd = ( $("#sell-egld-input").val() * elrondPrice);
      $("#preview-sell-egld").text( totalInUsd );
    }
  }
  $("#sell-egld-input").on('input', elrondSellTotal);



  // ------------------------------------------------------------



  // Functions for buy/sell buttons

  // Buy Bitcoin function
  function buyBitcoin() {
    if ( isNaN($("#buy-btc-input").val()) || ($("#buy-btc-input").val()) <= 0 ) {
      alert("Invalid quantity!");
    }
    else if ( ( $("#buy-btc-input").val() * bitcoinPrice ) > totalBalance ) {
      alert("Insufficient funds!");
    }
    else {
      totalBalance = parseInt(totalBalance) - parseInt( $("#buy-btc-input").val() * bitcoinPrice);
      ownedBitcoin = parseInt(ownedBitcoin) + parseInt( $("#buy-btc-input").val());
      
      alert("Successful bought " + $("#buy-btc-input").val() + " BTC for $" + ( $("#buy-btc-input").val() * bitcoinPrice) + " at the price of $" + bitcoinPrice + "/BTC.");
      
      $("#total-balance").text(totalBalance);
      $("#bitcoin-owned").text(ownedBitcoin);
      $("#buy-btc-input").val("");
      $("#preview-buy-btc").text("0");
      $("#buy-bitcoin-div").fadeOut(100);
      $("#bitcoin-arrow-market").removeClass('arrow-button-active');
    }
  }
  $("#buy-btc-button").on('click', buyBitcoin);

  // Buy Ethereum function
  function buyEthereum() {
    if ( isNaN($("#buy-eth-input").val()) || ($("#buy-eth-input").val()) <= 0 ) {
      alert("Invalid quantity!");
    }
    else if ( ( $("#buy-eth-input").val() * ethereumPrice ) > totalBalance ) {
      alert("Insufficient funds!");
    }
    else {
      totalBalance = parseInt(totalBalance) - parseInt( $("#buy-eth-input").val() * ethereumPrice);
      ownedEthereum = parseInt(ownedEthereum) + parseInt( $("#buy-eth-input").val());
      
      alert("Successful bought " + $("#buy-eth-input").val() + " ETH for $" + ( $("#buy-eth-input").val() * ethereumPrice) + " at the price of $" + ethereumPrice + "/ETH.");
      
      $("#total-balance").text(totalBalance);
      $("#ethereum-owned").text(ownedEthereum);
      $("#buy-eth-input").val("");
      $("#preview-buy-eth").text("0");
      $("#buy-ethereum-div").fadeOut(100);
      $("#ethereum-arrow-market").removeClass('arrow-button-active');
    }
  }
  $("#buy-eth-button").on('click', buyEthereum);

  // Buy Tether function
  function buyTether() {
    if ( isNaN($("#buy-usdt-input").val()) || ($("#buy-usdt-input").val()) <= 0 ) {
      alert("Invalid quantity!");
    }
    else if ( ( $("#buy-usdt-input").val() * tetherPrice ) > totalBalance ) {
      alert("Insufficient funds!");
    }
    else {
      totalBalance = parseInt(totalBalance) - parseInt( $("#buy-usdt-input").val() * tetherPrice);
      ownedTether = parseInt(ownedTether) + parseInt( $("#buy-usdt-input").val());
      
      alert("Successful bought " + $("#buy-usdt-input").val() + " USDT for $" + ( $("#buy-usdt-input").val() * tetherPrice) + " at the price of $" + tetherPrice + "/USDT.");
      
      $("#total-balance").text(totalBalance);
      $("#tether-owned").text(ownedTether);
      $("#buy-usdt-input").val("");
      $("#preview-buy-eth").text("0");
      $("#buy-tether-div").fadeOut(100);
      $("#tether-arrow-market").removeClass('arrow-button-active');
    }
  }
  $("#buy-usdt-button").on('click', buyTether);

  // Buy Polkadot function
  function buyPolkadot() {
    if ( isNaN($("#buy-dot-input").val()) || ($("#buy-dot-input").val()) <= 0 ) {
      alert("Invalid quantity!");
    }
    else if ( ( $("#buy-dot-input").val() * polkadotPrice ) > totalBalance ) {
      alert("Insufficient funds!");
    }
    else {
      totalBalance = parseInt(totalBalance) - parseInt( $("#buy-dot-input").val() * polkadotPrice);
      ownedPolkadot = parseInt(ownedPolkadot) + parseInt( $("#buy-dot-input").val());
      
      alert("Successful bought " + $("#buy-dot-input").val() + " DOT for $" + ( $("#buy-dot-input").val() * polkadotPrice) + " at the price of $" + polkadotPrice + "/DOT.");
      
      $("#total-balance").text(totalBalance);
      $("#polkadot-owned").text(ownedPolkadot);
      $("#buy-dot-input").val("");
      $("#preview-buy-dot").text("0");
      $("#buy-polkadot-div").fadeOut(100);
      $("#polkadot-arrow-market").removeClass('arrow-button-active');
    }
  }
  $("#buy-dot-button").on('click', buyPolkadot);

  // Buy Elrond function
  function buyElrond() {
    if ( isNaN($("#buy-egld-input").val()) || ($("#buy-egld-input").val()) <= 0 ) {
      alert("Invalid quantity!");
    }
    else if ( ( $("#buy-egld-input").val() * elrondPrice ) > totalBalance ) {
      alert("Insufficient funds!");
    }
    else {
      totalBalance = parseInt(totalBalance) - parseInt( $("#buy-egld-input").val() * elrondPrice);
      ownedElrond = parseInt(ownedElrond) + parseInt( $("#buy-egld-input").val());
      
      alert("Successful bought " + $("#buy-egld-input").val() + " EGLD for $" + ( $("#buy-egld-input").val() * elrondPrice) + " at the price of $" + elrondPrice + "/EGLD.");
      
      $("#total-balance").text(totalBalance);
      $("#elrond-owned").text(ownedElrond);
      $("#buy-egld-input").val("");
      $("#preview-buy-egld").text("0");
      $("#buy-elrond-div").fadeOut(100);
      $("#elrond-arrow-market").removeClass('arrow-button-active');
    }
  }
  $("#buy-egld-button").on('click', buyElrond);


  // Sell Bitcoin function
  function sellBitcoin() {
    if ( isNaN($("#sell-btc-input").val()) || ($("#sell-btc-input").val()) <= 0 ) {
      alert("Invalid quantity!");
    }
    else if ( ( $("#sell-btc-input").val() * bitcoinPrice ) > totalBalance ) {
      alert("Insufficient funds!");
    }
    else {
      totalBalance = parseInt(totalBalance) + parseInt( $("#sell-btc-input").val() * bitcoinPrice);
      ownedBitcoin = parseInt(ownedBitcoin) - parseInt( $("#sell-btc-input").val());
      
      alert("Successful sold " + $("#sell-btc-input").val() + " BTC for $" + ( $("#sell-btc-input").val() * bitcoinPrice) + " at the price of $" + bitcoinPrice + "/BTC.");
      
      $("#total-balance").text(totalBalance);
      $("#bitcoin-owned").text(ownedBitcoin);
      $("#sell-btc-input").val("");
      $("#preview-sell-btc").text("0");
      $("#sell-bitcoin-div").fadeOut(100);
      $("#bitcoin-arrow-market").removeClass('arrow-button-active');
    }
  }
  $("#sell-btc-button").on('click', sellBitcoin);

  // Sell Ethereum function
  function sellEthereum() {
    if ( isNaN($("#sell-eth-input").val()) || ($("#sell-eth-input").val()) <= 0 ) {
      alert("Invalid quantity!");
    }
    else if ( ( $("#sell-eth-input").val() * ethereumPrice ) > totalBalance ) {
      alert("Insufficient funds!");
    }
    else {
      totalBalance = parseInt(totalBalance) + parseInt( $("#sell-eth-input").val() * ethereumPrice);
      ownedEthereum = parseInt(ownedEthereum) - parseInt( $("#sell-eth-input").val());
      
      alert("Successful sold " + $("#sell-eth-input").val() + " ETH for $" + ( $("#sell-eth-input").val() * ethereumPrice) + " at the price of $" + ethereumPrice + "/ETH.");
      
      $("#total-balance").text(totalBalance);
      $("#ethereum-owned").text(ownedEthereum);
      $("#sell-eth-input").val("");
      $("#preview-sell-eth").text("0");
      $("#sell-ethereum-div").fadeOut(100);
      $("#ethereum-arrow-market").removeClass('arrow-button-active');
    }
  }
  $("#sell-eth-button").on('click', sellEthereum);

  // Sell Tether function
  function sellTether() {
    if ( isNaN($("#sell-usdt-input").val()) || ($("#sell-usdt-input").val()) <= 0 ) {
      alert("Invalid quantity!");
    }
    else if ( ( $("#sell-usdt-input").val() * bitcoinPrice ) > totalBalance ) {
      alert("Insufficient funds!");
    }
    else {
      totalBalance = parseInt(totalBalance) + parseInt( $("#sell-usdt-input").val() * bitcoinPrice);
      ownedTether = parseInt(ownedTether) - parseInt( $("#sell-usdt-input").val());
      
      alert("Successful sold " + $("#sell-usdt-input").val() + " USDT for $" + ( $("#sell-usdt-input").val() * bitcoinPrice) + " at the price of $" + bitcoinPrice + "/USDT.");
      
      $("#total-balance").text(totalBalance);
      $("#bitcoin-owned").text(ownedTether);
      $("#sell-usdt-input").val("");
      $("#preview-sell-usdt").text("0");
      $("#sell-bitcoin-div").fadeOut(100);
      $("#bitcoin-arrow-market").removeClass('arrow-button-active');
    }
  }
  $("#sell-usdt-button").on('click', sellTether);

  // Sell Polkadot function
  function sellPolkadot() {
    if ( isNaN($("#sell-dot-input").val()) || ($("#sell-dot-input").val()) <= 0 ) {
      alert("Invalid quantity!");
    }
    else if ( ( $("#sell-dot-input").val() * polkadotPrice ) > totalBalance ) {
      alert("Insufficient funds!");
    }
    else {
      totalBalance = parseInt(totalBalance) + parseInt( $("#sell-dot-input").val() * polkadotPrice);
      ownedPolkadot = parseInt(ownedPolkadot) - parseInt( $("#sell-dot-input").val());
      
      alert("Successful sold " + $("#sell-dot-input").val() + " DOT for $" + ( $("#sell-dot-input").val() * polkadotPrice) + " at the price of $" + polkadotPrice + "/DOT.");
      
      $("#total-balance").text(totalBalance);
      $("#polkadot-owned").text(ownedPolkadot);
      $("#sell-dot-input").val("");
      $("#preview-sell-dot").text("0");
      $("#sell-polkadot-div").fadeOut(100);
      $("#polkadot-arrow-market").removeClass('arrow-button-active');
    }
  }
  $("#sell-dot-button").on('click', sellPolkadot);

  // Sell Elrond function
  function sellElrond() {
    if ( isNaN($("#sell-egld-input").val()) || ($("#sell-egld-input").val()) <= 0 ) {
      alert("Invalid quantity!");
    }
    else if ( ( $("#sell-egld-input").val() * elrondPrice ) > totalBalance ) {
      alert("Insufficient funds!");
    }
    else {
      totalBalance = parseInt(totalBalance) + parseInt( $("#sell-egld-input").val() * elrondPrice);
      ownedElrond = parseInt(ownedElrond) - parseInt( $("#sell-egld-input").val());
      
      alert("Successful sold " + $("#sell-egld-input").val() + " EGLD for $" + ( $("#sell-egld-input").val() * elrondPrice) + " at the price of $" + elrondPrice + "/EGLD.");
      
      $("#total-balance").text(totalBalance);
      $("#elrond-owned").text(ownedElrond);
      $("#sell-egld-input").val("");
      $("#preview-sell-egld").text("0");
      $("#sell-elrond-div").fadeOut(100);
      $("#elrond-arrow-market").removeClass('arrow-button-active');
    }
  }
  $("#sell-egld-button").on('click', sellElrond);


  // Enter Button

  function enterButtonFunctions() {
    if ( $("#buy-btc-input").val().length >= 1 ) {
      buyBitcoin();
    }
    else if ( $("#buy-eth-input").val().length >= 1 ) {
      buyEthereum();
    }
    else if ( $("#buy-usdt-input").val().length >= 1 ) {
      buyTether();
    }
    else if ( $("#buy-dot-input").val().length >= 1 ) {
      buyPolkadot();
    }
    else if ( $("#buy-egld-input").val().length >= 1 ) {
      buyElrond();
    }
    else if ( $("#sell-btc-input").val().length >= 1 ) {
      sellBitcoin();
    }
    else if ( $("#sell-eth-input").val().length >= 1 ) {
      sellEthereum();
    }
    else if ( $("#sell-usdt-input").val().length >= 1 ) {
      sellTether();
    }
    else if ( $("#sell-dot-input").val().length >= 1 ) {
      sellPolkadot();
    }
    else if ( $("#sell-egld-input").val().length >= 1 ) {
      sellElrond();
    }
  }

  $(".input").on('keyup', function (event) {
    if (event.keyCode === 13) {
      enterButtonFunctions();
    }
  });

}
