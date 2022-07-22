// *************** DECLARACIÓN DE VARIABLES **********************

var PrimerNombre = 'Ignacio';
console.log(PrimerNombre);
var edadIgnacio = 23;
var edadJuan = 24;
var altura = 1.76;
console.log(edadIgnacio);
console.log("Altura: "+ altura)
console.log("Edad: "+ edadIgnacio)
console.log("Nombre: "+ PrimerNombre)
var Estudia = true;
console.log(Estudia);

/* COMENTARIOS DE MAS DE 1 LINEA
A CONTINUACIÓN SIGO ESCRIBIENDO */

var edadMayor = edadIgnacio < edadJuan;
console.log(edadMayor);

// CLase 20
// operador TypeOf: nos dice de que tipo es la varible.

console.log(typeof edadIgnacio); 
// esto nos va a devolver "number"

//_________________________________
//Clase 21
//Operador de incremento y decremento

var edadMaria = 18;
var edadCarmen = 21;

++edadCarmen;
console.log(edadCarmen);
// mostrará 22
console.log(edadMaria++);
//18
//si lo aplico de nuevo:...
console.log(edadMaria);
//19

//_________________________________
//Clase 22
//Operador de asignacion

var a = 5;
var b = 18;

//si quiero sumar dos variables puedo hacer:

a = a + b;
// o también:
a += b;
a -= b;
a /= b;

var c;
c = b % a; // c es igual al resto de dividir b sobre a


//mas operadores en: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators

//_________________________________
//clase 24
// problemita:

//Calcular el IMC
var pLuis = 72;
var alturaLuis = 1.72;
var IMC_Luis = pLuis / (Math.pow(alturaLuis,2));


var pCarlos = 89;
var aCarlos = 1.75;
var IMC_Carlos = pCarlos /(Math.pow(aCarlos,2));

console.log("IMC Luis: " +IMC_Luis) 
console.log("IMC Carlos: " +IMC_Carlos) 

//_________________________________
//clase 29
// HTML 5 es un lenguaje etiquetas que permite maquetar una página web

//_________________________________
//clase 33
// If y Else

var nombreChico = 'Pablo';
var estadoCivil = 'Soltero';

if (estadoCivil === 'Casado'){
    console.log(nombreChico + ' está casado');
}
else{
    console.log(nombreChico + ' está soltero');
}

//_________________________________
//clase 34

var nombre34 = 'Pablo';
var edad34 = 15;

// < 12 es niño
// 12 > edad > 18 es adolescente
// 18 > edad > 60 adulto
// 

if(edad34 < 12){
    console.log('es un niño')
}
else if(12 < edad34 < 18){
    console.log('es un adolescente')
}


