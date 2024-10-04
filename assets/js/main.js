// Variables
let nombre = "Juan";
const PI = 3.14159;
var edad = 25;
// Las variables se utilizan para almacenar valores. Pueden ser de diferentes tipos, como cadenas de texto, números, booleanos, etc.
// Las palabras clave `let`, `const` y `var` se utilizan para declarar variables.

// Pedir datos con prompt
let nombreUsuario = prompt("¿Cuál es tu nombre?");
console.log("Hola, " + nombreUsuario + "!");
// La función `prompt()` se usa para solicitar información al usuario. Devuelve el valor ingresado como una cadena de texto.

// Operadores básicos
let a = 5;
let b = 3;
console.log(a + b); // 8
console.log(a - b); // 2
console.log(a * b); // 15
console.log(a / b); // 1.6666666666666667
console.log(a % b); // 2 (resto de la división)
// Los operadores básicos como `+`, `-`, `*`, `/` y `%` se utilizan para realizar operaciones matemáticas.

// Concatenación
let nombreCompleto = "Juan";
let edadPersona = 25;
console.log("Hola, me llamo " + nombreCompleto + " y tengo " + edadPersona + " años.");
// La concatenación se usa para unir cadenas de texto.

// Template Strings
console.log(`Hola, me llamo ${nombreCompleto} y tengo ${edadPersona} años.`);
// Los template strings permiten insertar expresiones dentro de cadenas de texto usando la sintaxis `${expression}`.

// Operadores intermedios
let x = 5;
x++; // x = 6
x--; // x = 5
x += 2; // x = 7
x *= 3; // x = 21
let mayor = (x > y) ? x : y; // Operador ternario
// Los operadores de incremento/decremento, asignación compuesta y el operador ternario son operadores más avanzados en JavaScript.

// Camel Case
let miVariableEnCamelCase = 42;
function realizarOperacion(a, b) {
  // ...
}
// La convención de nomenclatura Camel Case se utiliza para nombrar variables, funciones y otros elementos en JavaScript.

// Condicionales
let edadPersona2 = 18;
if (edadPersona2 >= 18) {
  console.log("Es mayor de edad");
} else {
  console.log("Es menor de edad");
}

switch (edadPersona2) {
  case 18:
    console.log("Es mayor de edad");
    break;
  case 17:
    console.log("Es menor de edad");
    break;
  default:
    console.log("Edad desconocida");
}
// Las estructuras condicionales `if-else` y `switch` permiten tomar decisiones en el código en función de ciertas condiciones.

// Arrays
let frutas = ["manzana", "banana", "naranja"];
console.log(frutas[1]); // "banana"
// Los arrays en JavaScript son colecciones ordenadas de valores.

// Arrays Asociativos (Objetos)
let persona = {
  nombre: "Juan",
  edad: 25,
  profesion: "Ingeniero"
};
console.log(persona.nombre); // "Juan"
// Los objetos en JavaScript son colecciones de pares clave-valor, similar a los arrays asociativos.

// Bucles e iteración
// Bucle while
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
// El bucle `while` ejecuta el código mientras se cumpla una determinada condición.

// Bucle for
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// El bucle `for` se utiliza para iterar un número específico de veces.

// Bucle for...in (iteración sobre propiedades de objetos)
let personaObj = { nombre: "Juan", edad: 25 };
for (let prop in personaObj) {
  console.log(`${prop}: ${personaObj[prop]}`);
}
// El bucle `for...in` se usa para iterar sobre las propiedades de un objeto.

// Bucle for...of (iteración sobre elementos de arrays)
let numerosArr = [1, 2, 3, 4, 5];
for (let num of numerosArr) {
  console.log(num);
}
// El bucle `for...of` se utiliza para iterar sobre los elementos de un array.

// Funciones
function sumar(a, b) {
  return a + b;
}
let resultadoSuma = sumar(3, 4); // 7
// Las funciones son bloques de código reutilizables que pueden recibir parámetros y devolver valores.

