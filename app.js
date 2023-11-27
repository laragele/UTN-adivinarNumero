const readLineSync=require(`readline-sync`);
const {numeroRandom, verificarNumero}=require(`./adivinaNumero_2`);

const ObtenerNumeroUsuario= ()=>{
    return readLineSync.questionInt("¿Que numero cree que es?");
}

const Adivinar=()=>{
    const numeroSecreto= numeroRandom();
    let numeroAdivinado=0;

    console.log("_______Empieza el juego_______");
    console.log("_______Adivine un numero entre el 1 y 100_______")

    while(numeroAdivinado!==numeroSecreto){
        numeroAdivinado=ObtenerNumeroUsuario();
        verificarNumero(numeroSecreto,numeroAdivinado)
    }
}

Adivinar();
