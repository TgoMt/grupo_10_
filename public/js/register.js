
window.onload = function () {
    let formulario = document.querySelector(".form")

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();
        let name = document.querySelector("#name")
        let lastname = document.querySelector("#lastname")
        let image = document.querySelector("file")
        let dni = document.querySelector("#dni")
        let role = document.querySelector("#role")
        let passwordConfirm = document.querySelector("#passwordConfirm")
        let terms = document.querySelector("#terms")
        let email = document.querySelector("#email")
        let password = document.querySelector("#password")
        let errors = []
        
//Valid Name
        if (name.value == "") {
            errors.push("Debe Ingresar un nombre")
        } else if (name.value.length < 2) {
            errors.push("El minimo es de 2 caracteres")
        } else {
            formulario.lastname.focus()
        }
//Valid LastName
if(lastname.value == ""){
    errors.push("Debe ingresar un apellido")
}else if (lastname.value.length < 2){
    errors.push("El minimo del" + " apellido " + "es de 2 caracteres") 
}else{
    formulario.dni.focus()
}

//Valid IMAGEN( NO FUNCIONA, NO SABEMOS POR QUE )
 /* let acceptedExt = [".jpg",".jpeg",".png",".gif"]
        let fileExt = path.extname(image.value.originalname);
        if(!acceptedExt.includes(fileExt)){
            errors.push("Las extensiones aceptadas son"+ ", jpg"+", png"+", jpeg" +", gif")
        } else {
            formulario.email.focus()
        } */



        
//Valid Email
        let regEmail = /\S+@\S+\.\S+/;
        if(email.value==""){
            errors.push("Debe completar el email")
        } else if (!regEmail.test(email.value)){
            errors.push("Debe ser un formato de email valido") 
        } else {
            formulario.dni.focus()
        }
//Valid DNI
if(dni.value == ""){
    errors.push("Debe ingresar un dni")
}else if (dni.value.length > 8){
    errors.push("El minimo del" + " dni " + "es de 8 caracteres") 
}else{
    formulario.role.focus()
}     
//Valid Role
if(role.value == ""){
    errors.push("Debe ingresar que rol ocupara")
    
}else{
formulario.password.focus()
}
//Valid Password
if(password.value==""){
    errors.push("Debe completar la contraseña")  
}else if(password.value.length < 8){
    errors.push("La contraseña debe tener al menos 8 caracteres")
}else{
    formulario.passwordConfirm.focus()
}

//PARA PUSHEAR ERRRES
        if (errors.length > 0) {
            event.preventDefault();
            let ulErrors = document.querySelector(".errores");
            ulErrors.classList.add("text-errors");
            ulErrors.innerHTML = "";
            for (let i = 0; i < errors.length; i++) {
                ulErrors.innerHTML += "<li>" + errors[i] + "</li>";
            };
        } else {
            formulario.submit();
        }
    })


}
