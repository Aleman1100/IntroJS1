// Primero proceso, donde el usuario debe ingresar numeros distintos de 0 y estos aplicarse a distintas operaciones
function ProcesoUno() {

    //Obtenemos los numeros enteros
    var num1 = prompt("Ingresa tu primer numero entero");
    var num2 = prompt("Ingresa tu segundo numero entero, distinto al primero");

    //Numero debe ser distinto de 0 o seguira preguntando el ingreso
    while (num1 <= 0) {
    var num1 = prompt("Ingresa nuevamente tu primer numero entero, debe ser mayor a 0");
    }

    //Numero debe ser distinto de 0 y primero numero o seguira preguntando el ingreso
    while (num2 <= 0 || num2 == num1) {
    var num2 = prompt("Ingresa nuevamente tu segundo numero entero, debe ser mayor a 0 y no ser igual al primer numero");
    }

    //Cambiamos el tipo de variable de string a number
    var num1 = parseInt(num1);
    var num2 = parseInt(num2);

    //Se resuelven la operaciones solicitadas y se guarda en otra variable
    var resultadoSuma = num1 + num2;
    var resultadoResta = num1 - num2;
    var resultadoMulti = num1 * num2;
    var resultadoDiv = num1 / num2;
    var resultadoProm = num1 % num2;

    //Se despliegan los resultados con tu explicacion correspondiente
    document.write("Tus numeros fueron el " + num1 + " y el " + num2 +"<br>");
    document.write("El resultado de la suma es: " + resultadoSuma + "<br>");
    document.write("El resultado de la resta es: " + resultadoResta + "<br>");
    document.write("El resultado de la multiplicacion es: " + resultadoMulti + "<br>");
    document.write("El resultado de la division es: " + resultadoDiv + "<br>");
    document.write("El resultado del modulo es: " + resultadoProm + "<br>");
}

//Se solicita el ingreso de temperatura en grados Celsius para transformar en Fahrenheit y Kelvin
function ProcesoDos() {

    //Usuario ingresa la temperatura a transformar
    var temp1 = prompt("Ingresar temperatura en grados celsius, sin el simbolo °: ");

    //En caso de ingresar un simbolo de grado, se repite la consulta
    while (temp1.indexOf("°") > 0 )  {
        var temp1 = prompt("Ingresar temperatura en grados celsius, esta vez sin el simbolo °: ");  
    } 

    //Cambiamos el tipo de variable de string a number
    var temp1 = parseInt(temp1);

    //Formulas para realizar la conversion
    var tempKelvin = temp1 + 273.15;
    var tempFah = (temp1 * 9 / 5) + 32;

    //Datos entregados al usuario
    document.write("La temperatura inicial en grados Celsiun fue de " + temp1 + "<br>");
    document.write("La temperatura en grados Kelvin es "+ tempKelvin + "<br>");
    document.write("La temperatura en grados Fahrenheit es "+ tempFah + "<br>");
}

//Se solicita al usuario ingresar una cantidad de dias, para calcular a cuantos años, semanas y dias corresponden.
function ProcesoTres() {

    //Se lee, cambia a number y guarda el digito ingresado por el usuario
    var dias = prompt("Ingresar los dias a calcular: ");
    var dias = parseInt(dias);

    //Constante para formular los dias restante despues de calcular los años y semanas.
    const Year = 365;
    const Week = 7;

    //Formulas
    var años = Math.floor(dias / Year);
    var semanas = Math.floor((dias - (años * Year)) / Week);
    var diasrestantes = Math.floor((dias - (semanas * Week) - (años * Year)));

    //Se traspasa al usuario la informacion del calculo.
    document.write("La cantidad de dias ingresados corresponde a "+ años + " año(s), " + semanas + " semana(s) y " + diasrestantes + " dia(s).");
}

//Solicitar ingreso de 5 numero para sumarlos y obtener el promedio
function ProcesoTres() {
    //Usuario ingresa sus cinco numero para procesar
    var numero1 = prompt("Ingresa tu primer numero");
    var numero2 = prompt("Ingresa tu segundo numero");
    var numero3 = prompt("Ingresa tu tercer numero");
    var numero4 = prompt("Ingresa tu cuarto numero");
    var numero5 = prompt("Ingresa tu quinto numero");

    //Los cinco numeros se cambian de tipo string a number
    var numero1 = parseInt(numero1);
    var numero2 = parseInt(numero2);
    var numero3 = parseInt(numero3);
    var numero4 = parseInt(numero4);
    var numero5 = parseInt(numero5);

    //Se calcula la suma y el promedio
    var laSuma = numero1 + numero2 + numero3 + numero4 + numero5;
    var elProm = laSuma / 5;

    //Se entrega el resultado de cada uno
    document.write("La suma de todos tus numeros es " + laSuma + "<br>");
    document.write("Y el promedio de todos ellos es " + elProm + "<br>");
}