// Programación Orientada a Objetos
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, me llamo ${this.nombre}.`);
  }
}

let juan = new Persona("Juan", 25);
juan.saludar(); // "Hola, me llamo Juan."
// JavaScript admite conceptos de Programación Orientada a Objetos, como clases, objetos, herencia y polimorfismo.

// Métodos de Cadenas
let mensaje = "  Hola, mundo!  ";
console.log(mensaje.trim()); // "Hola, mundo!"
console.log(mensaje.toUpperCase()); // "  HOLA, MUNDO!  "
console.log(mensaje.replace("mundo", "amigo")); // "  Hola, amigo!  "
console.log(mensaje.slice(2, 7)); // "la, m"
console.log(mensaje.split(", ")); // ["Hola", "mundo!"]
// Los métodos de cadenas permiten manipular y procesar cadenas de texto.

// Métodos de Arrays
let numerosArray = [1, 2, 3, 4, 5];
console.log(numerosArray.map(x => x * 2)); // [2, 4, 6, 8, 10]
// El método `map()` crea un nuevo array aplicando una función a cada elemento del array original.
console.log(numerosArray.filter(x => x % 2 === 0)); // [2, 4]
// El método `filter()` crea un nuevo array con todos los elementos que pasan la prueba implementada por la función proporcionada.
console.log(numerosArray.reduce((acc, x) => acc + x, 0)); // 15
// El método `reduce()` aplica una función de reducción a cada elemento del array, acumulando un único valor.
console.log(numerosArray.indexOf(3)); // 2
// El método `indexOf()` devuelve el índice de la primera aparición del elemento especificado.
console.log(numerosArray.includes(4)); // true
// El método `includes()` determina si un array contiene un determinado elemento, devolviendo `true` o `false`.

// Objeto Math
console.log(Math.PI); // 3.141592653589793
console.log(Math.sqrt(16)); // 4
console.log(Math.ceil(3.4)); // 4
console.log(Math.floor(3.9)); // 3
console.log(Math.round(3.5)); // 4
console.log(Math.random()); // número aleatorio entre 0 y 1
// El objeto `Math` proporciona funciones y propiedades matemáticas útiles.

// Consola de JavaScript
console.log("Mensaje de registro");
console.error("Mensaje de error");
console.warn("Mensaje de advertencia");
console.info("Mensaje de información");
console.count("Contador"); // Imprime "Contador: 1"
console.time("Operación");
// Código a medir
console.timeEnd("Operación"); // Imprime el tiempo transcurrido
console.group("Grupo");
console.log("Mensaje en el grupo");
console.groupEnd();
// La consola de JavaScript, a través del objeto `console`, ofrece métodos para registrar, contar, agrupar y medir el tiempo de ejecución del código.

// DOM (Document Object Model)
// Seleccionar elementos
let elemento = document.getElementById("mi-elemento");
let elementos = document.getElementsByTagName("p");
let elementosClase = document.getElementsByClassName("mi-clase");
let elementosQuery = document.querySelectorAll(".mi-clase, #mi-id");
// Estos métodos permiten seleccionar elementos del documento HTML.

// Modificar atributos
elemento.setAttribute("class", "nuevo-estilo");
elemento.removeAttribute("disabled");
// Estos métodos permiten establecer y eliminar atributos de los elementos.

// Modificar estilos
elemento.style.color = "red";
elemento.style.fontSize = "20px";
// Se puede acceder y modificar los estilos de los elementos a través de la propiedad `style`.

// Modificar clases
elemento.classList.add("resaltado");
elemento.classList.remove("oculto");
elemento.classList.toggle("activo");
// Los métodos de `classList` permiten agregar, eliminar y alternar clases de los elementos.

// Crear y manipular nodos
let nuevoElemento = document.createElement("div");
nuevoElemento.textContent = "Nuevo elemento";
elemento.appendChild(nuevoElemento);
elemento.removeChild(nuevoElemento);
// Estos métodos permiten crear nuevos elementos, agregarlos al DOM y eliminarlos.