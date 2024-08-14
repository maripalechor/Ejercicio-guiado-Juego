let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
   /* console.log(typeof(numeroUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroUsuario);*/
    //console.log(numeroUsuario === numeroSecreto); se muestra el numero que asigna el sistema para adivinar 
    /*se utiliza el triple igual porque los datos ya estan establecidos*/ 
    if (numeroUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else{
        //el usuario no acerto 
        if (numeroUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor');
        }else{
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }

        intentos++;
        //console.log(intentos);
        LimpiarCaja();
    }
    return;
}

function LimpiarCaja(){
    //este es el id del input
      document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(){
    numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // si ya sorteamos todos lo numeros 
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles')
    }else{
         // si el numero generado esta incluido en la lista hacemos una operacion de lo contrario hacemos otra
    if(listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }

    }
   
}

function condicionesIniciales (){
    asignarTextoElemento('h1', 'Juego del numero secreto!');
    asignarTextoElemento('p', `Indica el numero del 1 al ${numeroMaximo}`);
    numeroSecreto =generarNumeroSecreto();
    intentos =  1;
}

function reiniciarJuego(){
    //limpiar la caja 
    LimpiarCaja();
    //indicar mensaje de intervalo de numeros 
    //generar el numero aleatorio
        //Inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el botonde nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();