// -------------------------
// 1. VARIABLES
// -------------------------
/*
Una variable es un contenedor para almacenar datos que luego pueden ser utilizados o manipulados.
En JavaScript, las variables se definen utilizando `var`, `let` o `const`.

- var: Alcance global o de función (No recomendado en ES6+).
- let: Alcance de bloque, puede ser reasignada.
- const: Alcance de bloque, no puede ser reasignada.
*/

var nombre = "Juan"; // Mala práctica, alcance global
let edad = 25; // Recomendado para variables que cambiarán
const PI = 3.1416; // Recomendado para constantes, no cambia su valor

// Ejemplo
let mensaje = "Hola, soy " + nombre + " y tengo " + edad + " años."; 
console.log(mensaje);

// -------------------------
// 2. PEDIR DATOS CON PROMPT
// -------------------------
/*
`prompt` se usa para obtener entradas del usuario desde un cuadro emergente en el navegador.
*/

let nombreUsuario = prompt("¿Cuál es tu nombre?");
console.log("Hola, " + nombreUsuario);

// -------------------------
// 3. OPERADORES EN JAVASCRIPT (Básico e Intermedio)
// -------------------------
/*
Los operadores en JavaScript se usan para realizar operaciones sobre variables y valores.

- Aritméticos: +, -, *, /, %, ++, --
- Comparación: ==, ===, !=, !==, >, <, >=, <=
- Lógicos: && (AND), || (OR), ! (NOT)
- Asignación: =, +=, -=, *=, /=, %=
*/

// Ejemplo básico
let a = 10;
let b = 5;
console.log(a + b); // Suma: 15

// Ejemplo intermedio (Operador lógico)
let esMayor = (a > b) && (a !== b); 
console.log(esMayor); // true

// -------------------------
// 4. CONCATENACIÓN
// -------------------------
/*
Concatenar es unir dos o más cadenas de texto. En ES5, se usa el operador +. En ES6, es mejor usar Template Strings.
*/

let texto1 = "Hola";
let texto2 = "Mundo";
let resultado = texto1 + " " + texto2;
console.log(resultado); // "Hola Mundo"

// -------------------------
// 5. TEMPLATE STRINGS Y EL USO DE BACKTICKS
// -------------------------
/*
En ES6, los Template Strings permiten incluir variables en cadenas de texto usando `${}` dentro de comillas invertidas (backticks).
*/

let saludo = `Hola, soy ${nombre} y tengo ${edad} años.`;
console.log(saludo);

// -------------------------
// 6. CAMEL CASE EN JAVASCRIPT
// -------------------------
/*
CamelCase es una convención de nomenclatura en la que las palabras se unen sin espacios y cada palabra después de la primera comienza con una letra mayúscula.
Ejemplo: miVariable, otroEjemploDeVariable.
*/

// -------------------------
// 7. CONDICIONALES
// -------------------------
/*
Los condicionales permiten ejecutar diferentes bloques de código en función de una condición.

- if, else if, else
- switch
*/

let edadUsuario = 18;
if (edadUsuario >= 18) {
  console.log("Eres mayor de edad.");
} else {
  console.log("Eres menor de edad.");
}

// switch
let dia = 3;
switch (dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  default:
    console.log("Otro día");
}

// -------------------------
// 8. ARRAYS
// -------------------------
/*
Un array es una colección de datos ordenados. Se puede acceder a los elementos usando índices (comenzando en 0).
*/

let frutas = ["Manzana", "Banana", "Naranja"];
console.log(frutas[0]); // "Manzana"
console.log(frutas.length); // 3

// Métodos comunes:
frutas.push("Mango"); // Añadir al final
frutas.pop(); // Eliminar el último elemento

// -------------------------
// 9. ARRAYS ASOCIATIVOS (OBJETOS)
// -------------------------
/*
Un objeto es una colección de pares clave-valor. Cada propiedad tiene un nombre (clave) y un valor asociado.
*/

let persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Buenos Aires"
};

console.log(persona.nombre); // "Juan"
console.log(persona["edad"]); // 30

// -------------------------
// 10. BUCLES E ITERACIÓN
// -------------------------
/*
Los bucles permiten repetir un bloque de código varias veces.

- while
- do...while
- for
- for...in (para objetos)
- for...of (para arrays)
*/

let i = 0;
while (i < 5) {
  console.log(i); 
  i++;
}

do {
  console.log(i);
  i--;
} while (i > 0);

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]); // "Manzana", "Banana", "Naranja"
}

// for...in (para iterar sobre propiedades de un objeto)
for (let key in persona) {
  console.log(key + ": " + persona[key]); 
}

