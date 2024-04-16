let altura, peso, imc, m ;

altura = parseFloat(prompt("Por favor ingrese su altura"));
peso = (prompt("Por favor ingrese su peso"));

m = altura * altura;
imc = peso / m;

if (imc < 18.5){

    alert(`Bajo peso`)
}
else if(imc>=18.5 && imc < 25){
    alert(`Peso Normal`)

}
else if(25 <= imc && imc < 30){

    alert(`Sobrepeso`)

}
else{
    alert(`Obeso`)
}
