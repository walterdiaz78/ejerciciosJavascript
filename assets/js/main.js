// //PROGRAMACION ORIENTADA A OBJETOS

// class Animal {
//     constructor(especie, edad, color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${color}`
//     }

//     verInfo(){
//         document.write(this.info + "<br>")
//     }

// }

// class Perro extends Animal {
//     constructor(especie, edad, color, raza){
//         super(especie, edad, color);
//         this.raza = raza;
//     }
//     ladrar(){
//         alert("Guau Guau")
//     }
// }

// let perro = new Perro("perro", 5, "rojo", "doverman");
// let gato = new Animal("gato", 2, "negro");
// let pajaro = new Animal("pajaro", 3, "verde");

// perro.verInfo();
// gato.verInfo();
// pajaro.verInfo();

// precio 200E
// iva 21%
// total 242 // 200+ 21*200/100

// //ejercicio 1

// // Haz un script que calcule el precio total (producto + iva)
// // que vas a pagar por tu compra.

// let precioIn = parseFloat(prompt("Ingresa el precio del producto"));
// const iva = 21;

// if(!isNaN(precioIn) && precioIn > 0){

//     let precioFinal = (precio) => {
//       let total = precio + (precio * iva / 100) ;
//       return total.toFixed(2);
//     };

//     let opFin = precioFinal(precioIn);
//     document.write(`El precio final del producto es $${opFin}`);

// }else{
//     alert("Asegurate de ingresar un valor numerico positivo")
// }

// // Ejercicio 2

// // Tienes el lado de un cuadrado, debes escribir un programa
// // que te calcule el área y el perímetro del cuadrado.

// let lado = parseFloat(prompt("Ingresa el valor en centimetros del lado"));

// if (!isNaN(lado) && lado > 0) {
//   let area = lado * lado;
//   let perimetro = lado * 4;

//   area = Number.isInteger(area) ? area : area.toFixed(2);
//   perimetro = Number.isInteger(perimetro) ? perimetro : perimetro.toFixed(2);

//   let frase = ` <h1>El area de tu cuadrado es de
//     <b style='color:blue'>${area}cm2</b> y el perimetro es de
//     <b style='color:blue'>${perimetro}cm</b></h1>`;
//   document.write(frase);
// } else {
//   alert("Asegurate de ingresar un valor numerico positivo");
// }

// //Ejercicio 3
// // Debes escribir un programa que lea el
// // nombre del usuario y salude con un
// // "Hola" seguido del nombre del usuario.

// let nombre = prompt("Cual es tu nombre?")

// if(typeof nombre === "string" &&
//     nombre.trim !== ""  && /^[a-zA-z]+$/.test(nombre)){

//     let saludar =  `<h1>Hola ${nombre}</h1>`
//     document.write(saludar);

// }else{
//     alert("Asegurate de ingresar tu nombre")
// }

// // Ejercicio 4

// // pedir al usuario que teclee tres números enteros
// // y el script mostrará como resultado el valor medio de los tres.

// let num1 = parseFloat(prompt("Ingresa un numero"));
// let num2 = parseFloat(prompt("Ingresa otro numero"));
// let num3 = parseFloat(prompt("Ingresa otro numero"));

// if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
//   let promedio = (num1 + num2 + num3) / 3;
//   document.write(`<h1>El promedio de los 3 numeros
//         ingresados es ${promedio.toFixed(2)}</h1>`);
// } else {
//   alert("Asegurate de ingresar un valor numerico");
// }

//Ejercicio 5
// Escribe un programa que solicite al usuario ingresar el número
// de kilómetros recorridos por su coche y el número de litros consumidos .
// El script debe mostrar el consumo de combustible por kilómetro.

// let kilometrosRecorridos = parseFloat(
//   prompt("Ingresa el numero de kilometros recorridos")
// );
// let litrosConsumidos = parseFloat(
//   prompt("Ingresa el numero de litros consumidos")
// );

// if (!isNaN(kilometrosRecorridos) && !isNaN(litrosConsumidos)) {
//   let consumo = kilometrosRecorridos / litrosConsumidos;
//   document.write(
//     `Consumiste ${
//       consumo % 1 === 0 ? consumo : consumo.toFixed(2)
//     } litros por kilómetro.`
//   );
//   // document.write(`Consumiste ${consumo}L por kilometro`)
// } else {
//   alert("Asegurate de ingresar valores numericos");
// }

//Ejercicio 6

// // Debes convertir a
// // segundos una medida de tiempo dada en horas y minutos.

// let horas = parseInt(prompt("Dime una cantidad de horas"))
// let minutos = parseInt(prompt("Dime una cantidad de minutos"))

// if(!isNaN(horas) && !isNaN(minutos)){
//   let horasSeg = horas*60*60
//   let minutosSeg = minutos*60
//   let totalSeg = horasSeg + minutosSeg
//   document.write(`El tiempo que me diste suma un total de ${totalSeg} segundos`)
// }else{
//   document.write("Ingresa correctamente la cantidad de horas y minutos")
// }

// //Ejercicio 6 con funcion
//   // Debes convertir a
//   // segundos una medida de tiempo dada en horas y minutos.

//   let horas = parseInt(prompt("Dime una cantidad de horas"));
//   let minutos = parseInt(prompt("Dime una cantidad de minutos"));

//   function convertirAsegundos(horas, minutos) {
//     if (!isNaN(horas) && !isNaN(minutos)) {
//       let horasSeg = horas * 60 * 60;
//       let minutosSeg = minutos * 60;
//       let totalSeg = horasSeg + minutosSeg;
//       return totalSeg;

//     } else {
//       return null;
//     }
//   }

//   let conversion = convertirAsegundos(horas, minutos);

