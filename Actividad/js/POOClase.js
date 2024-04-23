// Definir clase
class Persona{
    // Definir atributos
    constructor (Nombre,Apellido,Edad,Genero,Fecha){
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.Edad = Edad;
        this.Genero = Genero;
        this.Fecha = Fecha;

    }
    // Definir los metodos
    Saludar(){
        document.write(`Buenos dias, soy ${this.Nombre} <br>`);
        document.write(`Mi apellido es ${this.Apellido}<br>`);
        document.write(`Mi edad es ${this.Edad} <br>`);
        document.write(`Mi genero es ${this.Genero}<br>`);
        document.write(`<br>`)
    }
    mayor(){
        if(this.Edad >= 18){

            document.write(`<h4> ${this.Nombre} Es mayor de edad </h5>`)
        }
        else{
            document.write(`<h4>${this.Nombre} Es menor de edad </h5>`)
        }
    }
    calcularEdad(){


        let anitos = Math.floor(this.Edad)
        let dias = Math.floor(this.Edad * 365)
        document.write(`Usted tiene ${anitos} años y ${dias} dias` )
    }
}

// Crear el objeto
const Persona1 = new Persona ("Julio","Muñoz",60,"Masculino",);
const Persona2 = new Persona ("Laura","Vega",90,"Femenino",);
const Persona3 = new Persona ("Sarah","Lopez",15,"Femenino",)
Persona1.mayor();
Persona1.Saludar();
Persona1.calcularEdad();
Persona2.mayor();
Persona2.Saludar();
Persona2.calcularEdad();
Persona3.mayor();
Persona3.Saludar();
Persona3.calcularEdad();


