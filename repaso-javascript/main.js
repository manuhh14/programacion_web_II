var nombre = "Manuel Hernadez";
var altura = 1.64;
var concatenar = nombre + " " + altura+ "<br>";

//alert("Esta es otra alerta");

document.write("Hola !!!");
document.write("<br>Mi nombre es: "+nombre);
document.write("<br>Mi altura es: "+altura);

/*Utilizando la concatenacion */


document.write("<br>ejemplo de concatenar <br>")
document.write(concatenar);
document.write(altura);

/*Imprimir datos por ID */
var datos = document.getElementById("datos");
datos.innerHTML = concatenar + "¡Hola que tal!";

/*Este es otro ejemplo de impresion de datos por ID */
var _datos = document.getElementById("dato2");
_datos.innerHTML= `
    <hr>
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3> mi latura es la siguiente: ${altura} cm</h3>
    <hr>
`;

/*ejemplo de condicional  */
if(altura >= 1.90){
    datos.innerHTML = `
    <h1>Eres alto</h1>
    `
}else{
    datos.innerHTML = `
    <h1>Eres bajo</h1>
    `
}

/* Bucles */

//For

for (var i= 2000; i<= 2024; i++){
    //bloque de intrucciones
    var _dato2 = document.getElementById("dato3");
    _dato2.innerHTML  += "<h2>Estamos en el año: </h2>"+ i;
}

/*fuciones */

const muestraMiNombre= (nombre, altura)=>{
   let miNombre= `
    <h1>Este es un ejemplo de funciones </h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mi altura es: ${altura}</h3>
    `;

    return miNombre;
}

const Imprimir =()=>{
    let datos = document.getElementById("dato4");
    datos.innerHTML = muestraMiNombre("Manuel Hernandez Herrera", 1.63);
}

Imprimir();

/*Arreglos */
let nombres = ['Pepe', 'Luz', 'Gaby', 'Paco'];

document.write('<h1>Listado de nombres</h1>');

// Bucle for para recorrer e imprimir los nombres
for (let i = 0; i < nombres.length; i++) {
    document.write('<h2>' + nombres[i] + '</h2>');
}

/* Funciones de callback en JS */

// Usando forEach para imprimir los nombres
nombres.forEach((nom) => {
    document.write('Imprimiendo nombre con una función de forEach: ' + nom + '<br/>');
});


/*objetos */

const coche= {
    modelo: 'mercedes Clase A',
    maxima: 500,
    antiguedad: 2020,
    muestraLosDatos(){
         alert(this.modelo)
         alert(this.maxima)
         alert(this.antiguedad)  // Este this se refiere al objeto coche. Aquí no hay necesidad de usar arrow function ya que no hay función anónima.
    }
};

document.write("<h1>"+ coche.modelo+"</h1>");
document.write("<h2>"+ coche.maxima + " cc</h2>");
document.write("<h3>"+ coche.antiguedad + "</h3>");
coche.muestraLosDatos();