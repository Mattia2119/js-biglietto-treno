let Km = parseInt(prompt ("Quanti Km devi percorrere?"));

let age = parseInt(prompt ("Quanti anni hai?"));

let Km_price = Km * 0.21;

if (age < 18) {
 let sale = (Km_price*20/100);
 document.getElementById("calculator").innerHTML = ("il costo del biglietto è di " + (Km_price - sale) + " euro");

} else if (age > 65) {
 let sale = (Km_price *40/100);
 document.getElementById("calculator").innerHTML = ("il costo del biglietto è di " + (Km_price - sale) + " euro");

} else if (age > 18 && age < 65 ) {
 document.getElementById("calculator").innerHTML = ("il costo del biglietto è di " + (Km_price) + " euro");
}






