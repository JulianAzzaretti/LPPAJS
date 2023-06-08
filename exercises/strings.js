//2A
var diezcaracteres
var diezcaracteres = "hola mundo";

console.log(diezcaracteres.toUpperCase());

//2B
var pepeargento = "hermosa mañana verdad";
var moniargento = pepeargento.substring(0, 7)

console.log(moniargento)

//2C
var variable1 = "buen dia gente";
var variable2 = variable1.substring (10)

console.log(variable2)

//2D

var variable3 = "Gonzalo Montiel";
var variable4 = variable3.substring(0, 1)
var variable5 = variable3.substring(1, 15)

variable6 = variable4.toUpperCase() + variable5.toLowerCase()

console.log(variable6)

//2E


var consignae = "muy buenas";

var posicionE = consignae.indexOf(" ")


console.log(posicionE)

//2F

var palabralarga = "Villa Ramallo";
var espacio = palabralarga.indexOf (" ");
var palabralarga1 = palabralarga.substring(0, espacio);
var palabralarga2 = palabralarga.substring(espacio + 1);

palabralarga3 = palabralarga1.substring(0, 1).toUpperCase() + palabralarga1.substring(1, 5).toLowerCase() + " " + palabralarga2.substring(0, 1).toUpperCase() + palabralarga2.substring(1, 7).toLowerCase()

console.log(palabralarga3)
