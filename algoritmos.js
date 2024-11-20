function saludar(){
    console.log("Hola mundo")
    a("Hello world!!")
}

// ALGORITMO QUE REALIZA UNA SUMA ENTRE 2 VALORES INGRESADOS POR EL USUARIO
function suma(){
    // 1. DECLARAR LAS VARIABLES NECESARIAS PARA LA FUNCION O ALGORITMO

    let A = 0
    let B = 0
    let SUMA = 0

    //2. SOLICITAR AL USUARIO QUE INGRESE LOS VALORES Y ESTOS SE ASIGNAN A LAS VARIABLES

    A = parseInt(prompt("INGRESE EL PRIMER VALOR A SUMAR"))
    B = parseInt(prompt("INGRESE EL SEGUNDO VALOR A SUMAR"))

    //3. REALIZAR LA OPERACION

    SUMA = A + B


    //4. MOSTRAR EL RESULTADO
    
    alert("EL RESULTADO DE LA SUMA ES " + SUMA)

}


// ALGORIRMO QUE REALIZA UNA SUMA RESTA MULTIPLICACION Y DIVICION ENTRE DOS VALORES INGRESADOS POR EL USUARIO


function opBasicas() {

    let A = 0
    let B = 0
    let SUMA = 0
    let RESTA = 0
    let MULTIPLICACION = 0
    let DIVICION = 0

    A = parseInt(prompt("INGRESE EL PRIMER VALOR A SUMAR RESTAR MULTIPLICACION Y DIVICION"))
    B = parseInt(prompt("INGRESE EL SEGUNDO VALOR A SUMAR RESTAR MULTIPLICACION Y DIVICION"))

    SUMA = A + B
    RESTA = A - B
    MULTIPLICACION = A * B
    DIVICION = A / B

    alert("EL RESULTADO DE LA SUMA ES " + SUMA)
    alert("EL RESULTADO DE LA RESTA ES " + RESTA)
    alert("EL RESULTADO DE LA MULTIPLICACION ES " + MULTIPLICACION)
    alert("EL RESULTADO DE LA DIVICION ES " + DIVICION)

}



// REALIZAR UN ALGORITMO QUE DETERMINE EL CUADRADO DE UN NUMERO INGRESADO


function cuadrado() {

let A = 0
let cuadrado = 0

A = parseInt(prompt("INGRESE EL NUMERO DEL CUAL QUIERE EL CUADRADO "))

CUADRADO = A * A 

alert("EL CUADRADO DEL NUMERO ES " + CUADRADO)

}

// CUARTO: REALIZAAR UN ALGORITMO QUE DETERMINE EL AREA DE UN TRIANGULO APARTIR DE LA BASE Y LA ALTURA INGRESADAS POR EL USUARIO   B*A _2

function AREA(){

    let BASE = 0
    let ALTURA = 0
    let AREA = 0 

    BASE = parseInt(prompt("INGRESE LA BASE DEL CUAL QUIERE EL AREA "))
    ALTURA = parseInt(prompt("INGRESE LA ALTURA DEL CUAL QUIERE EL AREA "))

    AREA = (BASE * ALTURA) /2

    alert("EL AREA DEL TRIANGULO ES " + AREA)
    
}

// QUINTO: CONVERCION DE UNIDADES REALIZAR UN ALGORITMO QUE COMVIERTA EN MILIMETROS CENTIMETROS METROS Y KILOMETROS UN VALOR DADO EN PULGADAS 

function MilPulgadas(){

    let MILIMETROS = 0
    let CENTIMETROS = 0
    let METROS = 0
    let KILOMETROS = 0
    let PULGADAS = 0 

    PULGADAS = parseInt(prompt("INGRESE LAS PULGADAS DEL CUAL QUIERE SABER SUS OTRAS MEDIDAS "))

    MILIMETROS = PULGADAS * 25.4
    CENTIMETROS = PULGADAS * 2.54
    METROS = PULGADAS * 0.0254
    KILOMETROS= PULGADAS * 0.0000254

    alert("LAS PULGADAS EN MILIMETROS SON " + MILIMETROS)
    alert("LAS PULGADAS EN CENTIMETROS SON " + CENTIMETROS)
    alert("LAS PULGADAS EN METROS SON " + METROS)
    alert("LAS PULGADAS EN KILOMETROS SON " + KILOMETROS)
    
}





// SEXTO: ALGORITMO QUE DETERMINE SI UN NUMERO INGRESADO POR EL USUARIO ES PAR O IMPAR

function ImparPar(){

    let num = 0

    num = parseInt(prompt("INGRESE EL NUMERO DEL QUE QUIERA SABER SI ES PAR O IMPAR "))

    if (num % 2 ==0) {
        alert("EL NUMERO ES PAR")
    } else {
        alert("EL NUMERO ES IMPAR")

    }

}

