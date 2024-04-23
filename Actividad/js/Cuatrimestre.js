function cuatrimestre (){


    let Actual = new Date()
    let mes = Actual.getMonth()
    
    
    if( mes >= 0 && mes <=3 ){
        document.write(`Se encuentra en el primer cuatrimestre <br>`)
    }
    else if(mes>=4 && mes<=7){
        document.write(`Se encuentra en el segundo cuatrimestre <br>`)
    }
    else{
        document.write(`Se encuentra en el tercer cuatrimestre <br>`)
    }
    document.write(mes)
    }
    cuatrimestre()