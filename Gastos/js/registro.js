
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
    imprimirAlerta(mensaje, tipo){
        // crear el div
        const divmensaje = document.createElement(`div`)
        divmensaje.classList.add(`text-center`,`alert`)
        // tipo error agrega una clase
        if(tipo == `error`){
            divmensaje.classList.add(`alert-danger`)
        }else{
            divmensaje.classList.add(`alert-sucess`)
        }
        // Mensaje error
        divmensaje.textContent = mensaje;
        document.querySelector(`.gasto`).insertBefore(divmensaje, formulario)

        // quitar el alert despues de 3 segundos
        setTimeout(()=>{
            document.querySelector(`.listado .alert`).remove()


        }, 3000)


    }
    // insertar los gastos a la lista
    agregarGastolistado(gastos){
        this.limpiarHTML();
        // iterar sobre los gastos
            gastos.forEach(gasto=>{
                const{nombre, cantidad, id} = gasto;
                // crear un li
                const nuevoGasto= document.createElement(`li`);
                nuevoGasto.className = `list-group-item d-flex jusify-content-between align-items-center`
                nuevoGasto.dataset.id = id
        
                // insertar el gasto 
                nuevoGasto.innerHTML = `
                    ${nombre}
                    <span class="badge badge-primary badge-pill">$ ${cantidad}</span>
        
                `
                // boton borrar gasto
                const btnborrar = document.createElement(`button`)
                btnborrar.classList.add(`btn`, `btn-danger`, `borrar-gasto`)
                nuevoGasto.appendChild(btnborrar)
        
                // insertar al html
                gastosListado.appendChild(nuevoGasto)
        
        
        
            })
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
// insertar gastos a la lista
function agregarGasto(){
   

}
function eliminarGasto(){

}