window.onload = function(){
    let formulario = document.querySelector(".form-crear")

    formulario.addEventListener("submit",function(event){
        let name = document.querySelector("#name");
        let description = document.querySelector("#description");
        let image =  document.querySelector("#file") ;
        let price = document.querySelector("#price");
        let errors=[]

        if(name.value==""){
            errors.push("Debe completar el nombre")
        }else if(name.value.length < 5){
           errors.push("El minimo es de 5 caracteres")
        }else{
            formulario.description.focus()
        };

        if(description.value==""){
            errors.push("Debe completar la descripcion del producto")
        }else if(description.value.length < 20){
           errors.push("El minimo es de 20 caracteres")
        }else{
            formulario.price.focus()
        };
        // bien planteado pero no funciona, no pudimos ver con Guido porque era
        //
  /*       let acceptedExt = "([^ \\ s] + (\\. (? i) (jpe? g | png | gif | bmp)) $)";
        if(!acceptedExt.test(image.value)){
            errors.push("Las extensiones aceptadas son"+ ", jpg"+", png"+", jpeg" +", gif")
        } else {
            formulario.price.focus()
        }   */

        if(price.value <= 0){
            errors.push("Debe indicar el precio la del producto")
        }

        console.log(errors);


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