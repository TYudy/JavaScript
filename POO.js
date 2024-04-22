class perro{
    constructor (nombre,raza,años,color){
        this.nombre = nombre;
        this.raza = raza;
        this.años = años;
        this.color = color;
        this.info = `${this.nombre} de raza ${this.raza}, tiene ${this.años} año(s) y es de color ${this.color}<br>`
    }
    verInfo(){
        document.write(`${this.info}`)
    }
    ladrar(){
        document.write("Ladrido")
    }
}



let Max = new perro("Max","Labrador Retriever",5,"Dorado");
let Luna= new perro("Luna","Pastor Alemán",3,"Negro y marron");
let Buddy = new perro("Buddy","Golden Retriever",2,"Canela");


Max.verInfo();
Luna.verInfo();
Buddy.verInfo();