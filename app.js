let numeroSecreto = 6;
let numeroUsuario;
let intentos = 0;


    do{
            numeroUsuario = prompt("Escribe un número entre el 1 y el 10: ");

            if (numeroUsuario > numeroSecreto) {
                alert("El número secreto es menor");
                    intentos = intentos + 1;
                    alert("Llevas: " + intentos + " intentos")
            }else if (numeroUsuario < numeroSecreto){
                alert("El número secreto es mayor ")
                    intentos = intentos + 1;
                    alert("Llevas: " + intentos + " intentos")
            }else if(numeroSecreto == numeroUsuario){
                alert('Acertaste, el número es: ' + numeroSecreto);
                alert("Tu número de intentos fue: " + intentos)
                break
            }
        
    }while(intentos < 5){

        if(intentos == 5){
        alert("Has agotado todos tus intentos");

    }
      
}

