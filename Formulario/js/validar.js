function formulario(){
    var namev = nombre();
    var lastnamev = apellido();
    var userv = usuario()
    var emailv = email()
    var passv = contrasena()
    if(namev && lastnamev && emailv && userv && passv){
        alert(`Registro exitoso`);
        return true;
    }else{
        alert(`Verificar sus campos`);
        return false;
    }
}
function nombre(){
    var name = document.getElementById('name').value;
    if(name.trim()==""){
        alert(`Por favor ingresar el nombre`)
        return false;
    }
    return true;
    
}
function apellido(){

    var lastname = document.getElementById('lastname').value;
    if(lastname.trim() == ""){
        alert(`Por favor ingresar el apellido`)
        return false;

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
        return false;;
    }
    return true;
}
function contrasena(){
    var expresion = /^(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    var password = document.getElementById('password').value;
    if(password.trim() == "vacio"){
             alert(`Por favor ingresar contraseña`);
             return false;
    }else if(!expresion.test(password)){
        alert(`Por favor ingresar una contraseña valida`)
        return false
    }
    return true
    
    // var password = document.getElementById('password').value;
    // var withn = /\d/.test(password);
    // var withma = /[A-Z]/.test(password);
    // var withmi = /[a-z]/.test(password);
   
    // if(password.trim() == "vacio"){
    //     alert(`Por favor ingresar contraseña`);
    //     return false;
    // }else if (password.length <  9){
    //     alert(`la contraseña debe ser al menos 8 caracteres`);
    //     return  false 
        
    // }else if(!withn){
        
    //     alert (`La contraseña debe contener al menos un numero`)
    //     return  false 
    // }else if (!withma){
    //     alert(`La contraseña debe tener al menos una letra mayuscula`)
    //     return  false 

    // }else if (!withmi){
    //     alert(`La contraseña debe tener al menos una letra minuscula`)
    //     return  false 

    // }
    return true
}
function formatoEmail(email){
    // S para que no tenga espacios despues de "+ @""
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}