// EXERCISE 1 : Write a program that prompts a user for their data: username, age, and a list of their favorite movies. Store the information and then showcase it in the console. Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'.


let user= "irving"
let edad= 27
const movies = ['la huerfana', 'sherk', 'Narnia', 'la monja'];

    
    

    console.log("Hola " + user + " tienes " + edad + " años " + " y estas son tus peliculas favoritas");
    movies.forEach(function(movie) {
      console.log("La pelicula " + movie + " es una de tus favoritas");
    });


// EXERCISE 2 : Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.

// Encontrar el número mayor

    let numeros = [5, 30, 80, 100, 1, 69, 23, 54, 70, 56];


    let numeroMayor = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
      if (numeros[i] > numeroMayor) {
        numeroMayor = numeros[i];
      }
    }

console.log('El número más grande es:', numeroMayor);

/** EXERCISE 3 : Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.

Result example: "Time for bed after 10 seconds".
*/ 

let delayTime;
let r;
function contador(valor) {
  delayTime = setTimeout(mensaje, valor);
  r=(valor/1000);
}

function mensaje() {
    console.log('Hora de apagar la comida ' + r + 's')
}


/** EXERCISE 4 : Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.
*/ 

let palabra = "taza";
palabra = palabra.replace(/[.,\/#!$%\^&\\\*;:{}=\-_`~()\s]/g, '');
palabraInversa = palabra.split("").reverse("").join("");

// console.log(palabraInversa);

if (palabra === palabraInversa){
    console.log(palabra + " es un palindromo");}
    else{
        console.log(palabra + " no es un palindromo");
    }
    

   



/** EXERCISE 5 : Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.
*/ 

function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 1);
    }
  }
  
