let newsForm = document.getElementById ("news__form");
newsForm.addEventListener ("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    let newsEmail = document.getElementById("news__email").value
    if (newsEmail == "") {
        tippy('.news__btn', {
            content: 'Ingrese su mail',
            theme: 'error',
            trigger:'click',
          });
    }
    else{
        localStorage.setItem("emailUsuario" , newsEmail);
         $("#mensaje__news").append(`<div class="mensaje__succes">
        ¡Te suscribiste al newsletter!
        </div>`);
        setTimeout(function(){
            document.getElementById('mensaje__news').innerHTML = '';
        }, 5000);
    }
}


//TOGGLE NAVBAR
$('.hamburguer__menu').click(function() {
    $('.navbar').toggle('slow');
});


