function mostrar()
{
 /* El centro de hisopado de Ezeiza recibe una tripulación de 8 personas.
    Al ser hisopadas se ingresan sus datos en la aplicación:
    -nacionalidad ("argentina", "extranjero")
    -resultado("positivo", "negativo")
    -edad(entre 18 y 65)
    -cepa("delta", "alfa", "beta", "ninguna")
    Para poder ingresar ninguna el resultado debe ser negativo
    Luego del ingreso informar:
    a- Porcentaje de positivos
    b- Porcentaje de negativos
    c- Cuál es la cepa menos encontrada
    d- Edad del menor argentino contagiado
    e- Cantidad de personas extranjeras contagiadas con la delta */ 

    let nacionalidad;
    let resultado;
    let edad;
    let cepa;
    let positivos = 0;
    let porcentaje_positivos;
    let negativos = 0;
    let porcentaje_negativos;
    let cantidad_alfa =0;
    let cantidad_beta = 0;
    let cantidad_delta = 0;
    let cantidad_ninguna =0;
    let edad_argentino_joven=0;
    let cantidad_extranjeros_delta = 0;

    for (let i=0;i<8;i++){ //bucle con la cantidad de tripulantes 

        do { //Ingreso la nacionalidad con validacion.

            nacionalidad = prompt("Ingrese la nacionalidad argentina o extranjero UNICAMENTE");
        } while (!(nacionalidad = "argentina" || nacionalidad = "extranjero"));
        
       
        do { //Ingreso el resultado del test con validacion.

            resultado = prompt("Ingrese el resultado del test solo positivo o negativo ");
        } while (!(resultado =="positivo" || resultado == "negativo"));

        if(resultado == "positivo"){

            positivos++;
        }
        else {

            negativos++;
        }


        do { //Pido la edad y la valido,
 
            edad = parseInt(prompt("Ingrese la edad - solo entre 18 y 65 "));

        } while (edad <18 || edad > 65 || isNaN(edad));

        //Pido la cepa y valido las opciones

        do {

            cepa = prompt("Ingrese la cepa hallada SOLO delta, alfa, beta, ninguna ");
        } while (!(cepa == "delta" || cepa == "alfa" || cepa =="beta" || cepa == "ninguna"));
        
        //Cuento la cantidad por cepa
        if (cepa =="delta"){

            cantidad_delta++;
        }
        else if (cepa =="alfa"){

            cantidad_alfa++;
        }
        else if (cepa =="beta"){
            cantidad_beta++;
        }
        else{
            cantidad_ninguna++;
        }
    
    //busco al argentino mas joven

    if(nacionalidad == "argentina" && resultado == "positivo"){

        if(i = 0){//Es el primero
            edad_argentino_joven ==edad;
        }        
        else{
            if (edad<edad_argentino_joven){
                edad_argentino_joven == edad;
            }

        }

        }

    else if (nacionalidad == "extranjero" && cepa =="delta"){

        cantidad_extranjeros_delta++;

        }
    }
    
    }

porcentaje_positivos = (positivos / 8*100).toFixed(2);
alert("El porcentaje de positivos ha sido de " + porcentaje_positivos);

porcentaje_negativos = (negativos / 8 * 100).toFixed(2);

alert ("El porcentaje de negativos ha sido de "+ porcentaje_negativos);

if(cantidad_alfa<cantidad_beta && cantidad_alfa<delta &&cantidad_alfa <cantidad_ninguna){
    alert("La cepa menos encontrada ha sido: ALFA");

}
else if (cantidad_beta<cantidad_alfa && cantidad_beta<delta &&cantidad_beta <cantidad_ninguna){
    alert("La cepa menos encontrada ha sido: BETA");

}

else if (cantidad_delta<cantidad_beta && cantidad_delta<alfa &&cantidad_delta <cantidad_ninguna){
    alert("La cepa menos encontrada ha sido: DELTA");
}
else{
    alert("No se han encontrado cepas");
}

if(edad_argentino_joven==0){
    alert("No hay argentinos contagiados");
}
else{
    alert("El argentino mas joven contagiado tiene "+ edad_argentino_joven);
}

if(cantidad_extranjeros_delta ==0){
    alert("No hubieron en este vuelto extranjeros con cepa delta ");
}
    else{
        alert("La cantidad de extranjeros infectados con la cepa delta es de "+cantidad_extraneros_delta);
    }

} //FIN DEL PROGRAMA
