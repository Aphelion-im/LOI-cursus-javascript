/* LOI Hoofdstuk 5 - Opgave 5 - HBO Programmeren in Javascript - By André de Groot.
23-7-2017.

Opdracht: 
Maak een pagina met twee select-elementen (dropdownmenu's) en een knop. 
Als u op de knop klikt, verschijnt onder in beeld de tekst met de gemaakte 
keuzes uit de menu's.
*/

"use strict";

	var knop = document.getElementById("knop");
	var output = document.getElementById("output");
	var autoMerk = document.getElementById("autoMerk");
	var autoType = document.getElementById("autoType");



knop.addEventListener("click", function() {

	output.innerHTML = autoMerk.value + " " + autoType.value;
	
//Volgens LOI: vnlijst.options[vnlijst.selectedIndex].value;
});


