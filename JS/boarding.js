$(document).ready(MostarVuelos());


function MostarVuelos() {

  let ticketEconomy = parseInt("6800");
  let impuestos = parseInt("1842");

  let getOrigenNO = localStorage.getItem("Origen Nacional");
  let getOrigenNOID = localStorage.getItem("Origen ID");

  let getDestinoND = localStorage.getItem("Destino Nombre");
  let getDestinoNDID = localStorage.getItem("Destino ID");
  
  let getPasaje = localStorage.getItem("Pasaje Nacional");
 
  let getFlightIDO = flightid();
  let getFlightIDD = flightid();


  let vuelosInfoBox = document.getElementById("infoVuelos")
  let contenedorVuelos = document.createElement("div")
  contenedorVuelos.innerHTML = ` <img src="../multimedia/triangle-yl.svg" alt="">
  <div class="boarding__body">
      <section>
          <div class="info__destinos" id="info__destinos" >
              <div class="info__destios__header">
                  <p>Elegí tu vuelo de ida</p>
                  <i class="fas fa-plane-departure icon__boarding"></i>
              </div>
              <div id="destinos__ida" class="destinos__ida">
                  <p>${getOrigenNO} (${getOrigenNOID})</p>
                  <i class="fas fa-arrow-right"></i>
                  <p>${getDestinoND} (${getDestinoNDID})</p>
              </div>
          </div>
          <div class="vuelo__box" id="vuelo__box">
              <div class="vuelos__info" id="vuelos__info">
                  <div class="origen__time">
                      <p class="vuelo__hora__izq">7:30</p>
                      <p class="iniciales__ciudad__izq">${getOrigenNO}</p>
                      <p class="iniciales__ciudad__izq">(${getOrigenNOID})</p>
                  </div>
                  <div class="vuelo__time">
                      <p class="vuelo__time__text">2:30hs</p>
                      <div class="plane__icon">
                          <span class="line__plane"></span>
                          <i class="fas fa-plane"></i>
                          <span class="line__plane"></span>
                      </div>
                      <p class="vuelo__time__text">${getFlightIDO}</p>
                  </div>
                  <div class="destino__time">
                      <p class="vuelo__hora__izq">10:00</p>
                      <p class="iniciales__ciudad__der">${getDestinoND}</p>
                      <p class="iniciales__ciudad__der">(${getDestinoNDID})</p>
                  </div>
              </div>
              <div class="btns__compra" id="btns__compra">
                  <div class="btn__economy__box" id="btn__economy"> 
                      <P class="class__text">ECONOMY</P>
                      <button type="button" class="btn__economy" id="btn__economy__o">$${ticketEconomy}</button>
                  </div>
              </div>
          </div>
          <div class="info__destinos" id="info__destinos" >
              <div class="info__destios__header">
                  <p>Elegí tu vuelo de vuelta</p>
                  <i class="fas fa-plane-departure icon__boarding fa-flip-horizontal"></i>
              </div>
              <div id="destinos__ida" class="destinos__ida">
                  <p>${getDestinoND} (${getDestinoNDID})</p>
                  <i class="fas fa-arrow-right"></i>
                  <p>${getOrigenNO} (${getOrigenNOID})</p>
              </div>
          </div>
          <div class="vuelo__box" id="vuelo__box">
              <div class="vuelos__info" id="vuelos__info">
              
                  <div class="origen__time">
                      <p class="vuelo__hora__izq">10:40</p>
                      <p class="iniciales__ciudad__izq">${getDestinoND}</p>
                      <p class="iniciales__ciudad__izq">(${getDestinoNDID})</p>
                  </div>       
                  <div class="vuelo__time">
                      <p class="vuelo__time__text">2:30hs</p>
                      <div class="plane__icon">
                          <span class="line__plane"></span>
                          <i class="fas fa-plane"></i>
                          <span class="line__plane"></span>
                      </div>
                      <p class="vuelo__time__text"> ${getFlightIDD}</p>
                  </div>
                  <div class="destino__time">
                      <p class="vuelo__hora__der">13:10</p>
                      <p class="iniciales__ciudad__der">${getOrigenNO}</p>
                      <p class="iniciales__ciudad__der">(${getOrigenNOID})</p>
                  </div>
              </div>
              <div class="btns__compra" id="btns__compra">
                  <div class="btn__economy__box" id="btn__economy"> 
                      <P class="class__text">ECONOMY</P>
                      <button type="button" class="btn__economy" id="btn__economy__d">$${ticketEconomy}</button>
                  </div>
              </div>
          </div> 
      </section>
      <section class="carrito__sticky">
          <div class="carrito__box">
              <div class="carrito__header">
                  <p>Tu vuelo</p>
              </div>
              <div class="carrito__vuelo__ida__header">
                  <i class="fas fa-plane-departure"></i>
                  <p>${getOrigenNO}</p>
                  <p>a</p>
                  <p>${getDestinoND}</p>
              </div>
              <div class="carrito__vuelo__ida__info">
                  <div class="vuelos__info" id="vuelos__info">   
                      <div class="origen__time">
                          <p class="vuelo__hora__izq">7:30</p>
                          <p class="iniciales__ciudad__izq">${getOrigenNO}</p>
                          <p class="iniciales__ciudad__izq">(${getOrigenNOID})</p>
                      </div>
                      <div class="vuelo__time">
                          <p class="vuelo__time__text">2:30hs</p>
                          <div class="plane__icon">
                              <span class="line__plane"></span>
                              <i class="fas fa-plane"></i>
                              <span class="line__plane"></span>
                          </div>
                          <p class="vuelo__time__text"> ${getFlightIDO}</p>
                      </div>
                      <div class="destino__time">
                          <p class="vuelo__hora__izq">10:00</p>
                          <p class="iniciales__ciudad__der">${getDestinoND}</p>
                          <p class="iniciales__ciudad__der">(${getDestinoNDID})</p>
                      </div>
                  </div>
              </div>
              <div class="carrito__vuelo__vuelta__header">
                  <i class="fas fa-plane-departure fa-flip-horizontal"></i>
                  <p>${getDestinoND}</p>
                  <p>a</p>
                  <p>${getOrigenNO}</p>
              </div>
              <div class="carrito__vuelo__vuelta__info">
                  <div class="vuelos__info" id="vuelos__info">        
                      <div class="origen__time">
                          <p class="vuelo__hora__izq">10:40</p>
                          <p class="iniciales__ciudad__izq">${getDestinoND}</p>
                          <p class="iniciales__ciudad__izq">(${getDestinoNDID})</p>
                      </div>
                      <div class="vuelo__time">
                          <p class="vuelo__time__text">2:30hs</p>
                          <div class="plane__icon">
                              <span class="line__plane"></span>
                              <i class="fas fa-plane"></i>
                              <span class="line__plane"></span>
                          </div>
                          <p class="vuelo__time__text"> ${getFlightIDD}</p>
                      </div>
                      <div class="destino__time">
                          <p class="vuelo__hora__der">13:10</p>
                          <p class="iniciales__ciudad__der">${getOrigenNO}</p>
                          <p class="iniciales__ciudad__der">(${getOrigenNOID})</p>
                      </div>
                  </div>
              </div>
              <div class="pasajero__info__header">
                  <p><i class="fas fa-user-tag"></i> ${getPasaje}</p>
                  <p>$${ticketEconomy + ticketEconomy} <i class="fas fa-angle-up flecha__toggle" id="flecha__toggle__p"></i></p>
              </div>
              <div class="pasajero__info__precio">
                  <p>Vuelo Ida</p>
                  <div class="toggle__info">
                      <p>1 Adulto</p>
                      <p>$${ticketEconomy}</p>
                  </div>
                  <p>Vuelo vuelta</p>
                  <div class="toggle__info">
                      <p> 1 Adulto</p>
                      <p>$${ticketEconomy}</p>
                  </div>
                  <div class="toggle__info">
                      <p>Total</p>
                      <p>$${ticketEconomy + ticketEconomy}</p>
                  </div>
              </div>
              <div class="impuestos__header">
                  <p><i class="fas fa-receipt"></i> Tasas e impuestos</p>
                  <p>$${impuestos} <i class="fas fa-angle-up flecha__toggle" id="flecha__toggle__i"></i></p>
              </div>
              <div class="impuestos__precio">
                  <p>Vuelo Ida</p>
                  <div class="toggle__info">
                      <p>Tasa Seguridad</p>
                      <p>$78</p>
                  </div>
                  <div class="toggle__info">
                      <p>Recargo por combustible</p>
                      <p>$560</p>
                  </div>
                  <div class="toggle__info">
                      <p>IVA Argentina</p>
                      <p>$283</p>
                  </div>
                  <p>Vuelo Vuelta</p>
                  <div class="toggle__info">
                      <p>Tasa Seguridad</p>
                      <p>$78</p>
                  </div>
                  <div class="toggle__info">
                      <p>Recargo por combustible</p>
                      <p>$560</p>
                  </div>
                  <div class="toggle__info">
                      <p>IVA Argentina</p>
                      <p>$283</p>
                  </div>
                  <div class="toggle__info">
                      <p>Total</p>
                      <p>$${impuestos}</p>
                  </div>
              </div>
              <div class="linea__carrito"></div>
              <div class="total__carrito">
                  <p>Total</p>
                  <p>$${ticketEconomy*2 + impuestos}</p>
              </div>
          </div>
      </section>
  </div>
  
  <div class="btns__fin__boarding">
      <button class="btn__mod__fecha"><i class="fas fa-arrow-left"></i><a href="../HTML/fechas.html"> Modificar Fecha</a></button>
      <button class="btn__comprar" id="btn__comprar">Continuar</button>
  </div>`;

  vuelosInfoBox.appendChild(contenedorVuelos);  
}

//TOGGLE NAVBAR
$('.hamburguer__menu').click(function() {
  $('.secciones__body').toggle('slow');
});

//BOTONES DE COMPRA

$("#btn__economy__d").click (function (e) {
  e.preventDefault();
$("#btn__economy__d").addClass('btn__economy__active');
$("#btn__buisness__d").removeClass('btn__buisness__active');
});



$("#btn__economy__o").click (function (e) {
  e.preventDefault();
$("#btn__economy__o").addClass('btn__economy__active');
$("#btn__buisness__o").removeClass('btn__buisness__active');
});





$("#btn__comprar").click (function (e) {
window.location.href = '../HTML/datos.html';});


//TOGGLE CARRITO

$('#flecha__toggle__p').click(function() {
  $('.pasajero__info__precio').toggleClass('show');
  $(this).toggleClass('rotate');
  });

  $('#flecha__toggle__i').click(function() {
  $('.impuestos__precio').toggleClass('show');
  $(this).toggleClass('rotate');
  });

  //FLIGHT ID

  function flightid() {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  
    for (let i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
