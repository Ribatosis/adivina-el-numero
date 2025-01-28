let numeroSecreto = Math.floor(Math.random() * (10 - 1 + 1) + 1);
let numeroUsuario;
let intentos = 0;
let maximoIntentos = 5;

alert("Tienes un máximo de " + maximoIntentos + " intentos para adivinar el número secreto")

    do{
       numeroUsuario = parseInt(prompt("Escribe un número entre el 1 y el 10: "));

            if (numeroUsuario > numeroSecreto) {
                alert("El número secreto es menor");
                    intentos++;
                    alert("Llevas: " + intentos + " intentos")
            }else if (numeroUsuario < numeroSecreto){
                alert("El número secreto es mayor ")
                    intentos++;
                    alert("Llevas: " + intentos + " intentos")
            }else if(numeroSecreto == numeroUsuario){
                alert('Acertaste, el número es: ' + numeroSecreto);
                alert("Tu número de intentos fue: " + intentos)
                break
            }
        
        
    }while(intentos < maximoIntentos){

        if(intentos == maximoIntentos){
        alert("Has agotado todos tus intentos, el número secreto es: " + numeroSecreto);

    }
      
}

