
let botonFD = $("#data__form");
    botonFD.on("click", getData);

 function getData(e) {
     e.preventDefault();

     let nombreUsuario = document.getElementById("nombreUsuario").value
     let apellidoUsario = document.getElementById("apellidoUsario").value
     let emailUsuario = document.getElementById('emailUsuario').value
     let dniUsuario = document.getElementById('dniUsuario').value
     let paisUsuario = document.getElementById('paisUsuario').value
     let ciudadUsuario = document.getElementById('ciudadUsuario').value 
     let telefonoUsuario = document.getElementById('telefonoUsuario').value 
     let codigoPostalUsuario = document.getElementById('codigoPostalUsuario').value 
     let tarjetaUsuario = document.getElementById('tarjetaUsuario').value 
     let cvTarjetaUsuario = document.getElementById('cvTarjetaUsuario').value


     if (nombreUsuario == "") {
        tippy('#data__form', {
            content: 'Complete todos los campos',
            trigger: 'click',
            theme: 'error'
          });
         return;
     }
     else if (apellidoUsario == ""){
        tippy('#data__form', {
            content: 'Complete todos los campos',
            theme: 'error',
            trigger: 'click'
            
          });
          return;
     }
     else if (emailUsuario == ""){
        tippy('#data__form', {
            content: 'Complete todos los campos',
            theme: 'error',
            trigger: 'click'
          });
        return;
    }
    else if (dniUsuario == ""){
        tippy('#data__form', {
            content: 'Complete todos los campos',
            theme: 'error',
            trigger: 'click'
          });
        return;
    }
    else if (paisUsuario == ""){
        tippy('#data__form', {
            content: 'Complete todos los campos',
            theme: 'error',
            trigger: 'click'
          });
        return;
    }
    else if (ciudadUsuario == ""){
        tippy('#data__form', {
            content: 'Complete todos los campos',
            theme: 'error',
            trigger: 'click'
          });
        return;
    }
    else if (telefonoUsuario == ""){
        tippy('#data__form', {
            content: 'Complete todos los campos',
            theme: 'error',
            trigger: 'click'
          });
        return;
    }
    else if (codigoPostalUsuario == ""){
        tippy('#data__form', {
            content: 'Complete todos los campos',
            theme: 'error',
            trigger: 'click'
          });
        return;
    }
    else if (tarjetaUsuario == ""){
        tippy('#data__form', {
            content: 'Complete todos los campos',
            theme: 'error',
            trigger: 'click'
          });
        return;
    }
    else if (cvTarjetaUsuario == ""){
        tippy('#data__form', {
            content: 'Complete todos los campos',
            theme: 'error',
            trigger: 'click'
          });
        return;
    }
    else{
        localStorage.setItem("Nombre Usuario" , nombreUsuario);
        localStorage.setItem("Apellido Usuario" , apellidoUsario);
        localStorage.setItem("Email Usuario" , emailUsuario);
        localStorage.setItem("DNI Usuario" , dniUsuario);
        localStorage.setItem("Pais Usuario" , paisUsuario);
        localStorage.setItem("Ciudad Usuario" , ciudadUsuario);
        localStorage.setItem("Telefono Usuario" , telefonoUsuario);
        localStorage.setItem("Codigo Postal" , codigoPostalUsuario);
        localStorage.setItem("Tarjeta Usuario" , tarjetaUsuario);
        localStorage.setItem("CV Tarjeta" , cvTarjetaUsuario);
        window.location.href = '../HTML/carrito.html';
        console.log(nombreUsuario)
    }
}

//SET INPUT NUMERICO

$(function() {
    $("input[name='dni']").on('input', function(e) {
        $(this).val($(this).val().replace(/[^0-9]/g, ''));
    });
});

$(function() {
    $("input[name='CV']").on('input', function(e) {
        $(this).val($(this).val().replace(/[^0-9]/g, ''));
    });
});

$(function() {
    $("input[name='telephone']").on('input', function(e) {
        $(this).val($(this).val().replace(/[^0-9]/g, ''));
    });
});

$(function() {
    $("input[name='card']").on('input', function(e) {
        $(this).val($(this).val().replace(/[^0-9]/g, ''));
    });
});

$(function() {
    $("input[name='telephone']").on('input', function(e) {
        $(this).val($(this).val().replace(/[^0-9]/g, ''));
    });
});

//TOGGLE NAVBAR
$('.hamburguer__menu').click(function() {
    $('.secciones__body').toggle('slow');
  });


