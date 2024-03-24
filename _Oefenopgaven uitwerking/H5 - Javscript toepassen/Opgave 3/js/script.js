/* LOI Hoofdstuk 5 - Opgave 3 - HBO Programmeren in Javascript - By André de Groot.
23-7-2017.

Opdracht: 
Als u op de knop drukt, verandert de opmaak van de tekst: het lettertype, 
de lettergrootte, de kleur van de letters en de achtergrondkleur.
*/

"use strict";

var knop = document.getElementById("knop");




knop.addEventListener("click", function() {
var outputParagraph = document.getElementById("outputParagraph");
outputParagraph.style.fontFamily="Verdana";
outputParagraph.style.color="red";
outputParagraph.style.backgroundColor="green";


});


