/* LOI Hoofdstuk 4 - Opgave 5 - HBO Programmeren in Javascript - By André de Groot.
17-7-2017.
*/

"use strict";

var berekenen = document.getElementById("berekenKnop");
var uitvoer = document.getElementById("uitvoer");

berekenen.addEventListener("click", tafelVanTien);

//Uitlijnen gaat nog niet 100%

function tafelVanTien() {

	for (var a=1; a < 11; a++) {

if (a > 0 && a < 10) {
	uitvoer.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
}
		uitvoer.innerHTML += "&nbsp;" + a + "&nbsp;*" + "&nbsp;10" + "&nbsp;=" + "&nbsp;" + a*10 + "<br>" ;




	}


}