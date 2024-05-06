
// variables selectores
const formulario = document.getElementById('agregar-gasto');
const gastosListado = document.querySelector('#gastos ul');

// eventos
eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
    formulario.addEventListener('submit', agregarGasto);
    gastosListado.addEventListener('click', eliminarGasto);
}


class presupuesto{
    constructor(presupuesto,){
        this.presupuesto = Number(presupuesto)
        this.restante = Number(presupuesto)
        this.gastos = []
    }
    agregarGasto(gasto){

        this.gastos = [...this.gastos,gasto]
        this.calcularRestante()
    }
    calcularRestante(){
        const gastado = this.gastos.reduce((total,gasto) => total + gasto.cantidad, 0);
        this.restante = this.presupuesto - gastado;
    } 
    eliminarGasto(id){
        this.gastos = this.gastos.filter(gasto => gasto.id.toString() !==1);
        this.calcularRestante()
    }  
}
class UI{
    insertarPresupuesto(cantidad){
        document.querySelector('#total').textContent = cantidad.presupuesto
        document.querySelector('#restante').textContent = cantidad.restante
    }
    }



// ui interfaz - funcion o clase
const ui = new UI();
let Presupuesto
function preguntarPresupuesto(){
    const preguntar = prompt(`¿Cual es tu presupuesto?`);
    // isNan es para saber si es un valor numerico
    if (preguntar == '' || preguntar == null || isNaN(preguntar) || preguntar <= 0){
        window.location.reload();
    }
    Presupuesto = new presupuesto(preguntar)
    ui.insertarPresupuesto(Presupuesto)
}
function agregarGasto(){
    

}
function eliminarGasto(){

}