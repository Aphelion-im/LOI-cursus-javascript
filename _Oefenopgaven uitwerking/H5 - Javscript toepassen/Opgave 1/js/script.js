/* LOI Hoofdstuk 5 - Opgave 1 - HBO Programmeren in Javascript - By André de Groot.
23-7-2017.
*/

"use strict";

var knop = document.getElementById("knop");
var plaatjes = document.getElementById("image");

knop.addEventListener("click", function() {
	plaatjes.src="img/landscape.jpg";
});


