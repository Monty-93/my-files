/*    Project:  Hands-On Project 2-4
      Author:
      Date:
      Purpose:
*/ 

function calcTotal() {
  var itemTotal = 0;
  var item1 = document.getElementById("item1");
  var item2 = document.getElementById("item2");
  var item3 = document.getElementById("item3");
  var item4 = document.getElementById("item4");
  var item5 = document.getElementById("item5");
   var item6 = document.getElementById("item6");
  var item7 = document.getElementById("item7");
  var item8 = document.getElementById("item8");

  (item1.checked) ? (itemTotal += 500) : (itemTotal += 0);
  (item2.checked) ? (itemTotal += 699) : (itemTotal += 0);
  (item3.checked) ? (itemTotal += 299) : (itemTotal += 0);
  (item4.checked) ? (itemTotal += 366) : (itemTotal += 0);
  (item5.checked) ? (itemTotal += 999) : (itemTotal += 0);
  (item6.checked) ? (itemTotal += 179.99) : (itemTotal += 0);
  (item7.checked) ? (itemTotal += 249.99) : (itemTotal += 0);
  (item8.checked) ? (itemTotal += 800) : (itemTotal += 0);
  var SalesTaxRtae = 0.07;
  var orderTotal = itemTotal + (itemTotal * SalesTaxRtae);
  alert("Your orfer total is $" + orderTotal.toFixed(2));
  
}
document.getElementById("submit").addEventListener("click", calcTotal, false);