// for...of (para iterar sobre elementos de un array)
for (let fruta of frutas) {
  console.log(fruta); 
}

// -------------------------
// 11. FUNCIONES
// -------------------------
/*
Una función es un bloque de código diseñado para realizar una tarea específica. Se puede definir con la palabra clave `function`.

- Función tradicional
- Funciones anónimas
- Arrow functions (ES6)
*/

function saludar(nombre) {
  return `Hola, ${nombre}!`;
}
console.log(saludar("Carlos")); // "Hola, Carlos!"

// Función anónima
let suma = function(a, b) {
  return a + b;
};
console.log(suma(5, 3)); // 8

// Arrow function (ES6)
let multiplicar = (a, b) => a * b;
console.log(multiplicar(4, 5)); // 20

// -------------------------
// 12. POO (Programación Orientada a Objetos)
// -------------------------
/*
La POO es un paradigma de programación basado en objetos, que contienen propiedades y métodos.

- Clases
- Herencia
- Encapsulamiento
*/

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  saludar() {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
  }
}
let juan = new Persona("Juan", 30);
console.log(juan.saludar()); // "Hola, soy Juan y tengo 30 años."

// -------------------------
// 13. MÉTODOS DE CADENAS
// -------------------------
/*
Las cadenas en JavaScript tienen métodos incorporados para manipulación.

- length
- toUpperCase()
- toLowerCase()
- slice()
*/

let cadena = "JavaScript es genial";
console.log(cadena.length); // 19
console.log(cadena.toUpperCase()); // "JAVASCRIPT ES GENIAL"
console.log(cadena.slice(0, 10)); // "JavaScript"

// -------------------------
// 14. MÉTODOS DE ARRAYS
// -------------------------
/*
Los arrays tienen varios métodos para manipulación.

- push(), pop(), shift(), unshift()
- forEach(), map(), filter()
*/

frutas.forEach(fruta => console.log(fruta)); // Itera cada fruta

// map (crea un nuevo array)
let longitudes = frutas.map(fruta => fruta.length);
console.log(longitudes); // [7, 6, 7]

// filter (filtra elementos según condición)
let filtradas = frutas.filter(fruta => fruta.startsWith("M"));
console.log(filtradas); // ["Manzana", "Mango"]

// -------------------------
// 15. OBJETO MATH
// -------------------------
/*
El objeto Math tiene métodos y propiedades matemáticas.

- Math.PI
- Math.round(), Math.floor(), Math.ceil()
- Math.random()
*/

console.log(Math.PI); // 3.1416
console.log(Math.round(4.7)); // 5
console.log(Math.floor(Math.random() * 10)); // Número aleatorio entre 0 y 9

// -------------------------
// 16. EL DOM (Document Object Model)
// -------------------------
/*
El DOM es la representación del HTML en forma de un árbol de nodos que se puede manipular con JavaScript.

- Métodos de selección: getElementById(), querySelector()
- Manipulación de atributos: getAttribute(), setAttribute()
*/

let titulo = document.getElementById("titulo");
console.log(titulo.textContent); // Obtiene el texto del elemento

// Cambia el estilo del elemento
titulo.style.color = "blue";

// -------------------------
// 17. CONSOLE (CONSOLAS DE JAVASCRIPT)
// -------------------------
/*
La consola es útil para depurar y registrar información.

- console.log(), console.warn(), console.error(), console.table()
*/

console.log("Esto es un mensaje");
console.warn("Esto es una advertencia");
console.error("Esto es un error");

// -------------------------
// 18. PROMESAS (Promises)
// -------------------------
/*
Una promesa es un objeto que representa la eventual finalización (o falla) de una operación asíncrona y su valor resultante.

- Estados de una promesa: pending, fulfilled, rejected
- then(), catch(), finally()
*/

