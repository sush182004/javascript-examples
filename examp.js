var greetings='Howdy ';
var name='Molly';
var message=', please check your order:';
var welcome=greetings+ name  + message;

var sign='Montague House';
var tiles=sign.length;
var subTotal=tiles*5;
var shipping=7;
var grandTotal=subTotal+shipping;

var el=document.getElementById('greetings');
el.textContent=welcome;

var el=document.getElementById('userSign');
el.textContent=sign;


var eltiles=document.getElementById('tiles');
eltiles.textContent=tiles;

var elSubtotal=document.getElementById('subTotal');
elSubtotal.textContent='$'+subTotal;

var elSubtotal=document.getElementById('shipping');
elSubtotal.textContent='$'+shipping;

var elgrandtotal=document.getElementById('grandTotal');
elgrandtotal.textContent='$'+grandTotal;

