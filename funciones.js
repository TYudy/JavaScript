
// definir funciones sin argumentos  y sin retorno de argumentos
// variables globales
var peso, altura;

// definir contador y acumulador
var contesta = 0;
var acumulador = 0;
var acumup = 0;


function ingresarDatos(){
    peso = parseFloat(prompt("Ingrese el peso por favor"));
    altura = parseFloat(prompt("Por favor ingrese la altura"));
    contesta++;
    acumulador += altura;
    acumup += peso;
}
// funcion sin argumentos, pero con retorno
function preguntar(){
    var respuesta = prompt(`¿Desea continuar (Si/No)`).toLowerCase();
    return respuesta == `si` || respuesta == `SI`
}


function calcularImc(){

    // solo funciona dentro de la funcion, al ser un variable local
    let imc = peso /(altura * altura);
    if(imc < 18.5){
        document.write(`<br>Imc es ${imc.toFixed(2)} , por lo tanto está bajo de peso`);
    }
    else if(imc>=18.5 && imc < 25){
        
        document.write(`<br> Imc es ${imc.toFixed(2)} , por lo tanto el peso es normal`);
    }
    else if(imc>=25 && imc < 30){
        
        document.write(`<br>Imc es ${imc.toFixed(2)} , por lo tanto está en sobrepeso`);
    }
    else{
        
        document.write(`<br>Imc es ${imc.toFixed(2)} , por lo tanto está obeso`);
        
    }
}

function promedioAltura(){

    if(contesta == 0){
     alert(`No se han ingresado datos de altura`)
    }
    else{
        let promedio = acumulador/contesta;
        alert(`El promedio de estatura es: ${promedio.toFixed()}`)
        let promp = acumup/contesta;
        alert(`El promedio de peso es: ${promp.toFixed()}`)
    }
}
do {
    ingresarDatos()
    calcularImc()
}while(preguntar());
promedioAltura()





