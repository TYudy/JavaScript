
function palabra(){
    var palabra = prompt(`Por favor ingresa alguna de las siguientes palabras: casa,mesa, perro, gato`)
if (palabra == `casa`){

    document.write(`The translation of "casa" is house`)

}
else if(palabra == `mesa`){

    document.write(`The translation of "mesa" is table`)
}
else if (palabra == `perro`){
    document.write(`The translation of "perro" is dog`)
}
else if (palabra == `gato`){
    document.write(`The translation of "gato" is cat`)
}
else{

    document.write(`La palabra "${palabra}" que has ingresado no es valida`)
}
}



function cuatrimestre (){


let Actual = new Date()
let mes = Actual.getMonth()


if( mes >= 0 && mes <=3 ){
    document.write(`Se encuentra en el primer cuatrimestre <br>`)
}
else if(mes>=4 && mes<=7){
    document.write(`Se encuentra en el segundo cuatrimestre <br>`)
}
else{
    document.write(`Se encuentra en el tercer cuatrimestre <br>`)
}
document.write(mes)
}


    class persona{
        constructor(nombre,edad){
            this.nombre= nombre;
            this.edad = edad;
        }
        
    }
    class empresa{
        constructor(nombre){
            this.nombre=nombre
            this.edadt= 60;
        }

        
    }
    // let nombre = prompt(`Ingrese el nombre de la persona`)
    // let persona1 = new persona(nombre,30)
    // let persona2 = new persona(`Maria`,65)
    // let persona3 = new persona(`NIcolas`,45)

    // let empresa1 = new persona (`Zoom`)

function registrar(){
    
    

}
let personas = [];
var i = 0;
do{
    let nombre = prompt(`Ingrese el nombre de la persona`);
    let edad = parseInt(prompt(`Ingrese la edad de la persona`));
    personas.push(new persona(nombre,edad));
    i++;
}while(i <=2)

let empresa1 = new empresa(`emprenesy`);
empresa1.edadt
let m = 0
for ( m of personas){
    if(personas[i].edad >= empresa1.edadt ){
        document.write(`${personas[i].nombre} No es apto para el trabajo`)
    }
   else{
    document.write(`${personas[i].edad} es apto para el trabajo`)
   }


}




