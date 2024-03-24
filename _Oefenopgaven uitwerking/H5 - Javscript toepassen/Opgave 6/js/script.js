/* LOI Hoofdstuk 5 - Opgave 6 - HBO Programmeren in Javascript - By André de Groot.
24-7-2017.

Opdracht: 
Maak een pagina met een tabel met gegevens, drie invoervakken en een knop.
Zie afbeelding. Als u tekst in de vakken invoert en op de knop drukt, 
worden de gegevens aan de tabel toegevoegd. Zie afbeelding.
*/

"use strict";

	var voegToeButton = document.getElementById("voegToeButton");
	var voorNaam = document.getElementById("voorNaam");
	var achterNaam = document.getElementById("achterNaam");
	var aantalPunten = document.getElementById("aantalPunten");



voegToeButton.addEventListener("click", function() {

	var $voorNaam = voorNaam.value;
	var $achterNaam = achterNaam.value;
	var $aantalPunten = aantalPunten.value;

    var row = myTable.insertRow();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();
    cell1.innerHTML = $voorNaam;
    cell2.innerHTML = $achterNaam;
    cell3.innerHTML = $aantalPunten;

    //Voorbeeld: 
    //https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_table_insertrow

});


