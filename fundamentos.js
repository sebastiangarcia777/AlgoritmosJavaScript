const { isSwitchStatement } = require("typescript");

// tipos de datos
let nombre = "Felipe";
let edad = 14;
let mayorEdad = true;
let estatura;

console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof mayorEdad);
console.log(typeof estatura);


//Tipos de ddatos complejos

let frutas = ["Pera", "Manzana", "Melon"];

let auto = {
    modelo: 2024,
    marca: "Chevrolet",
    color: "blanco",
    cilindraje: 2100,
    tipo: "Camioneta"
}

// Concatenando variables

console.log("Bienvenido Usuario " + nombre + " su edad es " + edad + " y su fruta favorita es " + frutas[0] ) 


//Estructuras de control condicional

console.log("--------------------------------------------")


if (edad > 25) {
    console.log("Es un adulto")
}
else if(edad >18){
    console.log("Es un joven")
}

else if(edad >13){
    console.log("Es un pelado")
}

else{
    console.log("es un niño")
}


let tipoSubscripcion = "Platinum";

switch (tipoSubscripcion) {
    case "Basic":
            console.log("Muy suave o probre")
        break;
    case "Gold":
            console.log("Buen plan, pero sigue siendo pobre")
        break;
    case "Platinum":
            console.log("El mejor plan")    
        break;      
    default:
        console.log("Este plan no existe")
        break;
}

// estructuras de control de bucles

let contador= 0

while (contador < 11) {
    console.log("Este es el numero " + contador)
    contador = contador + 1
}



for (let i = 100; i>0 ; i=i-10 ){
    console.log("Contador con for numero " + i)

}
