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
    


let personas = [];
var i = 0;
do{
    let nombre = prompt(`Ingrese el nombre de la persona`);
    let edad = parseInt(prompt(`Ingrese la edad de la persona`));
    personas.push(new persona(nombre,edad));
    i++;
}while(i <=2)
let empresa1 = new empresa(`emprenesy`);


function clasificar(){
    for ( let m in personas){
        if(personas[m].edad >= empresa1.edadt ){
            document.write(`${personas[m].nombre} no es apto para el trabajo <br>`)
        }
       else{
        document.write(`${personas[m].nombre} es apto para el trabajo<br>`)
       }
    }
}

clasificar()




