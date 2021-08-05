
function mostrar()
{
	
let nombre;
let edad;
let vacuna;
let respuesta;
let sexo;
let cantidad_china = 0;
let cantidad_menores = 0;
let cantidad_mayores_americana = 0;
let acumulad_edad_china = 0;
let promedio_edad_china=0;
let porcentaje_menor_edad=0;
let cantidad_rusa =0;
let flag = 0; //para determinar el mas joven
let_edad_joven = 0;

do {
nombre = prompt("Ingrese nombre y apellido: "); //pido el nombre

//Valido que cumpla con la cantidad de digitos solicitados

while (nombre.length<2 || nombre.length>10){

	nombre = prompt("Nombre erroneo. Vuelva a ingresar nombre y apellido");

}

//pido el sexo de la persona
do{

	sexo = prompt("Ingrese sexo: ").toLowerCase;


} while (!(sexo == "f" || sexo == "m"));

do {

	edad = parseInt("Ingrese la edad: "); //pido la edad
} while (edad<12 || isNaN(edad));

//cargo el primer paciente con la edad en la variable menore de edad
if (flag = 0){

	edad_joven==edad;
	flag = 1;
}

// Sino, quiere decir que ya hay dato en edad_joven y controlo la nueva edad para ver si es el mas joven
else if (edad < edad_joven){

	edad == edad_joven;
}


if (edad <17){

	vacuna == "amercana";
	cantidad_menores++; //cuento la cantidad de menores con la vacuna americana

}

else 

do {

	vacuna = prompt("Ingrese la vacuna a aplicar: "); //pido la vacuna a aplicar
} while(!(vacuna =="rusa" || vacuna == "china" || vacuna == "americana"));

//Cuento las personas con las vacunas chinas

if (vacuna == "china"){
	cantidad_china++;
	acumula_edad_china++;
}

//Cuento las personas mayores con la americana

else if (vacuna =="americana"){
	cantidad_mayores_americana++;
}

//Cuento las personas con la vacuna rusa

else if (vacuna == "rusa"){

		cantidad_rusa++;
}

respuesta = prompt ("¿Ingresa datos de otra persona? Si No ");
} while (respuesta == "Si");


promedio_edad_china = (acumula_edad_china / cantidad_china).toFixed(0);
alert("El promedio de edad con la vacuna china es "+promedio_edad_china);

porcentaje_menor_edad= cantidad_menores /(cantidad_menores+cantidad_mayores_americana)*100;

alert("El porcentual de menores de edad sobre el total de personas con vacuna americana es de " + porcentaje_menor_edad);

//determino la vacuna mas usada;

if (cantidad_rusa > cantidad_china && cantidad_rusa > (cantidad_mayores_americana+cantidad_menores)){
	alert("La vacuna mas usada es rusa");}

else if (cantidad_china > cantidad_rusa && cantidad_china > (cantidad_mayores_americana+cantidad_menores)){
	alert ("La vacuna mas usada es china");}

else {
	alert("La vacuna mas usada es americana");

}

alert("La edad del mas joven es "+edad_joven);


}


