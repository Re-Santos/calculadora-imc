function calcularImc(){
    const inserirAltura= document.getElementById (`altura`).value/100
    const inserirPeso= document.getElementById (`peso`).value
    

   const area=""

    const imc = peso/(altura*altura)
    if (imc<18.5){
        area= `você está magro`
    }
    else if(imc<24.9){
        area= `Você está normal`
    }
    else if(imc<29.9){
        area=`Você está com sobrepeso`
    }
    else if(imc<39.9){
        area=`Você está com obesidade`
    }
    else if(imc>39.9){
        area=`Você está com obesidade mórbida`
    }

    document.getElementById("area-de-texto").innerText= area
    console.log (inserirAltura)
    console.log (inserirPeso)
}

