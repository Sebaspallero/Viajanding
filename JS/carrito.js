$(document).ready(mostarCompra());

function flightid() {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  
    for (let i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
  
  function seatidn() {
    let text = "";
    let possible = "123456789";
  
    for (let i = 0; i < 2; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

  function seatidt() {
    let text = "";
    let possible = "ABCDEF";
  
    for (let i = 0; i < 1; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }


  function gateid() {
    let text = "";
    let possible = "ABCD";
  
    for (let i = 0; i < 1; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }

    

        function mostarCompra() {
          let getFechaO = localStorage.getItem("Fecha de Origen");
          let getFechaR = localStorage.getItem("Fecha de Regreso");
        
          let getOrigenNO = localStorage.getItem("Origen Nacional");
          let getOrigenNOID = localStorage.getItem("Origen ID");
        
          let getDestinoND = localStorage.getItem("Destino Nombre");
          let getDestinoNDID = localStorage.getItem("Destino ID");  
            
          let getNombreU = localStorage.getItem ("Nombre Usuario");
          let getApellidoU = localStorage.getItem ("Apellido Usuario");



            let horarioInfoBox = document.getElementById("datosDestinoN")
            let contenedorHorario = document.createElement("section")
            contenedorHorario.innerHTML = `<img src="../multimedia/triangle-yl.svg" alt="">
            <div class="tickets">
            <div>
            <div class="boarding__box">
            <div class="boarding__header">
                <p class="viajanding__ticket">Viajanding</p>
            </div>
            <div class="boarding__ciudades">
                <p class="boarding__ciudad">${getOrigenNOID}</p>
                <i class="fas fa-plane-departure icon__boarding"></i>
                <P class="boarding__ciudad">${getDestinoNDID}</P>
            </div>
            <div class="boarding__name">
                <p>Pasajero</p>
                <p>${getNombreU} ${getApellidoU}</p>
            </div>
            <div class="borading__time">
                <p>${getFechaO}</p>
                <div class="boarding__hour">
                    <p>Despegue</p>
                    <p>10:40</p>
                    <p>Arrivo</p>
                    <p>13:10</p>
                </div>
            </div>
            <div class="boarding__info" id="randomInfo">
                <p>Gate: ${gateid()}</p>
                <p>Seat: ${seatidn() + seatidt()}</p>
                <p>Class: ECONOMY</p>
            </div>
        </div>
        <div class="boarding__qr">
            <img src="../multimedia/QR.svg" class="qr__image" alt="Código QR">
            <p class="flight__number">Flight ${flightid()}</p>
        </div>
        </div>
        <i class="fas fa-arrow-right icon__arrow__tickets"></i>
        <div>
        <div class="boarding__box">
            <div class="boarding__header">
                <p class="viajanding__ticket">Viajanding</p>
            </div>
            <div class="boarding__ciudades">
                <p class="boarding__ciudad">${getDestinoNDID}</p>
                <i class="fas fa-plane-departure icon__boarding"></i>
                <P class="boarding__ciudad">${getOrigenNOID}</P>
            </div>
            <div class="boarding__name">
                <p>Pasajero</p>
                <p>${getNombreU} ${getApellidoU}</p>
            </div>
            <div class="borading__time">
                <p>${getFechaR}</p>
                <div class="boarding__hour">
                    <p>Despegue</p>
                    <p>7:30</p>
                    <p>Arrivo</p>
                    <p>10:00</p>
                </div>
            </div>
            <div class="boarding__info" id="randomInfo">
                <p>Gate: ${gateid()}</p>
                <p>Seat: ${seatidn() + seatidt()}</p>
                <p>Class: ECONOMY</p>
            </div>
        </div>
        <div class="boarding__qr">
            <img src="../multimedia/QR.svg" class="qr__image" alt="Código QR">
            <p class="flight__number">Flight ${flightid()}</p>
        </div>
        </div>
        </div>`;
            horarioInfoBox.appendChild(contenedorHorario);  
        }
    

    
//TOGGLE NAVBAR
$('.hamburguer__menu').click(function() {
  $('.secciones__body').toggle('slow');
});
    