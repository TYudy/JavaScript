var palabra = prompt(`Por favor ingresa alguna de las siguientes palabras: casa,mesa, perro, gato`)
if (palabra == `casa`){

    document.write(`The translation of "casa" is house`)

}
else if(palabra == `mesa`){

    document.write(`The translation of "mesa" is table`)
}
else if (palabra == `perro`){
    document.write(`The translation of "perro" is dog`)
}
else if (palabra == `gato`){
    document.write(`The translation of "gato" is cat`)
}
else{

    document.write(`La palabra "${palabra}" que has ingresado no es valida`)
}