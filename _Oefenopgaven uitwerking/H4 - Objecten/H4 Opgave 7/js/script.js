/* LOI Hoofdstuk 4 - Opgave 7 - HBO Programmeren in Javascript - By André de Groot.
17-7-2017.
*/

"use strict";

document.getElementById("knop").addEventListener("click", bereken);
function bereken() {
// Eerst met een for-statement
var som = 0;
for (var i = 1; i <= 100; i++) {
som += i;
}
document.getElementById("demo1").innerHTML += som;
// Nu met een while-statement
// Zet de variabelen eerst op 0
som = 0;
i = 0;
while( i <= 100 ) {
som += i;
i++;
}
document.getElementById("demo2").innerHTML += som;
}