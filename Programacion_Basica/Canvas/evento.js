var t, b;
var dibujo, contexto;

function inicio()
{
	t = document.getElementById("usuario");
	b = document.getElementById("dibujalo");
	dibujo = document.getElementById("event");
	contexto = dibujo.getContext("2d");

// 1.- Evento como funcion
	b.addEventListener("click", dibujarGrilla);
}

function dibujarGrilla()
{
	var lapiz = contexto;
	var numLineas = Number(t.value);
	var ancho = 300, alto = 300;
	var linea, punto;
	var anchoLinea= ancho/numLineas;
	var limiteX = ancho / anchoLinea;
	var limiteY = alto / anchoLinea;

	lapiz.strokeStyle = "#0000CC";

	for(linea= 0; linea <= limiteX; linea++)
	{
		punto= linea*anchoLinea;
		lapiz.beginPath();
		lapiz.moveTo(punto, 0);
		lapiz.lineTo(punto, alto);
		lapiz.stroke();
		lapiz.closePath();
	}

	for(linea= 0; linea<= limiteY; linea++)
	{
		punto = linea*anchoLinea;
		lapiz.beginPath();
		lapiz.moveTo(0, punto);
		lapiz.lineTo(ancho, punto);
		lapiz.stroke();
		lapiz.closePath();
	}
}