let promesa = new Promise((resolve, reject) => {
    let exito = true;
    if (exito) {
      resolve("¡Operación exitosa!");
    } else {
      reject("Error en la operación.");
    }
  });
  
  // Consumir la promesa
  promesa
    .then(resultado => console.log(resultado)) // "¡Operación exitosa!"
    .catch(error => console.error(error)) // Si hubiera error
    .finally(() => console.log("Operación finalizada.")); // Siempre se ejecuta
  
  // -------------------------
  // 19. ASINCRONÍA Y ASYNC/AWAIT
  // -------------------------
  /*
  `async` y `await` permiten escribir código asíncrono de manera más legible, similar al código sincrónico.
  Una función marcada como `async` siempre devuelve una promesa.
  */
  
  async function obtenerDatos() {
    try {
      let respuesta = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      let datos = await respuesta.json();
      console.log(datos);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  }
  obtenerDatos();
  
  // -------------------------
  // 20. FETCH API
  // -------------------------
  /*
  La API Fetch permite hacer solicitudes HTTP asíncronas para obtener o enviar datos a un servidor.
  
  - fetch(url)
  - Métodos HTTP: GET, POST, PUT, DELETE
  */
  
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET", // GET es por defecto
  })
    .then(response => response.json()) // Parsear respuesta a JSON
    .then(data => console.log(data))
    .catch(error => console.error("Error en Fetch:", error));
  
  // POST (enviar datos)
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "Nuevo Post",
      body: "Este es el contenido del post",
      userId: 1,
    }),
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error en Fetch:", error));
  
  // -------------------------
  // 21. MANEJO DE ERRORES (TRY/CATCH)
  // -------------------------
  /*
  El bloque `try/catch` permite capturar errores en tiempo de ejecución, lo que evita que el programa se detenga abruptamente.
  
  - try: bloque donde puede ocurrir un error
  - catch: captura el error si ocurre
  - finally: se ejecuta siempre, ocurra o no un error
  */
  
  try {
    let resultado = suma(10, 5); // Esta función no existe, lanzará error
    console.log(resultado);
  } catch (error) {
    console.error("Se ha producido un error:", error.message); // Manejo de error
  } finally {
    console.log("Esto siempre se ejecuta.");
  }
  
  // -------------------------
  // 22. LOCALSTORAGE Y SESSIONSTORAGE
  // -------------------------
  /*
  Ambas son APIs de almacenamiento local del navegador para guardar datos en el cliente de manera persistente (localStorage) o temporal (sessionStorage).
  
  - localStorage: persiste incluso después de cerrar el navegador.
  - sessionStorage: se elimina cuando la pestaña del navegador se cierra.
  */
  
  localStorage.setItem("nombre", "Juan"); // Guardar un valor
  let nombreGuardado = localStorage.getItem("nombre"); // Obtener el valor
  console.log(nombreGuardado); // "Juan"
  
  localStorage.removeItem("nombre"); // Eliminar el valor
  
  // SessionStorage funciona igual pero sus datos se eliminan al cerrar la sesión del navegador
  
  // -------------------------
  // 23. JSON (JavaScript Object Notation)
  // -------------------------
  /*
  JSON es un formato para almacenar y transportar datos, comúnmente usado para enviar datos entre el cliente y el servidor.
  
  - JSON.parse(): convierte una cadena JSON en un objeto JavaScript.
  - JSON.stringify(): convierte un objeto JavaScript en una cadena JSON.
  */
  
  let objeto = {
    nombre: "Carlos",
    edad: 30,
    profesion: "Desarrollador",
  };
  
  let jsonString = JSON.stringify(objeto); // Convertir objeto a JSON
  console.log(jsonString); // '{"nombre":"Carlos","edad":30,"profesion":"Desarrollador"}'
  
  let objetoConvertido = JSON.parse(jsonString); // Convertir JSON a objeto
  console.log(objetoConvertido.nombre); // "Carlos"
  
  // -------------------------
  // 24. MODULOS (IMPORT/EXPORT) - ES6
  // -------------------------
  /*
  Los módulos permiten organizar mejor el código dividiéndolo en archivos separados.
  
  - `export`: se usa para exportar variables, funciones o clases.
  - `import`: se usa para importar lo que otros módulos han exportado.
  */
  
  // Archivo "miModulo.js"
  export const saludo = "Hola, Mundo!";
  export function sumar(a, b) {
    return a + b;
  }
  
  // Archivo "main.js"
  import { saludo, sumar } from "./miModulo.js";
  console.log(saludo); // "Hola, Mundo!"
  console.log(sumar(5, 3)); // 8
  
  // -------------------------
  // 25. EVENTOS EN JAVASCRIPT
  // -------------------------
  /*
  Los eventos son acciones que ocurren en la página web y que JavaScript puede detectar y manejar.
  
  - addEventListener(): método para agregar un controlador de eventos.
  */
  
  let boton = document.getElementById("miBoton");
  boton.addEventListener("click", () => {
    alert("¡Botón clickeado!");
  });
  
  // -------------------------
  // 26. EVENT BUBBLING Y EVENT CAPTURING
  // -------------------------
  /*
  El modelo de eventos en JavaScript define dos fases:
  
  - Fase de captura: el evento se propaga desde el elemento raíz hacia abajo.
  - Fase de burbuja: el evento se propaga desde el elemento objetivo hacia arriba.
  */
  
  document.getElementById("padre").addEventListener("click", () => {
    console.log("Click en padre");
  }, true); // Fase de captura
  
  document.getElementById("hijo").addEventListener("click", () => {
    console.log("Click en hijo");
  }); // Fase de burbuja (por defecto)
  
  // -------------------------
  // 27. DESTRUCTURING (DESESTRUCTURACIÓN) - ES6
  // -------------------------
  /*
  La desestructuración permite extraer valores de arrays u objetos de manera más concisa.
  */
  
  let numeros = [1, 2, 3, 4];
  let [primero, segundo] = numeros;
  console.log(primero); // 1
  console.log(segundo); // 2
  
  let personaInfo = { nombre: "Ana", edad: 28, ciudad: "Madrid" };
  let { nombre, ciudad } = personaInfo;
  console.log(nombre); // "Ana"
  console.log(ciudad); // "Madrid"
  
  // -------------------------
  // 28. SPREAD OPERATOR (...) - ES6
  // -------------------------
  /*
  El operador spread (`...`) permite expandir elementos de arrays u objetos.
  */
  
  let numeros1 = [1, 2, 3];
  let numeros2 = [4, 5, 6];
  let combinados = [...numeros1, ...numeros2];
  console.log(combinados); // [1, 2, 3, 4, 5, 6]
  
  let persona1 = { nombre: "Pedro", edad: 25 };
  let persona2 = { ciudad: "Bogotá", pais: "Colombia" };
  let nuevaPersona = { ...persona1, ...persona2 };
  console.log(nuevaPersona); // {nombre: "Pedro", edad: 25, ciudad: "Bogotá", pais: "Colombia"}
  
  // -------------------------
  // 29. REST PARAMETERS - ES6
  // -------------------------
  /*
  El operador `rest` (`...`) permite agrupar un número indeterminado de argumentos en un array.
  */
  
  function sumarTodos(...numeros) {
    return numeros.reduce((a, b) => a + b, 0);
  }
  console.log(sumarTodos(1, 2, 3, 4, 5)); // 15
  
  // -------------------------
  // 30. CLOSURES
  // -------------------------
  /*
  Un closure es una función que recuerda y tiene acceso al alcance (scope) donde fue creada, incluso después de que dicho alcance haya terminado.
  */
  
  function crearContador() {
    let contador = 0;
    return function() {
      contador++;
      return contador;
    };
  }
  
  let miContador = crearContador();
  console.log(miContador()); // 1
  console.log(miContador()); // 2
  console.log(miContador()); // 3
  


  // ---------------------------
