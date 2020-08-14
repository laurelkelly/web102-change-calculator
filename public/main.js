// Write your JavaScript here

var dollars, quarters, dimes, nickels, pennies;

function calculateChange() {
  var amountDue = document.getElementById('amount-due').value;
  var amountReceived = document.getElementById('amount-received').value;
  var change = (amountReceived - amountDue).toFixed(2);
  console.log(change)

  var dollars = Math.floor(change);
  document.getElementById("dollars-output").innerHTML = dollars;
  var remainder = ((change - dollars) * 100).toFixed(2);
  console.log(remainder)

  var quarters = Math.floor(remainder / 25);
  document.getElementById("quarters-output").innerHTML = quarters;
  remainder = remainder - (quarters * 25);

  var dimes = Math.floor(remainder / 10);
  document.getElementById("dimes-output").innerHTML = dimes;
  remainder = remainder - (dimes * 10);

  var nickels = Math.floor(remainder / 5);
  document.getElementById("nickels-output").innerHTML = nickels;
  remainder = remainder - (nickels * 5);

  var pennies = remainder;
  document.getElementById("pennies-output").innerHTML = pennies;

};

document.getElementById("calculate-change").addEventListener("click", calculateChange);