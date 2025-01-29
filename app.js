
let numeroUsuario;
let intentos = 0;
let maximoIntentos = 5;
let numeroSecreto = numeroAleatorio();

function numeroAleatorio (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

    let modoJuego = prompt("Ingrese en que modalidad desea jugar. Fácil, medio o dificil.")


    switch(modoJuego){

        case "facil" || "Facil" || "fácil" || "Fácil":

            alert("Tienes un máximo de " + maximoIntentos + " intentos para adivinar el número secreto");
            numeroSecreto = numeroAleatorio(1, 10);

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

            break;
    
        case "medio" || "Medio":

            alert("Tienes un máximo de " + maximoIntentos + " intentos para adivinar el número secreto");
            numeroSecreto = numeroAleatorio(1, 25);

            do{
            numeroUsuario = parseInt(prompt("Escribe un número entre el 1 y el 25: "));
    
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

            break;


        case "dificil" || "Dificil" || "difícil" || "Difícil":

            alert("Tienes un máximo de " + maximoIntentos + " intentos para adivinar el número secreto");
            numeroSecreto = numeroAleatorio(1, 50);

            do{
                numeroUsuario = parseInt(prompt("Escribe un número entre el 1 y el 50: "));
        
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

            break;
    
        default:
            alert("Opción inválida. Por favor, ingresa 'fácil', 'medio' o 'difícil'.");
    }



    

