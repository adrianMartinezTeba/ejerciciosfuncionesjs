
// // 1.Funciones
// // Crea una función resta que espere dos parámetros a y b y que devuelva la resta de los mismos.
// let a
// let b
// function resta(a, b) {
//     return a - b
// }
// console.log(resta(5, 6))
// // Crea un programa el cual te pregunte por una nota del 0 al 10 y dependiendo del número, te devuelva la siguiente clasificación.
// // Nota: Debes de usar el Switch.
// // 0 - 4: Insuficiente.
// // 5 - 6: Suficiente.
// // 7 - 8: Notable.
// // 9 - 10: Sobresaliente.

// // function notahype() {
// //     let nota = prompt("Que nota crees que vas a sacar entre 0 y 10")
// //     nota = +nota
// //     console.log(typeof nota)

// //     switch (nota) {
// //         case 0:
// //         case 1:
// //         case 2:
// //         case 3:
// //         case 4:
// //             resultado = "Insuficiente"
// //             break;
// //         case 5:
// //         case 6:
// //             resultado = "Suficiente"
// //             break;
// //         case 7:
// //         case 8:
// //             resultado = "Notable"
// //             break;
// //         case 9:
// //         case 10:
// //             resultado = "Sobresaliente"
// //             break;
// //         default:
// //             break;
// //     }
// //     return resultado
// // }
// // console.log(notahype())

// // Crea la función duplicaNumero debe recibir un tipo number y devolver el doble del valor recibido. Si la función no recibe un dato tipo number debe devolver el string ‘Debo ser ejecutada con un número’
// function duplicaNumero(num) {
//     if (typeof num === "number") {
//         return num * 2
//     } else {
//         return "Debo ser ejecutada con un numero"
//     }

// }
// console.log(duplicaNumero(5))

// // Crea la función caracterInicial  debe recibir un tipo string y devolver un string con el primer carácter.
// // Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
// // Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'
// // function caracterInicial(string) {
// //     if (typeof string != "string") {
// //         return "Debo ser ejecutada con un string"
// //     } else if (string == "") {
// //         return "Debo ser ejecutada con un string no vacío"
// //     } else {
// //         return string[0]
// //     }

// // }
// // console.log(caracterInicial(""))
// // Crea la función ultimoCaracter debe recibir un tipo string y devolver un string con el último carácter.
// // Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
// // Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'
// // function ultimoCaracter(string){
// //     if (typeof string != "string") {
// //         return "Debo ser ejecutada con un string"
// //     }else if(string == ""){
// //         return "Debo ser ejecutada con un string no vacío"
// //     }else{
// //         return string.slice(-1)
// //     }
// // }
// // console.log(ultimoCaracter(9))
// // Crea la función cuentaCaracteres debe recibir un tipo string y devolver un number con el número de carácteres
// // Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'


// // function cuentaCaracteres(caracter) {
// //     if (typeof caracter == "string") {
// //         return +caracter.length
// //     }else{
// //         return "Debo ser ejecutada con un string"
// //     }
// // }
// // console.log(cuentaCaracteres("hola"))
// // Un palíndromo es una palabra que se escribe igual del derecho que del revés por ejemplo orejero, rallar o somos.  Crea la función esPalindromo que recibirá una cadena de texto y deberá devolver si es un palíndromo o no.
// // Si la función no recibe una cadena de texto o está vacía 'no es un formato correcto'
// function esPalindromo (string) {
//     if (typeof string !== "string" || string === "") {
//         return "No es un formato correcto";
//       }
//       const strReversed = string.split("").reverse().join("");

//       return strReversed === string ? "es palindromo" : "no es palindromo";

// }
// console.log(esPalindromo("ana"))

// console.log(esPalindromo(""))
// // Crea la función getPrecioMostrar para que devuelva una cadena de texto con formato precio con dos decimales. Para 2 debería devolver 2.00 €.
// // Si la función no recibe un número debería devolver devolver 'no es un formato correcto'
// function getPrecioMostrar(precio) {
//     if (typeof precio !== "number" || "") {
//       return "no es un formato correcto";
//     }else{
//     return precio.toFixed(2) + " €";
//     }
// }
// console.log(getPrecioMostrar())
// // Crea la función division que acepte como argumento dos números y devuelva el resultado de su división
// function division(a,b) {
//     return a/b
// }
// console.log(division(10,2))
// Crea una función que dada una array de números, devuelve una nueva array que tenga solo los números que son 5 o más. Ejemplo entrada [3, 6, 8, 2] salida [6, 8]
// function numerosCincoOMas(arr) {
//     const nuevaArr = [];

//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] >= 5) {
//         nuevaArr.push(arr[i]);
//       }
//     }

//     return nuevaArr;
//   }
//   console.log(numerosCincoOMas([2,5,76]))
// Crea una aplicación que nos pida un número por prompt y con un método se lo pasamos por parámetro para que nos indique si es o no un número primo, debe devolver true si es primo sino false.
// Un número primo es aquel que solo puede dividirse entre 1 y sí mismo. Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin embargo, 17 si es primo.
// function esPrimo(numero) {
//     if (numero <= 1) {
//         return false;
//     }
//     for (let i = 2; i <= numero / 2; i++) {
//         if (numero % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// const numero = prompt("Ingrese un número:");
// const esPrimoResultado = esPrimo(numero);

// if (esPrimoResultado) {
//     console.log(`${numero} es un número primo`);
// } else {
//     console.log(`${numero} no es un número primo`);
// }
// Extras
// Crear la función obtenerImpares que acepta como argumento un array de números y devuelva un array con los elementos impares
// Crear la función sumarArray que acepte como argumento un array numérico y devuelva la suma de los números en el array Array: [1, 2, 3] resultado: 6
// Crear la función multiplicarArray que acepte como argumento un array numérico y devuelva la multiplicación de los números en el array Array: [2, 3, 4] resultado: 24
// Crea una función checkPassword con una variable tipo String que contenga una contraseña cualquiera. Después se te pedirá que introduzcas la contraseña (usando prompt), con 3 intentos. Cuando aciertes ya no pedirá más la contraseña y mostrará un mensaje diciendo “Enhorabuena”(ej.un alert). Piensa bien en la condición de salida (3 intentos y si acierta sale, aunque le queden intentos).