class figura{


    constructor(alto,ancho){
        this.alto=alto;
        this.ancho =ancho;

    }
    area(){
        let area = this.ancho*this.alto
        console.log(`El area del rectangulo es ${area}`);
    }
    perimetro(){
        let perimetro = 2*(this.alto+this.ancho)
        console.log(`El perimetro es: ${perimetro} `);
    }
    cuadrado(){
        if(this.ancho == this.alto)
            console.log(`Es un cuadrado`);
        
        else{
            console.log(`Es un rectangulo`);
        }
    }
    comparador(){
        const areaf1 =this.area();
        const areaf2 = figura2;

    
        if(areaf1> areaf2){
            console.log(`La figura 1 es más grande que la figura 2`)
        }
        else if(areaf1< areaf2){
            console.log(`La figura 2 es más grande`)
        }
        else{
            console.log(`Las figuras son del mismo tamaño`)
        }
    }

}
let figura1 = new figura(1.60, 2.50);
let figura2 = new figura(3.50, 4.50);
figura1.area();
figura1.perimetro();
figura1.cuadrado();

figura2.area();
figura2.perimetro();
figura2.cuadrado();
let f2= figura2.area()
figura1.comparador(f2);          