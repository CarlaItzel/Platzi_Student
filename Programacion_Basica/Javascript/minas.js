document.write("<h1>Juego Campo Minado !!</h1>");	
// Primero van filas y despues columnas
function boom()
{
	alert("BOOM!!");
	document.write("<h2>EXPLOTASTE !!</h2>");
}
//boom(); //Manda llamar la funcion 

function winner()
{
	alert("GANASTE!!");
	document.write("<h2>ERES UN GANADOR!!</h2>");

}
//winner(); //Manda llamar la funcion 

// 1= Bomba  0= Ganaste
var campo = [[ 1, 0, 0 ],   //Posicion 0
			 [ 0, 1, 0 ],   //Posicion 1
			 [ 1, 0, 1 ]];  //Posicion 2

//1.- Podemos poner la posicion y lo que respecta manualmente
/*if (campo[1][0]==1) 
	{
		boom();
	}
else
{
	winner();
}*/

var textos = ["<h2>Sano y Salvo !!</h2>", " <h2>Bomba !!</h2>"]; //0= Te salvaste 1=Pisaste Bomba
var x, y;

alert("Estas en un campo minado!! \n" +
	   "Elige una posición entre el 0 y el 2");

x = prompt("Posicion en X?", "0");
y = prompt("Posicion en Y?", "0");

if (x < 3 && y < 3) 
	{
		var posicion= campo[x][y];
		//document.write(textos[posicion]); //Otra forma de acceder a el resultado
		document.write(textos [posicion]);
		if (posicion == 0) 
			{
				winner();
			}
		else
		{
			boom();
		}

	}
else
{
	document.write("<h2>Te saliste del Campo ...</h2>");
	boom();
}