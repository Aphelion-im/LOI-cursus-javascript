/* LOI Hoofdstuk 5 - Opgave 2 - HBO Programmeren in Javascript - By André de Groot.
23-7-2017.
*/

"use strict";

var knop1 = document.getElementById("knop1");
var knop2 = document.getElementById("knop2");

knop2.style.display = "none";

knop1.addEventListener("click", function() {

    knop2.style.display = "block";

});


knop2.addEventListener("click", function() {

    alert("Het is gelukt!");

});