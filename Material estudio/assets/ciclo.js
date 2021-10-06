var numero = 6;

for(i = 1; i <=10; i++) {
    var resultado = numero * i;
    document.write(numero + " " + " x " + " " + i + " = " + resultado + "<br>");
}

var num = 0;

while (num <= 10) {
    document.write("comprar " + num + " limones " + "<br>");
    num = num + 1;
}

var nume = 1;

do{
    document.write(nume + "<br>");
    nume = nume + 2;
}while (nume <= 20)

contador = 0; // Los contadores por lo general se inician en 0
for(i=10; i<=100; i++){
if(i % 2 === 0 ){ // se divide mediante el módulo del número
contador++; // es igual que escribir: contador = contador + 1;
}
}
alert(`Hay ${contador} números pares entre 10 y 100`);

acumulador = 0; // Los contadores por lo general se inician en 0
for(i=1; i<=100; i++){
acumulador += i; // es igual es escribir: acumulador = acumulador + i
}
alert(`La suma total acumulada de los números entre el 1 y 100 es:
${acumulador} `);

var contador = 0; // inicio del contador en 0
var acumulador = 0; // inicio del acumular en 0
for(i=1; i<=50; i++){
if(i % 2 != 0 ){ // se divide mediante el módulo del número
contador++; // es igual que escribir: contador = contador + 1;
acumulador += i; //es igual a escribir: acumulador = acumular + i;
}
}
alert(`Hay ${contador} números impares entre 1 y 50 y la suma acumulada
de ellos es: ${acumulador}`);

var nombre = prompt("Ingrese su nombre: "); // declaramos una variable para que almacene el nombre del usuario.
function saludo (nombre) { // tomamos el parámetro de la variable.
document.write("¿Hola " + nombre + " cómo estás?"); // concatenamos el saludo.
}
saludo(nombre); // llamamos la función y le enviamos (parámetro) el valor de la variable nombre.

var number1 = prompt("Ingresa primer número: ");
var number2 = prompt("Ingresa segundo número: ");

function sumar (number1, number2) {
    var number1 = parseInt(number1);
    var number2 = parseInt(number2);
    var resultadoSumar = number1 + number2;
    return resultadoSumar;
}

document.write(sumar(number1, number2));


function suma () {
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    var resultadoSuma = numero1 + numero2;
    return resultadoSuma;
    }
    