var priceKm = 0.21;
var discount18 = 20;
var discount65 = 40;           
var numKm = parseInt (prompt('inserisci i km da percorrere'));
var userAge = parseInt (prompt("inserisci l'età del passeggero"));

var fullprice = priceKm * numKm;

if (userAge < 18) {
    result -= result * discount18 / 100;
} else if (userAge >= 65) {
    result -= result * discount65 / 100;
}

result = result.toFixed(2);

document.getElementById('prezzo').innerHTML = result + '€';