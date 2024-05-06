function formulario(){
   
    var userv = usuario()
    var emailv = email()
    var passv = contrasena()
    var cityv = ciudad()
    var pasav = pasatiempo()
    var genderv = genero()
    var terminosv = terminos()
    if(emailv && userv && passv && cityv && genderv  && pasav && terminosv){
        alert(`Registro exitoso`);
        return true;
    }else{
        alert(`Verificar sus campos`);
        return false;
    }
    
}
function ciudad(){
    var city = document.getElementById('City').value;
    console.log(city)
    if(city == "Seleccionar"){
        alert("Por favor seleccione una ciudad");
        return false
    }
return true
}
function terminos(){
    var terminos = document.querySelector('input[id="terminos"]:checked');
    if(!terminos){
        alert(`Por favor acepte los terminos y condiciones`);
        return false

    }
    return true;

}
function pasatiempo(){
    var hobbie = document.querySelectorAll('input[name="Hobbie"]')
    if(hobbie.length == 0 || !Array.from(hobbie).some(hobby => hobby.checked)){
        alert(`Selecciona al menos un pasatiempo`)
        return false
    }
    return true

}


function genero() {
    var gender = document.querySelector('input[name="gender"]:checked');
    
    if (!gender) {
        alert("Seleccione su género");
        return false;
    }
    else{
        var genderValue = gender.value;
        console.log(genderValue)
    }
    
    return true;
}
function email(){
    // locales

    var email = document.getElementById('email').value;
    if(email.trim() == ""){
        alert(`Por favor ingrese su email`);
        return false;
    }
    // diferente
    else if(!formatoEmail(email)){
        alert(`Por favor ingrese un correo electronico valido`);
        return false;
    }
    return true;
}
function usuario(){
    var user = document.getElementById('username').value;
    if(user.trim() == ""){
        alert(`Por favor ingresar el usuario`);
        return false;
    }else if ( user.length < 2){
        alert(`El usuario debe ser minimo de 2  caracteres`);
        return false;
    }
    else if(user.length > 12){
        alert(`El usuario debe ser maximo 12 caracteres`);
        return false;

    } 
    return true;
}
function contrasena(){
    var expresion = /^(?=.*[0-9]).{4,8}$/;
    var password = document.getElementById('password').value;
    if(password.trim() == " "){
             alert(`Por favor ingresar contraseña`);
             return false;
    }else if(!expresion.test(password)){
        alert(`Por favor ingresar una contraseña valida`)
        return false
    }
    return true
    
    
}
function formatoEmail(email){
    // S para que no tenga espacios despues de "+ @""
    var re = /\S+@\S+\.[a-zA-Z]{3}(?!\d)/;
    return re.test(email);
}