// QUE DETERMINE EL MAYOR DE DOS NUMEROS INGRESADOS POR EL USUARIO

function mayorNumero(){
    let NUMERO1 = 0
    let NUMERO2 = 0

    NUMERO1 = parseInt(prompt("INGRESE EL PRIMER NUMERO"))
    NUMERO2 = parseInt(prompt("INGRESE EL SEGUNDO NUMERO"))

    if (NUMERO1 > NUMERO2) {
        alert("EL NUMERO MAYOR ES " + NUMERO1)
    } else if (NUMERO2 > NUMERO1) {
        alert("EL NUMERO MAYOR ES " + NUMERO2)
    }
    else if (NUMERO2 == NUMERO1) {
        alert("LOS 2 NUMERO SON IGUALES")
    }
        
}


// DETERMINE EL MENOR DE TRES NUMERO INGRESADOS POR EL USUARIO

function menorNumero(){

    let NUMERO1 = 0
    let NUMERO2 = 0
    let NUMERO3 = 0

    NUMERO1 = parseInt(prompt("INGRESE EL PRIMER NUMERO"))
    NUMERO2 = parseInt(prompt("INGRESE EL SEGUNDO NUMERO"))
    NUMERO3 = parseInt(prompt("INGRESE EL TERCER NUMERO"))

    if ((NUMERO1 < NUMERO2) & (NUMERO1 < NUMERO3) ) {
        alert("EL NUMERO MENOR ES " + NUMERO1)
    }

    else if ((NUMERO2 < NUMERO1) & (NUMERO2 < NUMERO3) ) {
        alert("EL NUMERO MENOR ES " + NUMERO2)
    
    }
    else if ((NUMERO3 < NUMERO1) & (NUMERO3 < NUMERO2) ) {
        if(NUMERO3< NUMERO2)
        alert("EL NUMERO MENOR ES " + NUMERO3)
     }
    else if ((NUMERO1 == NUMERO2) & (NUMERO1 == NUMERO3)){
        alert("LOS 3 NUMERO SON IGUALES")

    }
}

// EL COLEGIO ABC REQUIERE UN SISTEMA QUE CAPTURE EL NOMBRE DEL ESTUDIANTE, MATERIA Y 7 CALIFICACIONES ENTRE EL 1 Y 10 CON ESTA INFORMACION  DETERMINAR SI EL ESTUDIANTE APROBO O REPROBO TENINEDO EN CUENTA QUE SE APRUEBA CON 6.1

function pasoNo() {

    let nombre = 0
    let materia = 0
    let calif1 = 0
    let calif2 = 0
    let calif3 = 0
    let calif4 = 0
    let calif5 = 0
    let calif6 = 0
    let calif7 = 0
    let sumacalif = 0
    let totalsuma = 0
    let califinal = 0

    nombre = (prompt("INGRESE SU NOMBRE"))
    materia = (prompt("INGRESE LA MATERIA"))
    calif1 = parseInt(prompt("INGRESE LA PRIMERA CALIFICACION"))
    calif2 = parseInt(prompt("INGRESE LA SEGUNDA CALIFICACION"))
    calif3 = parseInt(prompt("INGRESE LA TERCERA CALIFICACION"))
    calif4 = parseInt(prompt("INGRESE LA CUARTA CALIFICACION"))
    calif5 = parseInt(prompt("INGRESE LA QUINTA CALIFICACION"))
    calif6 = parseInt(prompt("INGRESE LA SEXTA CALIFICACION"))
    calif7 = parseInt(prompt("INGRESE LA SECTIMA CALIFICACION"))

    sumacalif = calif1 + calif2 + calif3 + calif4 + calif5 + calif6+ calif7
    totalsuma = sumacalif
    califinal = totalsuma /7

    if (califinal > 6.1) {
        alert( nombre + " Aprobo " + materia + " Con " + califinal)
    }
    else if (califinal < 6.1){
        alert( nombre + " Reprobo " + materia + " Con " + califinal)
    }



}




// UN INDIVIDUO DESEA INVERTIR SU CAPITAL EN UN BANCO Y REQUIERE SABER CUANTO DINERO GANARA DEPSUES DE N NUMERO DE AÑOS TENIENDO EN CUENTA QUE EL BANCO PAGA UN INTERES MENSUAL  DEL 0,7%


function invercion(){
    let capital, tiempo, interesGanancia, totalGanancia

    capital = parseInt(prompt("PORFAVOR INGRESE EL CAPITAL A INVERTIR"))
    tiempo = parseInt(prompt("PORFAVOR INGRESE EL TIEMPO EN AÑOS"))

    interesGanancia = (capital * 0.084) * tiempo;
    totalGanancia = capital + interesGanancia;

    alert("Señor cachon su ganancia es de: " + interesGanancia)
    alert("Señor cachon su ganancia total es de: " + totalGanancia)


}