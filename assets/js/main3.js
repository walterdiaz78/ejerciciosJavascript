// function sumar(n1, n2){
//   resultado = n1+ n2
//   return resultado;
// }

// let num1= parseInt(prompt("Ingrese un numero entero"))
// let num2= parseInt(prompt("Ingrese otro numero entero"))
// let suma = sumar(num1,num2)
// document.write(`<h1>El resultado de la suma es <b>${suma}</b></h1>`)



// let free = false;

// let validarCliente = (time) =>{
//   let edad = parseInt(prompt("Cual es tu edad?"))
  
//   if(edad >18){

//     if(time >= 2 && free == false){
//       alert("Bienvenido, puedes entrar sin costo dado que eres la primer persona en ingresar despues de las 2AM")
//       free = true;
//     }else{
//       alert(`Bienvenido, son las ${time} el costo de entrada es de $10`)
//     }

//   }else{
//     alert("Eres menor de edad, no puedes entrar")
//   }
  
// }

// validarCliente(3);
// validarCliente(4);
// validarCliente(5);
// validarCliente(5);
// validarCliente(5);




//   //  xxxxxxxxxxxxxxxxxxxxxxxxxxx
//   //  xx  PRESENTISMO ALUMNOS  xx
//   //  xxxxxxxxxxxxxxxxxxxxxxxxxxx


// let cantidad = parseInt(prompt("¿Cuantos alumnos son?"));
// let alumnosTotales = [];

// for(i = 0; i < cantidad; i++){
//   alumnosTotales[i] = [prompt("nombre" + (i+1)),0];
// }

// const tomarAsistencia = (nombre, p) =>{
//   let presencia = prompt(nombre);
//   if(presencia == "p" || presencia == "P"){
//     alumnosTotales[p][1]++;

//   }
// }

// // tomando la asistencia de ls 5 dias habiles de una semana 
// for(i = 0; i < 5; i++){
//   for (alumno in alumnosTotales){
//     tomarAsistencia(alumnosTotales[alumno][0], alumno);
//   }

// }

// for(alumno in alumnosTotales){
//   let resultado = `${alumnosTotales[alumno][0]}:<br>
//          Asistencias: ${alumnosTotales[alumno][1]} <br>
//          Ausencias:  ${5 - parseInt(alumnosTotales[alumno][1])}`

// // 2 limites de faltas tolerables por semana 
// if(5 -alumnosTotales[alumno][1]>2 ){
//   resultado += "<b style='color:red'> Reprobado por inasistencias</b><br><br>"
// }else{
//   resultado +="<br><br>"
// }
// document.write(resultado)
// };



// //  xxxxxxxxxxxxxxxxxxxxxxxxxxx
// //  xx      CALCULADORA      xx
// //  xxxxxxxxxxxxxxxxxxxxxxxxxxx

// const sumar = (num1,num2)=>{
//   return num1 + num2;
// }
// const restar = (num1,num2)=>{
//   return num1 - num2;
// }
// const multiplicar = (num1,num2)=>{
//   return num1 * num2;
// }
// const dividir = (num1,num2)=>{
//   return num1 / num2;
// }

// alert("Que operacion deseas realizar?")
// operacion = prompt("1: suma, 2: resta, 3: Multiplicacion, 4: Diision")

// if(operacion == 1){
//   let num1 = parseInt(prompt("Ingresa un numero entero"));
//   let num2 = parseInt(prompt("Ingresa otro numero entero"));
//   resultado = sumar(num1,num2);
// }
// else if(operacion == 2){
//   let num1 = parseInt(prompt("Ingresa un numero entero"));
//   let num2 = parseInt(prompt("Ingresa otro numero entero"));
//   resultado = restar(num1,num2);
// }
// else if(operacion == 3){
//   let num1 = parseInt(prompt("Ingresa un numero entero"));
//   let num2 = parseInt(prompt("Ingresa otro numero entero"));
//   resultado = multiplicar(num1,num2);
// }
// else if(operacion == 4){
//   let num1 = parseInt(prompt("Ingresa un numero entero"));
//   let num2 = parseInt(prompt("Ingresa otro numero entero"));
//   resultado = dividir(num1,num2);
// }else{
//   alert("No se ha encontrado la operacion")
// }

// alert(`El resultado de la operacion es ${resultado}`);


