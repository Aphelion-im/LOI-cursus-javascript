/* LOI Hoofdstuk 5 - Opgave 8 - HBO Programmeren in Javascript - By André de Groot.
24-7-2017.

Opdracht: 
Gebruik het voorbeeld op de cookies-pagina op ww3schools als uitgangspunt. 
Maak een pagina die bij het laden controleert of er een cookie is. 
Zo nee, dan vraagt de pagina om uw naam en maakt 
een cookie met uw naam met een geldigheidsduur van 5 minuten. 
Zo ja, dan komt er een welkomstboodschap. Test de pagina binnen 5 minuten, en ook daarna.
Laat in de pagina zowel het huidige tijdstip als het vervaltijdstip van de cookie zien.
Maak ook een cookie met een geldigheidsduur van een maand.
*/

"use strict";


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";


}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }

    var output = document.getElementById("output");
    output.innerHTML = "Hallo " + user + "!";

}
