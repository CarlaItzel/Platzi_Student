var opcionUsuario;
var opcionMaquina= aleatorio(0,4);

var opciones = ["Piedra","Papel","Tijeras","Lagarto", "Spock"];
var posibilidades= ["Ganaste !!", "Perdiste!!", "Empate!!"];

function aleatorio(min, max)
{
	var num= Math.floor(Math.random() * (max- min + 1) + min);
	return num;
}

opcionUsuario= prompt("Bienvenido, que eliges?? \n\nPiedra: 0\nPapel: 1\nTijera: 2\nLagarto: 3\nSpock: 4", "?");

if(opcionUsuario<5)
{
	alert("Elegiste " + opciones[opcionUsuario]);
	alert("Javascript eligió: " + opciones[opcionMaquina]);
}
else if(opcionUsuario>=5)
{
	alert("Intentalo de nuevo más tarde");
}

if(opcionUsuario == opcionMaquina)
{
	alert(posibilidades[2]);
}

