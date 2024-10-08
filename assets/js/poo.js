// //EJERCICIO 1

// class animal {
//     constructor (nombre,especie,raza, edad,color){
//         this.nombre = nombre;
//         this.species = especie
//         this.raza = raza
//         this.edad = edad
//         this.color = color

//         this.informacion = `<h1> - Hola, mi nombre es ${nombre},
//         soy un ${this.species} de raza ${this.raza}, soy de color ${color}
//         y tengo ${edad} años de edad </h1>`

//     }
//     //metodo
//     verInformacion(){
//         document.write(this.informacion + "<br>")
//     }
//     ladrar(){
//         if(this.species == "perro"){
//             document.write("<h1 style='color:blue' >Guauuuu</h1>  <br>")

//         }else{
//             document.write(`<h1 style="color:red"   >No puedo ladrar dado que soy un ${this.species}</h1>  <br>`)
//         }
//     }

// }

// //perro va a ser igual a un objeto de la clase animal
// let perro = new animal("Toby", "perro","caniche", 2, "blanco")
// let gato = new animal("Mishi", "gato", "Siames", 3, "Blanco y negro")
// let pingüino = new animal("Tux", "pingüino", "no especificada", 4, "Negro y blanco")
// console.log(perro)

// // document.write(perro.informacion + "<br>")
// // document.write(gato.informacion + "<br>")
// // document.write(pingüino.informacion + "<br>")

// perro.verInformacion()
// perro.ladrar()
// gato.verInformacion()
// gato.ladrar()
// pingüino.verInformacion()
// pingüino.ladrar()

// //EJERCICIO 2

// class Animal {
//   constructor(nombre, especie, raza, edad, color) {
//     this.nombre = nombre;
//     this.species = especie;
//     this.raza = raza;
//     this.edad = edad;
//     this.color = color;

//     this.informacion = `<h1> - Hola, mi nombre es ${nombre}, 
//         soy un ${this.species} de raza ${this.raza}, soy de color ${color} 
//         y tengo ${edad} años de edad </h1>`;
//   }
//   //metodo
//   verInformacion() {
//     document.write(this.informacion + "<br>");
//   }
// }

// class Perro extends Animal {
//   constructor(nombre, especie, raza, tamaño) {
//     super(nombre, especie, raza);
//     this.tamaño = tamaño;
//     this.info = `<h1> - Hola, mi nombre es ${nombre}, 
//         soy un ${this.species} de raza ${this.raza}, soy  ${tamaño} 
//          </h1>`;
//   }

//   ladrar() {
//     document.write(`<h1 style="color:red"   >Guauu Guauu</h1>
//         <h1 style="color:blue"   >${this.nombre} está ladrando
//         </h1>`);
//   }
//   verInfo() {
//     document.write(this.info + "<br>");
//   }
// }
// //perro va a ser igual a un objeto de la clase animal
// let perro = new Perro("Toby", "perro", "caniche", "pequeño");
// let gato = new Animal("Mishi", "gato", "Siames", 3, "Blanco y negro");
// let pingüino = new Animal(
//   "Tux",
//   "pingüino",
//   "no especificada",
//   4,
//   "Negro y blanco"
// );
// console.log(perro);

// perro.verInfo();
// perro.ladrar();


//EJERCICIO 2

class Animal {
    constructor(nombre, especie, raza, edad, color) {
      this.nombre = nombre;
      this.species = especie;
      this.raza = raza;
      this.edad = edad;
      this.color = color;
  
      this.informacion = `<h1> - Hola, mi nombre es ${nombre}, 
          soy un ${this.species} de raza ${this.raza}, soy de color ${color} 
          y tengo ${edad} años de edad </h1>`;
    }
    //metodo
    verInformacion() {
      document.write(this.informacion + "<br>");
    }
  }
  
  class Perro extends Animal {
    constructor(nombre, especie, raza, tamaño) {
      super(nombre, especie, raza);
      this.tamaño = null;
      this.info = `<h1> - Hola, mi nombre es ${nombre}, 
          soy un ${this.species} de raza ${this.raza}, soy  ${tamaño} 
           </h1>`;
    }
    set setTamaño(newName){
        this.tamaño = newName
    }
    get getTamaño(){
        return this.tamaño;
        }


  
    ladrar() {
      document.write(`<h1 style="color:red">Guauu Guauu</h1>
          <h1 style="color:blue"   >${this.nombre} está ladrando
          </h1>`);
    }
    verInfo() {
      document.write(this.info + "<br>");
    }

    static llorar (){
        document.write(`<h1 style="color:blue"> Ahora esta llorando hiu hiu hiu hiu
            </h1>`);
    }

  }
  //perro va a ser igual a un objeto de la clase animal
  const perro = new Perro("Toby", "perro", "caniche", "pequeño");
  const gato = new Animal("Mishi", "gato", "Siames", 3, "Blanco y negro");
  const pingüino = new Animal(
    "Tux",
    "pingüino",
    "no especificada",
    4,
    "Negro y blanco"
  );
  console.log(perro);
  
  perro.verInfo();
  perro.ladrar();
  Perro.llorar()
  perro.setTamaño="grande"
  document.write(perro.getTamaño)