window.onload = function(){
    let formulario = document.querySelector(".form-editar")

    formulario.addEventListener("submit",function(event){
        let name = document.querySelector("#name");
        let description = document.querySelector("#description");
        let image =  document.querySelector("#file") ;
        let price = document.querySelector("#price");
        let errors=[]
        // no funciona y no encontramos porque. esta planteado igual que la validacion de crear que si funciona
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
        
       /*  let acceptedExt = [".jpg",".jpeg",".png",".gif"]
        let fileExt = path.extname(image.value.originalname);
        if(!acceptedExt.includes(fileExt)){
            errors.push("Las extensiones aceptadas son"+ ", jpg"+", png"+", jpeg" +", gif")
        } else {
            formulario.price.focus()
        } */

        if(price.value <= 0){
            errors.push("Debe indicar el precio la del producto")
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