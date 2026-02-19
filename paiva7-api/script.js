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




function lisaaUser() {

  asetaTila("Lähetetään...");

 

  const uusi = {

    name: "Testi Käyttäjä",

    email: "testi@example.com"

  };

 

  fetch(API, {

    method: "POST",

    headers: { "Content-Type": "application/json" },

    body: JSON.stringify(uusi)

  })

    .then(res => res.json())

    .then(data => {

      asetaTila("Lisäys onnistui");

      nayta(data);

    })

    .catch(() => {

      asetaTila("Lisäys epäonnistui");

    });

}


function muokkaaUser() {

  asetaTila("Muokataan...");

 

  fetch(API + "/1", {

    method: "PUT",

    headers: { "Content-Type": "application/json" },

    body: JSON.stringify({

      id: 1,

      name: "Muokattu Nimi",

      email: "muokattu@example.com"

    })

  })

    .then(res => res.json())

    .then(data => {

      asetaTila("Muokkaus onnistui");

      nayta(data);

    })

    .catch(() => {

      asetaTila("Muokkaus epäonnistui");

    });

}

function poistaUser() {

  asetaTila("Poistetaan...");

 

  fetch(API + "/1", { method: "DELETE" })

    .then(res => {

      if (res.ok) {

        asetaTila("Poisto onnistui");

        nayta({ viesti: "Käyttäjä poistettu (harjoitus)" });

      } else {

        asetaTila("Poisto epäonnistui");

      }

    })

    .catch(() => {

      asetaTila("Poisto epäonnistui");

    });

}

function naytaVainNimet() {

  if (viimeisinData.length === 0) {

    naytaTulos("Hae data ensin");

    return;

  }

 

  const nimet = viimeisinData.map(item => item.name);

  naytaTulos("Nimet: " + nimet.join(", "));

}

function suodataNimella() {

  const tulos = viimeisinData.filter(item =>

    item.name.toLowerCase().includes("a")

  );

 

  naytaTulos("Nimi sisältää 'a': " + tulos.length + " kpl");

}

function laskeMaara() {

  const maara = viimeisinData.reduce(sum => sum + 1, 0);

  naytaTulos("Käyttäjiä yhteensä: " + maara);

}


function haeUsers() {

  asetaTila("Ladataan...");

 let data = Leanne Graham;

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
