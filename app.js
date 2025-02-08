let numersoSecreto = 0 // Llama a la función generarNumeroSecreto y guarda
// el valor en la variable numersoSecreto
let intentos = 0// Variable que guarda la cantidad de intentos
let listaNumerosSorteados = [] // Lista que guarda los números sorteados
let numeroMaximo = 10 // Número máximo que se puede generar

function generarNumeroSecreto() { // Función que genera un número aleatorio entre 1 y 10
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1; // Genera un número aleatorio entre 1 y 10
   
    console.log(numeroGenerado); // Muestra en consola el número generado
    console.log(listaNumerosSorteados); // Muestra en consola la lista de números sorteados
   //Si ya sorteamos todos los números
   if (listaNumerosSorteados.length == numeroMaximo) {
        asignarElementoTexto('p', `Ya no hay más números para sortear`); // Llama a la función asignarElementoTexto y cambia el contenido del elemento p 
    } else {
    //Si el número generado esta incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)){ // Si el número generado ya está en la lista
        return generarNumeroSecreto(); // Llama a la función generarNumeroSecreto  
    } else {
        listaNumerosSorteados.push(numeroGenerado); // Agrega el número generado a la lista
        return numeroGenerado; // Retorna el número generado
    }
}
}


function asignarElementoTexto(elemento, texto) { // Función que recibe dos parámetros y cambia el contenido de un elemento HTML
    let elementoHTML = document.querySelector(elemento); // Selecciona el primer elemento HTML que coincida con el parámetro
    elementoHTML.innerHTML = texto; // Cambia el contenido del elemento HTML
    return;
}

function limpiarInput() { // Función que se ejecuta al hacer click en el botón
    document.getElementById("valorUsuario").value = ""; // Limpia el input
    return; // Retorna la función
}
function condicionesIniciales() {
    asignarElementoTexto('h1', 'Juego del número secreto'); // Llama a la función textos y cambia el contenido del elemento h1
    asignarElementoTexto('p', `Indica un número del 1 al ${numeroMaximo}`); // Llama a la función textos y cambia el contenido del elemento p 
    numersoSecreto = generarNumeroSecreto(); // Llama a la función generarNumeroSecreto y guarda
    intentos = 1; // Variable que guarda la cantidad de intentos 
}

function reiniciarJuego() { // Función que se ejecuta al hacer click en el botón
    condicionesIniciales(); // Llama a la función condicionesIniciales
    limpiarInput(); // Llama a la función limpiarInput
    document.querySelector("#reiniciar").setAttribute("disabled", "true"); // Deshabilita el botón reiniciar
    
}

function verificarIntento() { // Función que se ejecuta al hacer click en el botón
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value); // Obtiene el valor del input y
    // lo convierte a número

    console.log(numersoSecreto); // Muestra en consola el número secreto
    //console.log(intentos); // Muestra en consola la variable intentos
    
    if (numeroDeUsuario === numersoSecreto) {
    asignarElementoTexto('p', `¡Adivinaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}!`); // Llama a la función asignarElementoTexto y cambia el contenido del elemento p
    document.getElementById("reiniciar").removeAttribute("disabled"); // Habilita el botón reiniciar
    } else {
        
        if(numeroDeUsuario > numersoSecreto) {
            asignarElementoTexto('p', 'El número secreto es menor'); // Llama a la función asignarElementoTexto y cambia el contenido del elemento p
        } else {
            asignarElementoTexto('p', 'El número secreto es mayor'); // Llama a la función asignarElementoTexto y cambia el contenido del elemento p
        }
        intentos++; // Incrementa la variable intentos en 1
        limpiarInput(); // Llama a la función limpiarInput

    }
    
    
    //console.log(typeof(numersoSecreto)); // Muestra en consola el tipo de dato de la variable numersoSecreto
   // console.log(numeroDeUsuario); // Muestra en consola el número secreto y el número del usuario
   // console.log(typeof(numeroDeUsuario)); // Muestra en consola el tipo de dato de la variable numeroDeUsuario
    //console.log(numeroDeUsuario === numersoSecreto); // Muestra en consola si los números son iguales
    return; // Retorna la función
}

condicionesIniciales(); // Llama a la función condicionesIniciales