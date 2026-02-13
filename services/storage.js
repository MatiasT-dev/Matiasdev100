 let piste = 0;


//pisten päivityksen
        function paivitapiste() {
            document.getElementById("piste").innerHTML = piste;
        }

function lisaapiste() {
        piste++;
  paivitapiste();

}
 //pisteen vähetäminen
        function pienenapiste() {
            piste--;
            paivitapiste();
        }

    function talepistee() {
            localStorage.setItem("piste", piste);
        
        }

//pisteiden uudelen ladatumiseen viimeksi talentuksesta
        function uudelenpistee() {
            let tale = localStorage.getItem("piste");
            if (tale !== null) {
            piste = Number(tale);
            }
            paivitapiste();
        
        }

 function poistapistejatalenna() {
   piste = 0;
   localStorage.setItem("piste", piste);
 }
