//DOCUMENT OBJECT MODEL:
//TODO EL MODELO DE COMO ESTA ORGANIZADADA LA INFORMACION PARA UN NAVEGADOR DENTRO DE JAVASCRIPT
// Objeto puede contener:
//  1.- Variables
//  2.- Funciones
// Principales objetos de javascript:
// 1.- navigator: Opciones especiales del navegador
// 2.- window: Controla la ventana
// 3..-document: Controla el codigo html

document.write("Objetos Nativosones");
//1.- Ejemplo Objeto - Función Document.Write
//document.write("Hola Mama!!"); //hay un objeto llamado document. Es un objeto que tienen todos los javascript
                               //Es todo lo que trae detras el codigo html y write es una función del objeto

//2.- Objeto - Funcion - Variable
// var pi = 3.141592654;
// document.write(pi);

//3.- Función floor
// var pi = 3.141592654;   //Objetos empiezan con mayúsculas
// pi = Math.floor(pi);    //Objeto Math - Funión floor que publica el minimo numero, osea solo pasa los enteros
// document.write(pi);

//4.- Objeto Math - Función ceil
// var pi = 3.141592654; 
// pi = Math.ceil(pi);    //Objeto Math - Funión ceil, redondea al sigiente entero
// document.write(pi);

//5.- Objeto Math -Función max
// var maxima;    //Funcion maxima dee tener directamente sobre la funcion los elementos, no sirve si se lo quere os pasar con un array
// maxima = Math.max(5, 23, 4, 5, 12, 24, 23, 100);
// document.write(maxima);

//6.- Locación por GPS
function mostrar(pos)
{
	document.write(pos.coords.latitude + ", " + pos.coords.longitude);	
}
navigator.geolocation.getCurrentPosition(mostrar);
//El objeto navigaor con la funcion geolocation y subfuncion getCurrentPosition te pueden mostrar tu ubicacion
// te muestra la latitud y longitud de donde te encuentras, lo pones en googlemaps y listo