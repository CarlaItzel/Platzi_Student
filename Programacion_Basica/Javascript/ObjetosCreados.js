// Los objetos se crean con la primera letra mayúscula
document.write("<h1>Objetos Creados</h1>");

// Existen dos tipos de variables
// 1.- Asignación por valor
// 2.- Asignación por referencia

// 2.- Clonacion de datos de un objeto
// var Pokemon =    //Dentro del bloque puedo colocar variables y funciones
// {                //Cuando declaro un objeto es el unico caso donde un bloque termina en ;
// 	nombre: "Pikachu",   //Atributos
// 	tipo: "Electrico",
// 	vida: 100,
// 	ataque: 55
// };

// var pikachu = Pokemon; //No se modifica por que pikachu si tiene esos valores

// // Modificamos los elementos de una función establecida
// var bulbasaur = Pokemon;
// bulbasaur.nombre = "Bulbasaur";
// bulbasaur.tipo = "Tierra";
// bulbasaur.vida = 90;
// bulbasaur.ataque = 50;

// document.write(bulbasaur.nombre);  //Ocurre esto porque estamos modificando un solo tipo de objeto
// document.write(pikachu.nombre);  //Pikachu y bulbasour son un apuntador al mismo tipo de objeto, el objeto pokemon
                                    //Era referencia a la estructura no al valor especifico


// 1.- Verificas que es un objeto
//document.write(bulbasaur); //Así me va a decir solo que existe un objeto, pero no dara ningun Atributos

// 3.- Primera Forma de retornar una estructura
// var estructuraPokemon =    
// {                
// 	nombre: "Pikachu",   
// 	tipo: "Electrico",
// 	vida: 100,
// 	ataque: 55
// };

// function Pokemon()
// {
// 	return estructuraPokemon;
// }


// 4.- Segunda forma de retornar una estructura
// function Pokemon()
// {
// 	var estructuraPokemon =    
// 	{                
// 		nombre: "Pikachu",   
// 		tipo: "Electrico",
// 		vida: 100,
// 		ataque: 55
// 	};
// 	return estructuraPokemon;  //Cuando una funcion retorna algo toda la funcion tiene u codigo interno y el retorno se le asigna a una variable
// }

// var pikachu = Pokemon();  //Así mandas llamar los datos de la estructura pokemon
// var bulbasaur = Pokemon();
// bulbasaur.nombre = "Bulbasaur";
// bulbasaur.tipo = "Tierra";
// bulbasaur.vida = 90;
// bulbasaur.ataque = 50;

// document.write(bulbasaur.nombre);  //Ocurre esto porque estamos modificando un solo tipo de objeto
// document.write(pikachu.nombre);

// 5.- Primera forma de crear objetos
// function Pokemon(nombrePokemon, vidaPoke, ataPoke) //Construccion del objeto
// {
// 	var estructuraPokemon =    
// 	{                
// 		nombre: nombrePokemon,   //Le asigno a las variables, variable
// 		vida: vidaPoke,
// 		ataque: ataPoke          //Variables de parametro se asignan a las variables de estructura
// 	};
// 	return estructuraPokemon;  
// }

// var pikachu = Pokemon("Pikachu", 100, 55);   //Creo los objetos y despues le pasaremos los atributos
// var bulbasaur = Pokemon("Bulbasaur", 90, 50);

// document.write(bulbasaur.nombre); 
// document.write(bulbasaur.vida); 
// document.write(pikachu.nombre);
// document.write(pikachu.vida); 

// 6.- Forma correcta de crear un objeto
// function Pokemon(n , v, a)  //Nombre, vida y ataque
// {
// 	this.grito = "Pika Pika !!";
// 	this.nombre = n;
// 	this.vida = v;
// 	this.ataque = a;              //Atributo: variable dentro de un objeto
// 	this.gritar = function()     //Objeto que tiene un metodo
// 	{
// 		alert(this.grito);
// 	}
// }
// var pikachu = new Pokemon("Pikachu", 100, 55);
// pikachu.vida = pikachu.vida -10;
// pikachu.gritar();           //Metodo: Función metida dentro de un objeto

// 8.- Ejemplo 2 de Objeto
// function Pokemon(n , v, a)  //Nombre, vida y ataque
// {
// 	this.grito = "Pika Pika !!";
// 	this.nombre = n;
// 	this.vida = v;
// 	this.ataque = a;              //Atributo: variable dentro de un objeto
// 	this.gritar = function()     //Objeto que tiene un metodo
// 	{
// 		alert(this.grito);
// 	}
// }
// var rattata = new Pokemon("Rattata", 40, 2);
// rattata.vida = rattata.vida -13;
// rattata.grito= "Rattata !!";
// rattata.gritar();   

// 7.- Secuencial HTML - Cambiar dato en consola web
//nombrePokemon. innerText = rattata.nombre;  //Aqui no va a funcionar. pero si lo haces en la consola web funciona
                                            // -No funciona aqui por que acuerdate que funciona secuencial, entonces en el html llega hasta el documento java, lo abre lo corre y hasta despues corre lo 
                                            //abajo de html que es hasta ahi donde nos funcionaria
                                        	//Para solucionar esto los profesionales utilizan jquery, que tiene un evento y el documento se llama reading

function Pokemon(n , v, a)  //Nombre, vida y ataque
{
	this.grito = "Pika Pika !!";
	this.nombre = n;
	this.vida = v;
	this.ataque = a;              //Atributo: variable dentro de un objeto
	this.gritar = function()     //Objeto que tiene un metodo
	{                            //Otra forma de asignar funciones
		alert(this.grito);
	}
}
function inicio()
{
	alert("Esto es despues del inicio");
	var rattata = new Pokemon("Rattata", 40, 2);  //new convierte ese elemento en una clase, una clase es una declaración de objeto
	//nombrePokemon.innerText = rattata.nombre; //No funciona en firefox
}
alert("Esto es antes del inicio");
  