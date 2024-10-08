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

// //EJERCICIO 2

// class Animal {
//   constructor(nombre, especie, raza, edad, color) {
//     this.nombre = nombre;
//     this.species = especie;
//     this.raza = raza;
//     this.edad = edad;
//     this.color = color;

//     this.informacion = `<h1> - Hola, mi nombre es ${nombre},
//           soy un ${this.species} de raza ${this.raza}, soy de color ${color}
//           y tengo ${edad} años de edad </h1>`;
//   }
//   //metodo
//   verInformacion() {
//     document.write(this.informacion + "<br>");
//   }
// }

// class Perro extends Animal {
//   constructor(nombre, especie, raza, tamaño) {
//     super(nombre, especie, raza);
//     this.tamaño = null;
//     this.info = `<h1> - Hola, mi nombre es ${nombre},
//           soy un ${this.species} de raza ${this.raza}, soy  ${tamaño}
//            </h1>`;
//   }
//   set setTamaño(newName) {
//     this.tamaño = newName;
//   }
//   get getTamaño() {
//     return this.tamaño;
//   }

//   ladrar() {
//     document.write(`<h1 style="color:red">Guauu Guauu</h1>
//           <h1 style="color:blue"   >${this.nombre} está ladrando
//           </h1>`);
//   }
//   verInfo() {
//     document.write(this.info + "<br>");
//   }

//   static llorar() {
//     document.write(`<h1 style="color:blue"> Ahora esta llorando hiu hiu hiu hiu
//             </h1>`);
//   }
// }
// //perro va a ser igual a un objeto de la clase animal
// const perro = new Perro("Toby", "perro", "caniche", "pequeño");
// const gato = new Animal("Mishi", "gato", "Siames", 3, "Blanco y negro");
// const pingüino = new Animal(
//   "Tux",
//   "pingüino",
//   "no especificada",
//   4,
//   "Negro y blanco"
// );
// console.log(perro);

// perro.verInfo();
// perro.ladrar();
// Perro.llorar();
// perro.setTamaño = "grande";
// document.write(perro.getTamaño);

//EJERCICIO 3

class Celular {
  constructor(color, peso, tamaño, rdc, ram) {
    this.color = color;
    this.peso = peso;
    this.tamaño = tamaño;
    this.resolucionDeCamara = rdc;
    this.memoriaRam = ram;
    this.encendido = false;
  }
  presionarBotonEncendido() {
    if (this.encendido == false) {
      alert("Celular prendido");
      this.encendido = true;
    } else {
      alert("El celula apagado");
      this.encendido = false;
    }
  }
  reiniciar() {
    if (this.encendido == true) {
      alert("Celular reiniciado");
    } else {
      alert("El celular esta apagado");
    }
  }
  tomarFoto() {
    alert(`foto tomada en resolucion de: ${this.resolucionDeCamara}`);
  }

  grabarVideo() {
    alert(`Grabando video en resolucion de: ${this.resolucionDeCamara}`);
  }

  mobileInfo() {
    return `
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Tamaño: <b>${this.tamaño}</b><br>
        resolucion de camara: <b>${this.resolucionDeCamara}</b><br>
        Memoria ram: <b>${this.memoriaRam}</b><br>
        `;
  }
}

class CelularAltaGama extends Celular{
    constructor(color, peso, tamaño, rdc, ram,rdce){
        super(color, peso, tamaño, rdc, ram)
        this.resolucionDeCamaraExtra = rdce
}
    grabarVideoLento(){
        alert("Grabando en camara lenta")
    }
    reconocimientoFacial(){
        alert("Reconociendo rostro")
    }

    infoAltaGama(){
        return this.mobileInfo() + 
        `Resolucion de camara extra: <b>${this.resolucionDeCamaraExtra}</b>`
    }


}


const celular1 = new Celular("rojo", "150gr", "5'", "Hd", "1Gb");
const celular2 = new Celular("negro", "155gr", "5.4", "Full Hd", "2GB");
const celular3 = new Celular("blanco", "146gr", "5.9", "Full Hd", "2GB");

// celular1.presionarBotonEncendido()
// celular1.tomarFoto()
// celular1.grabarVideo()
// celular1.reiniciar()
// celular1.presionarBotonEncendido()

const celular4 = new CelularAltaGama("rojo", "130gr", "5.2'", "4K", "3Gb","Full HD")
const celular5 = new CelularAltaGama("negro", "140gr", "6'", "4K", "4Gb","HD")

document.write(`
    <h2>Celulares gama media</h2><br>
    ${celular1.mobileInfo()} <br>
    ${celular2.mobileInfo()} <br>
    ${celular3.mobileInfo()} <br>

    `);document.write(`
        <h2>Celulares Alta gama</h2><br>
    ${celular4.infoAltaGama()} <br><br>
    ${celular5.infoAltaGama()} <br>
    

    `);