// Método forEach en JavaScript
// ---------------------------

// El método `forEach` es utilizado para ejecutar una función específica 
// una vez por cada elemento en un array. Es útil cuando queremos 
// realizar una acción para cada elemento sin devolver valores.

// Sintaxis:
// array.forEach(function(currentValue, index, array) {
//   // código a ejecutar para cada elemento
// });

// Parámetros:
// - currentValue: El valor del elemento actual.
// - index (opcional): El índice del elemento actual.
// - array (opcional): El array que está siendo recorrido.


// Ejemplo básico con forEach:

const frutas = ['manzana', 'banana', 'pera'];

frutas.forEach(function(fruta) {
  console.log(fruta);
});

// Resultado en consola:
// manzana
// banana
// pera


// Ejemplo con el índice del array:

const numeros = [10, 20, 30, 40];

numeros.forEach(function(numero, indice) {
  console.log(`Índice: ${indice}, Valor: ${numero}`);
});

// Resultado en consola:
// Índice: 0, Valor: 10
// Índice: 1, Valor: 20
// Índice: 2, Valor: 30
// Índice: 3, Valor: 40


// Ejemplo usando funciones flecha:

const nombres = ['Carlos', 'Ana', 'Juan'];

nombres.forEach((nombre, indice) => {
  console.log(`El nombre en la posición ${indice} es ${nombre}`);
});

// Resultado en consola:
// El nombre en la posición 0 es Carlos
// El nombre en la posición 1 es Ana
// El nombre en la posición 2 es Juan


// Consideraciones:
// - El `forEach` no devuelve ningún valor, simplemente itera sobre 
//   el array y ejecuta la función para cada elemento.
// - No puedes usar `break` o `return` dentro de un `forEach` para 
//   detener la iteración. Si necesitas romper la iteración, un bucle 
//   `for` tradicional sería más apropiado.


// Ejemplo con manipulación del DOM usando forEach:

// Cambiamos el color de todos los elementos con la clase `.item` a azul.
const elementos = document.querySelectorAll('.item');

elementos.forEach((elemento, indice) => {
  elemento.style.color = 'blue';
  console.log(`Elemento ${indice} cambiado de color a azul`);
});
