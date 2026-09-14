// # Ejercicio 2

// Construye una calculadora que pueda resolver las 4 operaciones básicas (suma, resta, multiplicación y división). La calculadora debe limitarse a operar con un operador y dos operandos, los cuales debe pedir a la persona usuaria.

// <aside>
// ✨ **BONUS**

// Modifica el código para que la calculadora pueda operar con cualquier cantidad de operandos.
const prompt = require('readline-sync').question;
// </aside>
let operacion;
let c_de_numeros;

// Le doy la bienvenida al usuario
console.log("Bienvenido a la calculadora genioooooooo");
console.log("ingrese que operacion desea realizar")
console.log("1. Suma");
console.log("2. Resta");
console.log("3. Multiplicacion");
console.log("4. Division");

operacion = parseFloat(prompt("Ingrese el numero de la operación que desea realizar"));

if (operacion == 1) {
    c_de_numeros = parseFloat(prompt("Ingrese la cantidad de numeros que desea sumar:"));
    // Lógica para la suma
    let suma = 0;
    for (let i = 0; i < c_de_numeros; i++) {
        let numero = parseFloat(prompt("Ingrese el numero" + (i + 1) + ":"));
        suma += numero;
    }
    console.log("La suma es: " + suma);
}
else if (operacion == 2) {
    c_de_numeros = parseFloat(prompt("Ingrese la cantidad de numeros que desea restar:"));
    // Lógica para la resta
    let resta = 0;
    for (let i = 0; i < c_de_numeros; i++) {
        let numero = parseFloat(prompt("Ingrese el numero" + (i + 1) + ":"));
        resta -= numero;
    }
    console.log("La resta es: " + resta);
}
else if(operacion == 3) {
    c_de_numeros = parseFloat(prompt("Ingrese la cantidad de numeros que desea multiplicar:"));
    // Lógica para la multiplicación
    let multiplicacion = 1;
    for (let i = 0; i < c_de_numeros; i++) {
        let numero = parseFloat(prompt("Ingrese el numero" + (i + 1) + ":"));
        multiplicacion *= numero;
    }
    console.log("La multiplicación es: " + multiplicacion);
}
else if(operacion == 4) {
    c_de_numeros = parseFloat(prompt("Ingrese la cantidad de numeros que desea dividir:"));
    // Lógica para la división
    let division = 1;
    for (let i = 0; i < c_de_numeros; i++) {
        let numero = parseFloat(prompt("Ingrese el numero" + (i + 1) + ":"));
        division /= numero;
    }
    console.log("La división es: " + division);
}