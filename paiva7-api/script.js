const API = "https://jsonplaceholder.typicode.com/users";

let viimeisinData = [];

 

function asetaTila(teksti) {

  document.getElementById("tila").innerText = teksti;

}

 

function nayta(obj) {

  document.getElementById("lista").innerHTML =

    "<pre>" + JSON.stringify(obj, null, 2) + "</pre>";

}

 

function naytaTulos(teksti) {

  document.getElementById("tulos").innerText = teksti;

}



















function haeUsers() {

  asetaTila("Ladataan...");

 

  fetch(API)

    .then(res => res.json())

    .then(data => {

      viimeisinData = data;

 

      if (data.length === 0) {

        asetaTila("Ei tietoja");

        document.getElementById("lista").innerText =

          "Lista on tyhjä";

        return;

      }

 

      asetaTila("Haku onnistui");

      nayta(data);

    })

    .catch(() => {

      asetaTila("Virhe tiedon haussa");

    });

}
