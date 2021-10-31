    $('#submit__contacto').on('click', function (e) {

      let nombreContacto = document.getElementById("nombre__contacto").value
      let apellidoContacto = document.getElementById("apellido__contacto").value
      let emailContacto = document.getElementById("email__contacto").value
      let consultaContacto = document.getElementById("consulta__contacto").value


      e.preventDefault();
      if (nombreContacto == "") {
        tippy('#submit__contacto', {
          content: 'Complete todos los campos',
          trigger: 'click',
          theme: 'error'
        });
       return;
      }

      else if(apellidoContacto == "") {
        tippy('#submit__contacto', {
          content: 'Complete todos los campos',
          trigger: 'click',
          theme: 'error'
        });
       return;
      }

      else if(emailContacto == "") {
        tippy('#submit__contacto', {
          content: 'Complete todos los campos',
          trigger: 'click',
          theme: 'error'
        });
       return;
      }

      else if(consultaContacto == "") {
        tippy('#submit__contacto', {
          content: 'Complete todos los campos',
          trigger: 'click',
          theme: 'error'
        });
       return;
      }

      else{
      $.ajax({
        type: 'post',
        url: "https://jsonplaceholder.typicode.com/posts",
        data: $('#form__contacto').serialize(),
        success: function () {
            $("#mensaje__form").prepend(`<div class="mensaje__succes">
            Su consulta fue enviada exitosamente, le estaremos respondiendo a la brevedad
            </div>`);
            setTimeout(function(){
                document.getElementById("mensaje__form").innerHTML = '';
            }, 5000);
        }
      })};

    });
  

  