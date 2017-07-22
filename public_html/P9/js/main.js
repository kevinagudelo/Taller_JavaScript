// Comentario de una línea
/*
 * Comentario de
 * varias líneas
 *
 */

// definición de variables
var cadena = 'Julian'; // toString()
var enteroPositivo = Number('32'); // Number('32')
var enteroNegativo = -32;
var decimal = 1.82;
var genero = true; // true masculino, false femenino

var nombre = 'Julian', apellido = 'lasso', edad = 32;
var nombre, apellido, edad, correo;

// arreglos
var personas = []; // arreglo vacio
personas = ['Julian', 'Andres', 'Sebastian', 'Sofia'];
personas[0]; // acceso a una posición
personas[1];
personas[2];
personas[3];
personas[4] = 'Daniela'; // guardar información
personas[5] = 32;
personas[6] = false;
personas[7] = 1.72;
var siguiente = personas.length; // siguiente posición

// definir un array con prototipos (clases)
var items = new Array(32, 'Andres', 1.82);
items.push('julian');

// registros de LPP - javascript es prototipo
var registro = {
  nombre: 'Julian',
  edad: 32,
  estatura: 1.82,
  genero: true,
  fechaNacimiento: '06-11-1984'
};

registro.nombre; // acceso a la información
registro.estatura = 1.80; // modificar
registro.ciudadOrigen = 'Cali'; // agregar nuevo item
delete registro.ciudadOrigen; // eliminar un item

/**
 * Operadores aritméticos
 * + suma
 * - resta
 * * multiplicación
 * / división
 * % modulo
 * ++ suma uno i = 0; i = i + 1; i++
 * -- resta uno i = 5; i = i - 1; i--
 */

/**
 * Operadores lógicos
 * && operador lógico y
 * || operador lógico o
 * = asignación
 * == comparación
 * === identico
 * != diferente
 * !== totalmente diferente; identicamente difernte
 * !(1 == 1) negación
 * > mayor que
 * < menor que
 * >= mayor igual
 * <= menor igual
 */

// estructura de control SI

if (1 === 1) {
  var a = 1 + 1;
}

if (1 === 1)
  var a = 1 + 1;

if (1 === 1) {
  var a = 1 + 1;
} else {
  var a = 2 + 2;
}

if (1 === 1)
  var a = 1 + 1;
else
  var a = 2 + 2;

// condición ternaria
var a = (1 === 1) ? 1 + 1 : 2 + 2;

// casos o switch
var num = 5;
var respuesta = 0;
switch (num) {
  case 1:
    respuesta = 1 + 1;
    break;
  case 2:
    respuesta = 2 + 2;
    break;
  case 'Julian':
    respuesta = 'Julian Lasso';
    break;
  default:
    respuesta = 5 + 5;
}

// haga mientras
var flag = true, i = 0;
do {
  i++;
  i--;
  i += 2; // i = i + 2
  i -= 2; // i = i - 2
  i *= 5; // i = i * 5
  i /= 2; // i = i / 2
  flag = (i <= 10) ? true : false;
//  if (i <= 10) {
//    flag = true;
//  } else {
//    flag = false;
//  }
} while (flag === true);

// mientras
var flag = true, i = 0;
while (flag === true) {
  i++;
  flag = (i <= 10) ? true : false;
}

// para o for
var x = 0, i;
for (i = 0; i < 10; i++) {
  x++;
}

// foreach
var arreglo = ['julian', 'andres', 'lasso', 'figueroa'];
for (var cadena in arreglo) {
  //document.write(cadena);
  console.log(cadena);
}

// funciones

function sumar (num1, num2) {
  var respuesta = num1 + num2;
  return respuesta;
}

var r = sumar(5,2);
console.log('La respuesta es: ' + r);

var nombre =  prompt('Digite su nombre');