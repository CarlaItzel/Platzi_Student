//1.- Funciona?
	//alert("Funciona?");

function aleatorio (minimo, maximo)  //Funcion para generall numeros aleatorios
{
	var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo);
	return numero;
}

var piedra=0;
var papel= 1;
var tijera = 2;
var opciones= ["Piedra", "Papel", "Tijera"]; 

var opcionUsuario;
//4.- var opcionMaquina= papel;
var opcionMaquina= aleatorio(0,2);

opcionUsuario= prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera:2", 0);

//2.- Elegir por default
	//alert("Elegiste " + opcionUsuario);

//3.- Bloque de condicionales por numero
	/*if(opcionUsuario == 0)
	{
		alert("Elegiste Piedra!!");
	}
	else if(opcionUsuario == 1)
	{
		alert("Elegiste Papel!!");
	}
	else if (opcionUsuario == 2) 
	{
		alert("Elegiste Tijera!!");
	}*/
 
 //4.- Asignar valores a bloque de condicionales con buena práctica
/*	if(opcionUsuario == piedra)
	{
		alert("Elegiste Piedra!!");
		if(opcionMaquina == piedra)
		{
			alert("Empate!!");
		}
		else if(opcionMaquina == papel)
		{
			alert("Perdiste!!")
		}
		else if(opcionMaquina == tijera)
		{
			alert("Ganaste!!");
		}
	}
	else if(opcionUsuario == papel)
	{
		alert("Elegiste Papel!!");
		if(opcionMaquina == piedra)
		{
			alert("Perdiste!!");
		}
		else if(opcionMaquina == papel)
		{
			alert("Empate!!")
		}
		else if(opcionMaquina == tijera)
		{
			alert("Perdiste!!");
		}
	}
	else if (opcionUsuario == tijera) 
	{
		alert("Elegiste Tijera!!");
		if(opcionMaquina == piedra)
		{
			alert("Perdiste!!");
		}
		else if(opcionMaquina == papel)
		{
			alert("Ganaste!!")
		}
		else if(opcionMaquina == tijera)
		{
			alert("Empate!!");
		}
	}
	else
	{
		alert("Tontito!!");
	}*/
	alert("Elegiste "+ opciones[opcionUsuario]);
	alert("Javascript eligió " + opciones[opcionMaquina]);
	if(opcionUsuario == piedra)
	{
		if(opcionMaquina == piedra)
		{
			alert("Empate!!");
		}
		else if(opcionMaquina == papel)
		{
			alert("Perdiste!!")
		}
		else if(opcionMaquina == tijera)
		{
			alert("Ganaste!!");
		}
	}
	else if(opcionUsuario == papel)
	{
		if(opcionMaquina == piedra)
		{
			alert("Perdiste!!");
		}
		else if(opcionMaquina == papel)
		{
			alert("Empate!!")
		}
		else if(opcionMaquina == tijera)
		{
			alert("Perdiste!!");
		}
	}
	else if (opcionUsuario == tijera) 
	{
		if(opcionMaquina == piedra)
		{
			alert("Perdiste!!");
		}
		else if(opcionMaquina == papel)
		{
			alert("Ganaste!!")
		}
		else if(opcionMaquina == tijera)
		{
			alert("Empate!!");
		}
	}
	else
	{
		alert("Tontito!!");
	}