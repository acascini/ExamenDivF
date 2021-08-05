function mostrar()
{
/* Llegan vuelos con vacunas de distintos lugares del mundo
Mientras el usuario quiera se debe registrar de cada vuelo:
-Origen (“Oriente”, “Occidente”, “Secreto”)
-Cantidad de vacunas (entre 500000 y 2500000)
-Costo del vuelo (entre 1 millón y 5 millones de pesos)
Informar:
a- El origen que envió menor cantidad de vacunas 	x 
b- El promedio por vuelo de vacunas llegadas de Occidente
c- El total sin descuentos a pagar por los gastos de los viajes
d- Si en total se recibieron mas de 10 millones de vacunas se hace un descuento de 25%,
Si se recibieron entre 5 y 10 millones el descuento es del 15% con menor cantidad no hay descuento.
Informar si hubo descuento de cuanto fue y el importe final con descuento */ 

let origen;
let cantidad_vacunas;
let costo;
let respuesta;
let menor_cantidad;
let origen_menor;
let flag = 0;
let cantidad_vuelos = 0;
let cantidad_occidente = 0;
let promedio_occidente = 0;
let descuento = 0;
let importe_total = 0;
let descuento = 0;
let total_vacunas = 0;
let final_con_descuento=0;

do{
	
	do{ //Valido la procedencia del vuelo
	origen = prompt("Ingrese procedencia del vuelo SOLO oriente, occidente o  secreto: ").toLowerCase;
	} while (!(origen =="oriente" || origen == "occidente" || origen == "secreto"));

	do { //valido la cantidad de vacunas ingresadas
		cantidad_vacunas = prompt("Ingrese la cantidad de vacunas que  llegaron: ");

	} while (isNaN(cantidad)|| cantidad <500000|| cantidad > 2500000);

	do { // Ingreso y valido el costo del vuelo

		costo = prompt("Ingrese el costo del vuelo ");
	} while (!(costo ==1000000 && costo ==5000000));

	respuesta=prompt("¿Desea cargar otro dato?: ").toLowerCase;

	if(flag ==0){
		menor_cantidad=cantidad_vacunas;
		origen_menor = origen;
		flag ==1;
	}
	else{

		if (cantidad_vacunas < menor_cantidad){
			menor_cantidad = cantidad_vacunas;
			origen_menor = origen;
		}	
	}
if (origen == "occidente"){
	cantidad_occidente++;
}
cantidad_vuelos++; //cuento la cantidad de vuelos para sacar el promedio
importe_total = importe_total + costo;

total_vacunas = total_vacunas + cantidad; //acumulo la cantidad de vacunas para saber el descuento

} while (respuesta=="si");

promedio_occidente = (cantidad_occidente / cantidad_vuelos * 100).toFixed(2);

if (total_vacunas < 5000000){
	descuento = 0;
	final_con_descuento = importe_total - descuento;

}
else if (total_vacunas <10000000){
	descuento = precio_total *0.15.toFixed(2);
	final_con_descuento = importe_total - descuento;
}
else{
	descuento = precio_total*.25.toFixed(2);
	final_con_descuento = importe_total - descuento;
}

alert("El vuelo de " + origen + " ha traido la menor cantidad de vacunas que es "+ menor_cantidad);
alert("El pomedio de vuelos de occidente sobre el total de vuelos es: "+promedio_occidente);
alert("El total a abonar por todos los viajes es de "+importe_total);
alert("El descuento ha sido de "+ descuento + " y el precio neto de descuento ha sido de "+final_con_descuento);

}



