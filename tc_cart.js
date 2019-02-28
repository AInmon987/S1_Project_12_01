"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Austin Inmon
   Date:   2.27.19
   
   Filename: tc_cart.js
	
*/
// The inital value of the total of the order in dollars.
var orderTotal = 0;
// The var is setting the html content to show as a table.
var cartHTML = "<table> <tr> <th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th> </tr>";
// the for loop has the inital value of zero, there are 4 items and its adding by one. 
for (var i = 0; i <= 3; i++) {
    // setting the itme to the current item from the item array.
    cartHTML += "<tr> <td><img src='tc_" + item[i] + ".png'" + "alt=" + item[i] + "/></td>";
    // making the item description show up for each item, the item will be the current items price from the price array, and the item quanity will be the current value from the quanity array.
    cartHTML += "<td>" + itemDescription[i] + "</td>" + "<td>" + "$" + itemPrice[i] + "</td>" + "<td>" + itemQty[i] + "</td>";
    //the value of the item cost is item price to multiply the item quanity. 
    var itemCost = itemPrice[i] * itemQty[i];
    //
    cartHTML += "<td>" + '$' + itemCost + "</td></tr>";
    //Adding the value of orderTotal to the itemCost and to keep a running total of thetotal cost of the customer order.
    orderTotal += itemCost;
}
//the total is the value of the orderTotal value and the dollar sign will show up in front of the total.
cartHTML += "<tr> <td colspan='4'>Subtotal</td>" + "<td>" + '$' + orderTotal + "</td>" + "</tr> </table>";
// Making all the strings show up in the html file making the javascript show up on the page.
document.getElementById("cart").innerHTML = cartHTML;