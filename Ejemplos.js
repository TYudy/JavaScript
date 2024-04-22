




let num1, num2;

// Se debe  colocar parseFloat para la insercion de numeros o sino los concatenará como cadenas
num1=parseFloat(prompt("Ingrese el primer numero"));
num2=parseFloat(prompt("Ingrese el primer numero"));


let suma = num1 + num2;
let resta = num1 - num2;
let producto = num1 * num2;
let division = num1 / num2;



if (num1 >= num2){

    document.write(`La suma de ambos numeros es: ${suma}<br>`)
    document.write(`La diferencia de ambos numeros es de: ${resta}`)
}
else{
    document.write(`El producto de ambos numeros es: ${producto}`)
    document.write(`<br>La division es: ${division}`)
}

