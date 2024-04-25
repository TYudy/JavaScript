var po={
    teclas: document.querySelectorAll("#container ul li"),
    action: null,
    digito: null,
    operaciones: document.querySelector("#operaciones"),
    cantising: 0,
    cantidecimal: false,
    resultado:false





}

var fun = {

    inicio: function(){
        for(var i = 0;i<po.teclas.length;i++){
            po.teclas[i].addEventListener("click", fun.oprimirteclas);
        }
    },
    oprimirteclas:function(tecla){
        po.action = tecla.target.getAttribute("class");
        po.digito = tecla.target.innerHTML;
        fun.calculadora(po.action,po.digito);

    },
    calculadora:function(action,digito){

        switch(action){
            case "numero":
                po.cantising = 0;
                if(po.operaciones.innerHTML == 0){
                    po.operaciones.innerHTML = digito;
                    
                }
                else{
                    if(po.resultado){
                        po.resultado = false;
                        po.operaciones.innerHTML = digito;
                    }
                    else{
                        po.operaciones.innerHTML += digito;
                        po.cantidecimal = false;
                        po.resultado = false;
                    }
                }
                console.log("numero");
            break;
            case "simbolo":
                po.cantising ++;
                if(po.cantising == 1){
                    if(po.operaciones.innerHTML == 0){
                        po.operaciones.innerHTML = 0;
                        
                
                    }
                    else{
                        po.operaciones.innerHTML += digito;
                    }
                }
                console.log("simbolo");
            break;
            case "raiz":
                po.operaciones.innerHTML = Math.sqrt(po.operaciones.innerHTML);
                po.resultado = true;
                console.log("raiz");
            break;
            case "cubo":
                po.operaciones.innerHTML = Math.pow(po.operaciones.innerHTML,3);
                po.resultado = true;
                console.log("cubo");
            break;
            
            case "decimal":
                if(!po.cantising && po.cantising!=1){
                    po.operaciones.innerHTML += digito;
                    po.cantidecimal = true;
                    po.resultado = false;
                }
                console.log("decimal");
            break;
            case "pi":
                po.operaciones.innerHTML = Math.PI*(po.operaciones.innerHTML);
                po.resultado = true;
                console.log("pi");
            break;
            
            case "igual":
                po.operaciones.innerHTML = eval(po.operaciones.innerHTML);
                po.resultado = true;
                console.log("igual");
            break;
            case "eliminar":
                
                if(po.operaciones.innerHTML.length <= 1){
                    po.operaciones.innerHTML = 0;
                }else{
                    po.operaciones.innerHTML = po.operaciones.innerHTML.slice(0, -1) ;
                }
               
                console.log("eliminar");
            break;
            
        }

    },
    borrarCalculadora:function(){
        po.resultado = false;
        po.operaciones.innerHTML = 0;
    }
}
fun.inicio();