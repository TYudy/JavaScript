var po={
    teclas: document.querySelectorAll("#container ul li"),
    action: null
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
    calculadora:function(action){

        switch(action){
            case "numero":
                po.cantising = 0;
                if(po.operaciones.innerHTML == 0){
                    po.operaciones.innerHTML = 0;
                }
                console.log("numero");
            break;
            case "simbolo":
                console.log("simbolo");
            break;
            case "raiz":
                console.log("raiz");
            break;
            case "cubo":
                console.log("cubo");
            break;
            case "igual":
                console.log("igual");
            break;
            case "decimal":
                console.log("decimal");
            break;
            case "pi":
                console.log("pi");
            break;
            case "decimal":
                console.log("decimal");
            break;
            case "decimal":
                console.log("decimal");
            break;
        }

    }
}
fun.inicio();