class animal {
    constructor (nombre,especie,raza, edad,color){
        this.nombre = nombre;
        this.species = especie
        this.raza = raza
        this.edad = edad
        this.color = color

        this.informacion = `<h1> - Hola, mi nombre es ${nombre}, soy un ${this.species} de raza ${this.raza}, soy de color ${color} y tengo ${edad} años de edad </h1>`
        
    }
    //metodo
    verInformacion(){
        document.write(this.informacion + "<br>")
    }
    
}

//perro va a ser igual a un objeto de la clase animal
let perro = new animal("Toby", "perro","caniche", 2, "blanco")
let gato = new animal("Mishi", "gato", "Siames", 3, "Blanco y negro")
let pingüino = new animal("Tux", "pingüino", "no especificada", 4, "Negro y blanco")
console.log(perro)

// document.write(perro.informacion + "<br>")
// document.write(gato.informacion + "<br>")
// document.write(pingüino.informacion + "<br>")

perro.verInformacion()
gato.verInformacion()
pingüino.verInformacion()  