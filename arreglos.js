// definir array
var numeros = [1,2,3,4,5];


// acceder al elemento del array
document.write(`<br>Primer elemento ${numeros[0]}`);
document.write(`<br>Cuarto elemento ${numeros[4]}`);
// Modificar elementos

numeros[3] = 50;
document.write(`<br>Numero modificado: ${numeros[3]}`);



// Añadir elemento
numeros.push(6);
document.write(`<br>` + numeros);


document.write(`<h3> Eliminar elemento</h3>`);
// Eliminar elemento / siempre el ultimo
let ultimo = numeros.pop();
document.write(ultimo);
document.write(`<br>` + numeros);
document.write(`<br>`);
for(let i = 0; i<=4;i++){
    document.write(`<br> <strong>${i}.</strong> ` + numeros[i]);



}

document.write(`<br>`);



let ciudades = ["Bogotá", "Cali", "Medellin","Barranquilla","Armenia","Pereira","Ibague"];
document.write(`<br>Tercera ciudad ${ciudades[3]}`);