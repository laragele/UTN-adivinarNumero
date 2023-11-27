const numeroRandom=()=>{
    return Math.round(Math.random()*100)+1;

}

const verificarNumero=(numeroPc, numeroAdivinado)=>{
    if (numeroPc ===numeroAdivinado){
        console.log(`¡Felicitaciones! has adivinado el numero que era el numero: ${numeroPc}`);
    }else if(numeroAdivinado>numeroPc){
        console.log(`Estas cerca, pero el numero secreto es MENOR a el adivinado`);

    }else if (numeroAdivinado<numeroPc){
        console.log(`Estas cerca, pero el numero secreto es MAYOR a el adivinado`);

    }
}

module.exports={numeroRandom,verificarNumero};