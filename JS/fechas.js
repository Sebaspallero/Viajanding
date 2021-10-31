//SETEAR FECHA ACTUAL
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

if (dd < 10) {
   dd = '0' + dd;
}

if (mm < 10) {
   mm = '0' + mm;
} 
    
today = yyyy + '-' + mm + '-' + dd;

document.getElementById("input__date__o").setAttribute("min", today);
document.getElementById("input__date__d").setAttribute("min", today);

//OBTENER DATOS DE FECHAS

let botonFC = document.getElementById("submit__FC")
      botonFC.addEventListener("click", fechasU)
    
function fechasU(e) {
    e.preventDefault();

    let fechaO = document.getElementById("input__date__o").value;
    let fechaD = document.getElementById("input__date__d").value;

    if (fechaD <= fechaO) {
        tippy('#submit__FC', {
            content: 'Por favor revise las fechas ingresadas',
            trigger: 'click',
            theme: 'error'
          });
        return;
    }

    else if (fechaO == "") {
        tippy('#submit__FC', {
            content: 'La fecha de origen debe de completarse',
            trigger: 'click',
            theme: 'error'
          });
          return;
    } 
    
    else {
        localStorage.setItem("Fecha de Origen" , fechaO);
        localStorage.setItem("Fecha de Regreso" , fechaD);
        window.location.href = '../HTML/boarding.html';
        
    }

    
}

//TOGGLE NAVBAR
$('.hamburguer__menu').click(function() {
    $('.secciones__body').toggle('slow');
});

     