//   if (conversion !== null) {
//     document.write(
//       `El tiempo que me diste suma un total de ${conversion} segundos`
//     );
//   } else {
//     document.write("Ingresa correctamente la cantidad de horas y minutos");
//   };

// //Ejercicio 7

// // En este script debes pedir al usuario un número de dos dígitos y
// // debes devolver el número de unidades y de decenas, o sea, cada dígito del número.
// // Usa solo operationes aritméticas

// let numero = parseInt(prompt("Ingresa un numero de dos digitos"));

// if (!isNaN(numero) && numero >=10 && numero <=99 ) {
//   let decena = Math.floor(numero / 10);
//   let unidad = numero % 10;
//   let resultado = `El numero ${numero} tiene ${decena} decenas y ${unidad} unidades`;

//   document.write(resultado);

// }else {
//   document.write("Ingresa un numero de dos digitos");
// }

//EJERCICIO 8
// // Una tortilla de papas lleva 200 gramos de papas por persona.
// // Por cada kilo de papas se necesitan 5 huevos y 300 gramos de cebolla.
// // Escribe un script que dado el número de comensales calcule las cantidades
// // de ingredientes necesarias

// let personas = parseInt(prompt("Cuantas personas comeran de la tortilla?"));

// let papas = 200 * personas;
// let huevos = 1 * personas;
// let cebolla = (300 / 5) * personas;

// if (papas >= 1000) {
//   papas = `${papas / 1000}kg`;
// } else {
//   papas = `${papas}gr`;
// }

// if (huevos > 1) {
//   huevos = `${huevos} huevos`;
// } else {
//   huevos = `${huevos} huevo`;
// }

// let ingredientes = `Los ingredientes de una tortilla para ${personas} personas son: <br>
// ${papas} de papas<br>
// ${huevos} <br>
// ${cebolla}gs de cebollas`;

// document.write(ingredientes);

//EJERCICIO 9

// escribir un programa que intercambie el valor de dos variables.
// Al final la primera variable debe terner el valor de la segunda
// y la segunda el valor de la primera. No vale usar arrays ni asignación múltiple

// let a = prompt(" Ingresa un numero entero para la variable a");
// let b = prompt(" Ingresa un numero entero para la variable b");

// document.write(`<h1>Antes del cambio:<br> a = ${a}  <br> b = ${b}</h1><br>`);

// let temp = a;
// a = b;
// b = temp;

// document.write(`<h1><br>Despues del cambio:<br> a = ${a}  <br> b = ${b}</h1>`);

// EJERCICIO 10
// // Escribe un script  que dado un número nos devuelva true si es un número par
// // y false si es un número impar. No usar condiconales.

// let numero = parseInt(prompt("Ingresa un numero entero"))

// if(!isNaN(numero)){
//   if(numero % 2 == 0){

//     document.write(`<h1>El numero ${numero} es par</h1>`);
//   }else{
//     document.write(`<h1>El numero ${numero} es impar</h1>`);
//   }

// }else{
//   document.write("Ingresa un numero entero")
// }

// EJERCICIO 11
// // Haz un programa que pida un número y diga si es positivo o negativo.
// // El cero se considera positivo

// let numero = parseInt(prompt("Ingresa un numero entero negativo o postitivo"))

// if(!isNaN(numero)){
//   if(numero >= 0){
//     document.write(`El numero ${numero} es positivo`)
//   }else {
//     document.write(`El numero ${numero} es negativo`)
//   }
// }else{
//   document.write("Ingresa un numero entero")
// }

// // Haz un programa que pida un número y diga si es positivo o negativo.
// // // El cero se considera positivo

// let numeroIng = parseInt(prompt("Ingresa un numero entero negativo o postitivo"))

// function posNeg (numero){

//   if(!isNaN(numero)){
//     if(numero >= 0){
//       document.write(`El numero ${numero} es positivo`)
//     }else {
//       document.write(`El numero ${numero} es negativo`)
//     }
//   }else{
//     document.write("Ingresa un numero entero")
//   }
// }

// posNeg(numeroIng)

//EJERCICIO 12
// Debes pedir dos números enteros y
// devolver el cociente de dividir el primero entre el segundo,
// pero si este es cero no debe hacer la división, sino lanzar un mensaje de error

// let num1 = prompt("Ingresa el número que quieres dividir");

// if (num1 === "" || isNaN(num1)) {
//   alert("Debes ingresar un número");
// } else {
//   num1 = parseFloat(num1);

//   let num2 = prompt(`Quieres dividir ${num1} entre:`);

//   if (num2 === "" || isNaN(num2)) {
//     alert("Debes ingresar un número");
//   } else {
//     num2 = parseFloat(num2);

//     if (num2 === 0) {
//       alert("Error - No puede dividirse por 0");
//     } else {
//       let resultado = num1 / num2;
//       resultado = resultado % 1 === 0 ? resultado : resultado.toFixed(2);
//       alert(`${num1} dividido ${num2} es ${resultado}`);
//     }
//   }
// }

//EJERCICIO 13

// Pide al usuario que teclee una letra entre A, B, C, D.
// Si pulsa la letra A en mayúsucla o en minúscula le dará el mensaje
// de que ha acertado, en caso contrario le dirá que se equivocó.

// let letraIngresada = prompt("Ingresa la letra A, B, C o D").toLocaleUpperCase();

// if (letraIngresada == "A" || letra == "B" || letra == "C" || letra == "D") {
//   alert("Has acertado");
// } else {
//   alert("Has fallado");
// }

// //Otra forma es
// let letrasValidas = ["A", "B", "C", "D", "a", "b", "c", "d"];
// let letra = prompt("Ingresa la letra A, B, C o D");

// if (letrasValidas.includes(letra)) {
//   alert("Has acertado");
// } else {
//   alert("Has fallado");
// }
