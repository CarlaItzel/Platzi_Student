// En canvas la esquina es 0,0, significa que el limite es igual a x=width
// y largo seria y=height
// En canvas no hay puntos negativos
// Canvax es el area que se prepara para dibujar
// Contexto es donde dibujo

var dibujo, contexto;

function inicio()
{
// 1.- Dibujando una línea
	dibujo = document.getElementById("dibujo");
	contexto = dibujo.getContext("2d");  //Para dibujar obtengo el contexto bidimensional
	// contexto.moveTo(100, 100);  //Lapiz se mueve hasta el punto 100,100
	// contexto.lineTo(200, 100);  //Dibuja la linea
	// contexto.strokeStyle = "#3300FF";    //Estilo del trazo: Color de línea
	// contexto.stroke(); //Dibuja la lína (Se muestra)

// 2.- Dibujar un cuadrado
	// dibujo = document.getElementById("dibujo");
	// contexto = dibujo.getContext("2d");  
	// contexto.strokeStyle = "#009900"; 
	// contexto.moveTo(1, 1);
	// contexto.lineTo(299, 1);
	// contexto.lineTo(299, 299);
	// contexto.lineTo(1, 299);
	// contexto.lineTo(1 ,1);
	// contexto.stroke();

// 3.- Agregar nuevo trazo
	// dibujo = document.getElementById("dibujo");
	// contexto = dibujo.getContext("2d");
	// contexto.moveTo(1, 1)  
	// contexto.lineTo(100, 1);  
	// contexto.strokeStyle = "#3300FF";    
	// contexto.stroke(); 

	// contexto.beginPath(); //Permite hacer un trazo nuevo con otro color

// 4.- Dibujar un medio circulo	
	// contexto.strokeStyle = "#CC3300";
	// contexto.arc(150, 150, 100, 3.1416, false);     // Crea un arco... Primer parametro, donde sera el centro del circulo
	// 											// Segundo parametro: El radio del circulo
	// 											// Tercer parametro: Que tan grande sera el circulo en radianes
	// 											// Es contrario a las manecillas??...Un valor que me dice si lo trazo en sentido o sentido contrario a las manecillas del reloj
 // 	contexto.closePath(); //Cierra, termina el trzo
 // 	contexto.stroke();

 // 5.- Dibujar un circulo impreciso
 // 	dibujo = document.getElementById("dibujo");
 // 	contexto = dibujo.getContext("2d");
 // 	contexto.strokeStyle = "#CC3300";
	// contexto.arc(150, 150, 100, (3.1416 * 2), false);    
 // 	contexto.closePath(); 
 // 	contexto.stroke();

// 6.- Dibujar un circulo preciso con funciones
//  	contexto.strokeStyle = "#CC3300";
// 		contexto.arc(150, 150, 100, (Math.PI * 2), false);    
//  	contexto.closePath(); 
//  	contexto.stroke();

// 7.- Dibujar una grilla
	dibujarGrilla(contexto);
}

function dibujarGrilla(l)
{
	//  7.- Dibuja una maya vertical de 10 lineas
	// var ancho =300, alto = 300;
	// var lineas;
	// var limite;
	// for(linea = 0; linea < 30; linea++)
	// {
	// 	l.beginPath();
	// 	l.strokeStyle = "#0000CC";
	// 	l.moveTo(linea*10, 0);
	// 	l.lineTo(linea*10, 300);   
	// 	l.stroke();
	// 	l.closePath();
	// }

	var ancho = 300, alto = 300;  //Dimensiones
	var linea, punto;
	var anchoLinea = 30;   //Anchodelinea
	var limiteX = ancho/anchoLinea;
	var limiteY = alto/anchoLinea;

	for(linea = 0; linea <= limiteX; linea++)
	{
		punto = linea*anchoLinea;
		l.beginPath();
		l.strokeStyle = "#0000CC";
		l.moveTo(punto, 0);
		l.lineTo(punto, alto);   
		l.stroke();
		l.closePath();
	}
// 8.- Primer a forma de hacer las lineas horizontales
	for(linea = 0; linea <= limiteY; linea++)
	{
		punto = linea*anchoLinea;
		l.beginPath();
		l.strokeStyle = "#0000CC";
		l.moveTo(0 , punto);
		l.lineTo(ancho, punto);   
		l.stroke();
		l.closePath();
	}
}