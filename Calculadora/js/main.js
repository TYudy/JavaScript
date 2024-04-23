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
        fun.calculadora(po.action);

    },
    calculadora:function(action){

        switch(action){
            case "numero":
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
            case "decimal":
                console.log("decimal");
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