let nombre = "Paulina";
let edad = 21; 
let profesor = false;

const ARRAY1 = []
ARRAY1.push("a") //agrego al array con push

console.log(ARRAY1)

console.log(ARRAY1[0])

//objetos literarios 
let alumno1 = {
    nombre: "Paulina",
    apellido: "Losinno",
    edad: "21",
    deuda: false
}

let alumno2 = {
    nombre: "Sofia",
    apellido: "Quintero",
    edad: "21",
    deuda: false
}

const CLASE = [alumno1, alumno2]
console.log(CLASE)
console.log(CLASE[1].apellido)
console.table(CLASE)

console.log("2"+"1")
console.log("Esteban"+"n")

console.log("2"==2) //igualdad debil compara solo el valor no el tipo de dato, daria true
console.log("2"===2) //igualdad fuerte compara el valor  y el tipo de dato, daria false 
console.log(typeof("hola")) //me da el tipo de dato 

//AND
console.log("perro" && "gato") //devuelve gato  porque es and
//OR
console.log ("perro" || "gato")

//CAMBIAR DATO
console.log (Number("2"))
let numeroEntero = 2
console.log (numeroEntero = String(numeroEntero))

