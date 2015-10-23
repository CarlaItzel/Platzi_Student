//1.-  Alert
	//alert("Hola mama ya se programar!! jaja");
	// Alert es una función
	// () Parametros de mi función
	// "" Cadenas de texto

//2.- Imprimir Variables
	//var nombre="Carla";
	//var apellido="Romero";
	//var edad = 22;

	//alert(nombre + " " + apellido + "\n" + edad + " años.");
	
//3.- Jerarquía de operaciones
	//alert(5+8+"2"); Suma 5 y 8 y 2 solo se concatena
	//alert("2"+5+8); Todo se vuelve string por que el string es mas fuerte
	//alert("2"+5*8); 2 es string y se concatena la multiplicacion por que la multiplicación es mas fuerte que la Suma

//4.- Peso en Marte 
	var peso;
	var pesoEnMarte; //CamelCase

	//4.2.-peso=prompt("¿Porque eres tan gordito?\n¿Cuál es tu peso en Kg?", "54");  //Automaticamente asigna el valor a la caja de texto
	alert("¿Quieres saber tu peso en marte");
	peso=prompt("¿Porque eres tan gordito?\n¿Cuál es tu peso en Kg?");
	peso = parseInt(peso);
	pesoEnMarte= (peso/9.81)* 3.711; 
	alert("Tu peso en marte es: " + pesoEnMarte + " Kg.");

	//4.5.-peso = Number(peso); //También convierte string a numero
	//4.1.-alert("Tu peso ideal: " + (peso - 10) + " Kg."); // prompt Siempre me va a inseratar una variable de tipo string
	//4.3.-alert(parseInt(peso) + 10);  //parseInt me va a convertir cualquier dato tipo texto en entero
	//4.4.-alert(peso + 10);