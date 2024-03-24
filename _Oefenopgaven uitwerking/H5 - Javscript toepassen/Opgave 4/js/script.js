/* LOI Hoofdstuk 5 - Opgave 3 - HBO Programmeren in Javascript - By André de Groot.
23-7-2017.

Opdracht: 
Schrijf een script dat ervoor zorgt dat alle waarden uit het formulier getoond worden.
*/

"use strict";

var knop = document.getElementById("knop");
	var output = document.getElementById("output");
	var vnaam = document.getElementById("vnaam");
	var anaam = document.getElementById("anaam");



knop.addEventListener("click", function() {

output.innerHTML=vnaam.value + "<br>" + anaam.value;
	

});


