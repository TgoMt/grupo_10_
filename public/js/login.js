window.onload = function(){
    let formulario = document.querySelector(".form-login")

    formulario.addEventListener("submit",function(event){
        let email = document.querySelector("#email");
        let password = document.querySelector("#password")
        let errors=[]
        let regEmail = /\S+@\S+\.\S+/;
        if(email.value==""){
            errors.push("Debe completar el email")
        } else if (!regEmail.test(email.value)){
            errors.push("Debe ser un formato de email valido") 
        } else {
            formulario.password.focus()
        }
        
        if(password.value==""){
            errors.push("Debe completar la contraseña")  
        }else if(password.value.length < 8){
            errors.push("La contraseña debe tener al menos 8 caracteres")
        }

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