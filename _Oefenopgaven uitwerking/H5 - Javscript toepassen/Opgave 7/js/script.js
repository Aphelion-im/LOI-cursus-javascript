/* LOI Hoofdstuk 5 - Opgave 7 - HBO Programmeren in Javascript - By André de Groot.
24-7-2017.

Opdracht: 
Maak een pagina met twee velden voor de invoer van naam en e-mail, 
en een dropdownlist met drie opties, NL, BE en DE. Zie afbeelding.
*/

"use strict";

	var voegToeButton = document.getElementById("voegToeButton");
	var naam = document.getElementById("naam");
	var email = document.getElementById("email");
	var landenKeuze = document.getElementById("landenKeuze");


voegToeButton.addEventListener("click", function() {

    if(naam.value == "" ) {
    alert( "Voer svp uw naam in!" );
    naam.focus() ;
    return false;
    }
    if(email.value == "" ) {
    alert( "Voer svp uw e-mailadres in" );
    email.focus() ;
    return false;
    }
    if(landenKeuze.value == "-1" ) {
    alert( "Kies svp uw land!" );
    return false;
    }
    alert( "Alles in orde!");
    return( true );

});


