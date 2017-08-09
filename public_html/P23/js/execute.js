/* global mes, dia, año */

var  miFecha = new Date ( prompt("año,mes,dia"));

var  miFecha1 = new Date ( prompt("año,mes,dia"));


 var daysdif = miFecha1.getTime()-miFecha.getTime(); 
 var days= Math.round(daysdif /(100*60*60*24));
 console.log ("diffence between the two dates " + days/ 365 + " Years " + days / 30 + " Months" + days + " Days");