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
        document.write(`<br>`);
    }
    mayor(){
        if(this.Edad >= 18){

            document.write(`<h4> ${this.Nombre} Es mayor de edad </h5>`);
        }
        else{
            document.write(`<h4>${this.Nombre} Es menor de edad </h5>`);
        }
    }
    calcularEdadDias(){
        let anitos = Math.floor(this.Edad);
        let dias = Math.floor(this.Edad * 365);
        document.write(`Usted tiene ${anitos} años y ${dias} dias` );
    }
    calcularEdadMeses(){
        let anitos = Math.floor(this.Edad);
        let meses = Math.floor(this.Edad * 12);
        document.write(`Usted tiene ${anitos} años y ${meses} meses` );
    }
    calcularEdad(){
        let fechaPer = Date.parse(this.Fecha);
        let Actual = new Date()
        
    
        let años = Actual.getFullYear() - new Date(fechaPer).getFullYear();
        let meses = Actual.getMonth() - new Date(fechaPer).getMonth();
        let dias = Actual.getDate() - new Date(fechaPer).getDate();


        if (meses < 0 || (meses === 0 && dias < 0)) {
            años--;
            meses = 12 - meses; 
        }
    
        if (dias < 0) {
            let ultimoD = new Date(0).getDate();
            dias += ultimoD;
            meses--;
        }

        
    document.write(`Tiene ${años} años, ${meses}meses, ${dias} dias`);


    }
}

// Crear el objeto
const Persona1 = new Persona ("Julio","Muñoz",60,"Masculino","04/19/2005");
const Persona2 = new Persona ("Laura","Vega",90,"Femenino","04/19/2006");
const Persona3 = new Persona ("Sarah","Lopez",15,"Femenino","04/19/2006");
Persona1.mayor();
Persona1.Saludar();
Persona1.calcularEdadDias();
Persona1.calcularEdadMeses();
Persona1.calcularEdad()

Persona2.mayor();
Persona2.Saludar();
Persona2.calcularEdadDias();
Persona2.calcularEdadMeses();
Persona2.calcularEdad();


Persona3.mayor();
Persona3.Saludar();
Persona3.calcularEdadDias();
Persona3.calcularEdadMeses();
Persona3.calcularEdad()