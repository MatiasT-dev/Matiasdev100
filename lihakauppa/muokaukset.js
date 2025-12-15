

//jos kauppan tarvitsee olla auki vaihda tämä true ja jos ei false
const onauki = false

const onkiini = false
//näitä tarvitsee käytää vain jos kauppa tarvitsee lisää aika, aikasemin kiini tai tapahtumiin



const aika = new Date().getHours();

const pai = new Date();
let viikonpaiva = pai.getDay();


let auki;

//
if (onauki == true) {
    auki = "Kauppa on auki";
} else if (onkiini == true) {
    auki = "kauppa on kiinni";
}else {
    //jos päivät ovat tiistaista perjantaihin kaupan auki olosta muuten se vaihtuu eri koodiin
    if (viikonpaiva >= 2 && viikonpaiva <= 5) {

        //kertoo aamu kymenestä ilta viiteen että kauppa on auki muuten kauppa on kiinni
    if ( aika >= 10 && aika < 17) {
        auki = "Kauppa on auki";
    } else {
     auki = "kauppa on kiinni";
    }// jos on päivä lauantai aamu kymenestä ilta kahteen kauppa on auki muuten kauppa on kiinni
    } else if (viikonpaiva == 6 ) {
        if ( aika >= 10 && aika < 14) {
        auki = "Kauppa on auki";
        } else {
        auki = "kauppa on kiinni";
        }
        //jos on maanantai tai sununtai kauppa on kiinni
        } else {
            auki = "kauppa on kiinni";
        }
    }
    // lähetää tiedon nappile joka kertoo asiakkale
function aukiolot(){
    alert(auki);
}