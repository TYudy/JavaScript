
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
    limpiarHTML(){
            while(gastosListado.firstChild){
                gastosListado.removeChild(gastosListado.firstChild)
            }
        }
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
            document.querySelector(`.gasto .alert`).remove()


        }, 3000)


    }
    // // insertar los gastos a la lista


    agregarGastolistado(gastos){
        // limpiar html
        this.limpiarHTML();
        // iterar sobre los gastos
            gastos.forEach(gasto=>{
                const{nombre, cantidad, id} = gasto;
                // crear un li
                const nuevoGasto= document.createElement(`li`);
                nuevoGasto.className = `list-group-item d-flex justify-content-between align-items-center`
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
        actualizarRestante(restante){
            document.querySelector('span#restante').textContent = restante
        }
        comprobarPresupuesto(presupuestobj){
            // cambia el color del presupuesto restante
            const{presupuesto, restante}=presupuestobj
            const restanteDiv = document.querySelector('.restante')
            // comprobar el 25%
            if((presupuesto /4)>restante){
                restanteDiv.classList.remove('alert-sucess','alert-warning')
                restanteDiv.classList.add('alert-danger')
            }else if ((presupuesto / 2) > restante){
                restanteDiv.classList.remove('alert-sucess')
                restanteDiv.classList.add('alert-warning')
            }else{
                restanteDiv.classList.remove('alert-danger','alert-warning')
                restanteDiv.classList.add('alert-sucess')
            }

            if(restante <=0){
                ui.imprimirAlerta('El presupuesto se ha agotado','error')
                formulario.querySelector('button[type="submit"]').disabled = true
            }
        
        
        }

        mayor(gastos){
            // gastos.forEach(gasto=>{
            //     m =[]
            //     m.push(gasto)
            //     console.log(gasto)
            // })
            
            // const mayor =  Math.max(Presupuesto.gastos)
            // const mayor = Number(Math.max(gastos))
            // console.log(mayor)
            // const div = document.createElement(`div`)
            // div.classList.add(`text-center`,`alert-warning`)
            // if ( gastos != null ){
            //     div.textContent=mayor
            //     document.querySelector(`#restante`).insertBefore(div,formulario)
            // }
           
            //     if (gastos.length === 0) {
            //         console.log("La lista de gastos está vacía.");
            //         return;
            //     }
                
            //     const mayor = Math.max(...gastos);
            //   console.log("El gasto mayor es:", mayor);
                
            //   const div = document.createElement('div');
            //  div.classList.add('text-center', 'alert-warning');
            //   div.textContent = "El gasto mayor es: " + mayor;
            //     document.querySelector('#restante').insertBefore(div, formulario);
            
            // if (gastos.length == 0) {
            //     console.log("La lista de gastos está vacía.");
            //     return;
            // }
            
            const mayor = Math.max(...gastos.map(gasto => gasto.cantidad));
            console.log("El gasto mayor es:", mayor);
            
            const div = document.createElement('div');
            div.classList.add('text-center', 'alert-warning');
            div.textContent = "El gasto mayor es: " + mayor;
            document.querySelector('.presupuesto').insertBefore(div, restante);

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
function agregarGasto(e){
    e.preventDefault()
    // lee lo del formulario
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value)
    // comprobas que los campos no esten vacios
    if(nombre == '' || cantidad == ''){
        ui.imprimirAlerta('Ambos campos son obligatorios','error')
    }else if(cantidad <= 0 || isNaN(cantidad)){
        // si hay una cantidad negativa o letras
        ui.imprimirAlerta('Cantidad no valida', 'error')
    }else{
        const gasto = {nombre, cantidad, id: Date.now()};
        // añadir nuevo gasto
        Presupuesto.agregarGasto(gasto)
        // insertar en el html
        ui.imprimirAlerta('Correcto','correcto')
        // Pasa los gastos para que se impriman
        const {gastos} = Presupuesto
        ui.agregarGastolistado(gastos)
        // cambiar la clase que avisa si se va temrinando
        ui.comprobarPresupuesto(Presupuesto)
        // Actualiza el presupuesto
        const{restante} = Presupuesto
        ui.actualizarRestante(restante)
        ui.mayor(gastos)
        // Eliminar del DOM
        formulario.reset()
    }
    
   

}
function eliminarGasto(e){
    if(e.target.classList.contains('borrar-gasto')){
        const { id } = e.target.parentElement.dataset;
        Presupuesto.eliminarGasto(id)
        // reembolsar
        ui.comprobarPresupuesto(Presupuesto)
        // pasar la cantidad restante para actualizar el dom
        const{ restante } = Presupuesto;
        ui.actualizarRestante(restante);
        console.log(restante)

        // eliminar el dom
        e.target.parentElement.remove()
    }

}
