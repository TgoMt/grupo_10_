window.onload = function(){
          let formulario = document.querySelector(".form")

      
          formulario.addEventListener("submit",function(event){
              event.preventDefault();      
              let name = document.querySelector("#name")
              let lastname= document.querySelector("#lastname")
              let image = document.querySelector("file")
              let dni = document.querySelector("#dni")
              let role = document.querySelector("#role")
              let passwordConfirm = document.querySelector("#passwordConfirm")
              let terms = document.querySelector("#terms")
              let email = document.querySelector("#email")
              let password = document.querySelector("#password")
              let errors=[]
           /*    if(email.value==""){
                  errors.push("Debe completar el email")
              }else{
                  formulario.password.focus()
              } */
      
            /*   let regEmail = /\S+@\S+\.\S+/;
              if(!regEmail.test(email.value)){
                  errors.push("Debe ser un formato de email valido")
              
              } */

              if(name.value == ""){
                    errors.push("Debe ingresar un nombre")
                }else if (name.value.length < 2){
                    errors.push("El minimo del" + " nombre " + "es de 2 caracteres") 
                }else{
                    formulario.lastname.focus()
               }

               
              if(lastname.value == ""){
                    errors.push("Debe ingresar un apellido")
                }else if (lastname.value.length < 2){
                    errors.push("El minimo del" + " apellido " + "es de 2 caracteres") 
                }else{
                    formulario.dni.focus()
               }
               
               /* let file = req.file;
               let fileExt = path.extname(file.originalname);
               let acceptedExt = [".jpg",".jpeg",".png",".gif"]
               if(!file){
                   errors.push("Debe subir una imagen")
                  }else if (!acceptedExt.includes(fileExt)){
                    errors.push("Las extenciones aceptadas son"+ ", jpg"+", png"+", jpeg" +", gif")
                   } */

                   if(dni.value == ""){
                    errors.push("Debe ingresar un dni")
                }else if (dni.value.length < 9){
                    errors.push("El minimo del" + " dni " + "es de 9 caracteres") 
                }else{
                    formulario.role.focus()
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