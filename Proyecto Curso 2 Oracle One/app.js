let randomnums =[];
let numeroMax=10;
let numeroS;
let intentos=1; 
let maximo=5;

//FUNCION GENERICA PARA ESTABLECER LLAMADAS O CAMBIOS A ELEMENTOS EN EL HTML
function asignarTexto(elemento, texto){
    let title = document.querySelector(elemento);
    title.innerHTML = texto;

    let parrafo = document.querySelector(elemento);
    parrafo.innerHTML= texto;
    return;
}


// LLAMADA A LA FUNCION GENERICA
function condicionesIniciales() {
    asignarTexto("h1", "Juego del número secreto");
    asignarTexto("p", `Por favor ingresa un número desde 1 al ${numeroMax}`);
    numeroS = numeroSecreto();
    intentos=1;

}
condicionesIniciales();

//Funcion para obtener el valor del input y comprobar si este es correcto
function verificartry() {
    let numUser = parseInt (document.getElementById("numput").value);
    console.log(intentos);
    console.log( numUser === numeroS );

    if(numUser === numeroS){
            //CAMBIO EN HTML EN BASE A LLAMADA A FUNCION DENTRO DE JS
        asignarTexto("h1", "Felicidades Acertaste")
        asignarTexto("p", `El número secreto era: ${numeroS} y lo lograste en el intento número: ${intentos}`);
        document.getElementById("reiniciar").removeAttribute("disabled");

    }else{
        if(numUser>numeroS){
            asignarTexto("h1", "Lo siento, el número que ingresaste no es el número secreto")
            asignarTexto("p", `El número secreto es menor al que ingresaste. Tu número de intentos restantes es: ${maximo-intentos}`);
        }else{
            asignarTexto("p", `El número secreto es mayor al que ingresaste. Tu número de intentos restantes es: ${maximo-intentos}`);
        } 
        intentos++;
        if (intentos>5){
            asignarTexto("h1", "Lo siento. Perdiste, el número secreto era: "+numeroS);
            asignarTexto("p","Ya no te quedan más intentos. Presiona Nuevo Juego por favor");
            document.getElementById("reiniciar").removeAttribute("disabled");
        }  
    }
    document.getElementById("numput").value="";
    return;
}
//DUCNION PARA EL RESETEO DEL JUEGO
function reset() {
    //LIMPIAR LA CAJA
    document.getElementById("numput").value="";
    //ESTABLECER CONDICIONES INICIALES
    condicionesIniciales();
    //BLOQUEAR EL BOTON DE NUEVO JUEGO Y REAÑADIR ATRIBUTOS REMOVIDOS ANTERIORMENTE
    document.querySelector( '#reiniciar' ).setAttribute("disabled", true);
    //RECUERDA USAR ("#"objeto) PARA HACER LLAMADAS EN BASE AL ID DEL OBJETO

}

function numeroSecreto() {
    let numgen = Math.floor(Math.random() * numeroMax) + 1;
    console.log(randomnums); // Accede a la variable global, no la declares localmente

    if (randomnums.length == numeroMax) {
        asignarTexto("p", "Ya sorteaste todos los numeros posibles");
        randomnums =[];
        location.reload();
    }

    if (randomnums.includes(numgen)) {
        return numeroSecreto();
    } else {
        randomnums.push(numgen);
        return numgen;
    }
}



// //DECLARACION Y LLAMADA DE UNA FUNCION DENTRO DE OTRA FUNCION
// // function declararN() {
// //     let nombre = prompt("Por favopr ingresa tu nombre");
// //     return nombre;
// // }

// // function hola() {
// //     let nombre = declararN();
// //     let mensaje = "hola mundo "+nombre;
// //     console.log(mensaje);
// // }


// //EJECICIO
// // function multi(){
// //     let num1=parseInt(prompt(("por favor ingresa el primer número")));
// //     let num2=parseInt(prompt(("por favor ingresa el segundo número")));
// //     let num3=parseInt(prompt(("por favor ingresa el tercero número")));
// //     let promedio = parseFloat((num1+num2+num3)/2);
// //     alert(`el promedio de los numeros es: ${promedio}`)
// // }


// // //FUNCIONES DENTRO DE FUNCION (ANIDADAS)
// // function numeroSecreto() {
// //     function numeroMaximo() {
// //         return Math.floor(Math.random() * 100) + 1;
// //     }

// //     function numeroMinimo() {
// //         return Math.floor(Math.random() * 10) + 1;
// //     }

// //     let numMax = numeroMaximo();
// //     let numMin = numeroMinimo();

// //     return Math.floor(Math.random() * numMax) + numMin;
// // }

// // let resultado = numeroSecreto();

// // console.log(resultado);


// //EJERCICIOS DE LISTAS
// let lenguajes=[
//     "Python",
//     "JavaScript",
//     "Go",
//     "Kotlin",
//     "PHP",
//     "C++",
//     "C#",
// ];

// lenguajes.push("Ruby");
// lenguajes.push("GoLang");
// si=mostrarenconsola();
// no =reversa();
// function mostrarenconsola(){
//   let si = ("Lista original:", lenguajes);
//   return si;
// }
// console.log(si);
// console.log(no);
// function reversa() {
//     let no=("Lista inversa:", lenguajes.slice().reverse());    
//     return no;
// }

// let Lista1 = [1,2,3,4,5];

// let Lista2 = [6,7,8,9,10];

// function sumarLisats() {
//     if(Lista1.length!==Lista2.length){
//         alert("Las listas no son iguales");
//     }
//     listaSuma=[];
//     for(j=0;j<Lista1.length;j++){
//         let suma=Lista1[j]+Lista2[j];
//         listaSuma.push(suma);
//     }
//     return listaSuma;
// }

// let resultado=sumarLisats();
// alert("La primera lista era: "+ Lista1);
// alert("La segunda lista era: "+ Lista2);
// alert("El resultado de la suma es: "+resultado);