//DESINOS NACIONALES

class destinoNac {
    constructor(id, nombre, precio,) {
        this.id = id
        this.nombre  = nombre;
    
    }
}


const aep = new destinoNac("BUE", "Buenos Aires");
const msn = new destinoNac("MSN","Misiones");
const slt = new destinoNac("SLT","Salta");
const mdz = new destinoNac("MDZ","Mendoza");
const crs = new destinoNac("CRS","Corrientes");
const cdb = new destinoNac("CDB","Córdoba");
const ush = new destinoNac("USH","Ushuaia");
const brc = new destinoNac("BRC","Bariloche");



function mostarDestino() {
let horarioInfoBox = document.getElementById("form__dest__n")
let contenedorHorario = document.createElement("section")
contenedorHorario.innerHTML = 
    `<img src="./multimedia/triangle-yl.svg" alt="Banner divisor">
    <h2 class="title__info">Nuestros destinos Nacionales</h2>
    <p class="text__dest">Disfrutá de los mejores destinos de Argetina viajando con nosostros, ya sea solo, con amigos o con familia, en Viajanding te ofrecemos los mejores precios para que disfrutes de tus vacaciones.</p>
    <form action="POST" id="form__nac" class="form__dest">
    <div>
        <p class="form__text"><i class="fas fa-plane-departure icon__form"></i> Escoja su Origen</p>
        <select class="search__origen" name="Origen" id="origenN">
            <option value="${aep.id}" selected>${aep.nombre}</option>
            <option value="${msn.id}">${msn.nombre}</option>
            <option value="${slt.id}">${slt.nombre}</option>
            <option value="${mdz.id}">${mdz.nombre}</option>
            <option value="${crs.id}">${crs.nombre}</option>
            <option value="${cdb.id}">${cdb.nombre}</option>
            <option value="${ush.id}">${ush.nombre}</option>
            <option value="${brc.id}">${brc.nombre}</option>
        </select>
    </div>
    <div>
        <p class="form__text"><i class="fas fa-plane-arrival icon__form"></i> Escoja su destino</p>
        <select class="search__origen" name="Origen" id="destinoN">
        <option value="${aep.id}" selected>${aep.nombre}</option>
        <option value="${msn.id}">${msn.nombre}</option>
        <option value="${slt.id}">${slt.nombre}</option>
        <option value="${mdz.id}">${mdz.nombre}</option>
        <option value="${crs.id}">${crs.nombre}</option>
        <option value="${cdb.id}">${cdb.nombre}</option>
        <option value="${ush.id}">${ush.nombre}</option>
        <option value="${brc.id}">${brc.nombre}</option>
        </select>
    </div>
    <div>
        <p class="form__text"><i class="fas fa-user-tag icon__form"></i> Cantidad de Pasajes</p>
        <select class="search__origen" name="Origen" id="pasajeN">
            <option value="1" selected >1 Pasaje</option>
        </select>
    </div>
    <div class="buy">
    <button type="submit" class="fas fa-chevron-circle-right btn__submit" id="submit__DN"></button>
    </div>
    </form>`;
    horarioInfoBox.appendChild(contenedorHorario);  

}

mostarDestino();


//DESTINOS NACIONALES STORAGE

let botonDN = document.getElementById("submit__DN")
      botonDN.addEventListener("click", destinosN)

function destinosN(e) {
    e.preventDefault();
    
let selectON = document.getElementById('origenN');
let valueON = selectON.options[selectON.selectedIndex].value;
let textON = selectON.options[selectON.selectedIndex].text;
localStorage.setItem("Origen ID" , valueON);
localStorage.setItem("Origen Nacional" , textON);


let selectDO = document.getElementById('destinoN');
let valueDO = selectDO.options[selectDO.selectedIndex].value;
let textDO = selectDO.options[selectDO.selectedIndex].text;
localStorage.setItem("Destino ID" , valueDO);
localStorage.setItem("Destino Nombre" , textDO);

let selectPN = document.getElementById('pasajeN');
let valuePN = selectPN.options[selectPN.selectedIndex].value;
let textPN = selectPN.options[selectPN.selectedIndex].text;
localStorage.setItem("Pasaje Nacional" , textPN);




if (valuePN == "4") {
    window.location.href = '#contacto';
    return;
}

else if (valueON == valueDO) {
    tippy('#submit__DN', {
            content: 'Origen y destino deben ser diferentes',
            trigger: 'click',
            theme: 'error'
          });
    return;
} 
else{
    window.location.href = './HTML/fechas.html';
}
}

