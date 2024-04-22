//definir variables
//Bloque:
let num1 = 10; 
let nombre = "Johanna";
let Estado = true;
let lista = [1,2,3,4,5];
let persona = {
    Nombre:"Leidy",
    Apellido:"Caceres",
    Email:"cifuentes@gmail.com"
}
console.log(num1);
console.log(nombre);
console.log(Estado);
document.write(lista);
console.log(persona);
document.write(persona.Nombre);

//definir constante
const ambiente = 109;
console.log(ambiente)
//condicionales
//ingreso de datos x tecladou

let Noestudiante;
let Nota;
Noestudiante = prompt('Por favor ingresar nombre del estudiante');
Nota = parseFloat(prompt('ingresar nota'));

if(Nota >= 3.8){

    document.write(` <br> <h2>Estudiante ${Noestudiante} su nota es ${Nota} por lo tanto usted ha aprobado la asignatura</h2>`)

}
else {
    document.write(`Estudiante ${Noestudiante} su nota es ${Nota} por lo tanto usted no aprobo la asignatura`)
}


