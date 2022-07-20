window.onload = function(){
    let formulario = document.querySelector(".form-login")

    formulario.addEventListener("submit",function(event){
        let email = document.querySelector("#email");
        let password = document.querySelector("#password")
        let errors=[]
        if(email.value==""){
            errors.push("Debe completar el email")
        }else{
            formulario.password.focus()
        }

        let regEmail = /\S+@\S+\.\S+/;
        if(!regEmail.test(email.value)){
            errors.push("Debe ser un formato de email valido")
        
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
            res.send("Exito")
            form.submit();
        } 
    })

}