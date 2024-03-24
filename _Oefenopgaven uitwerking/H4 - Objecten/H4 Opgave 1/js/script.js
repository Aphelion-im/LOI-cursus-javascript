/* LOI Hoofdstuk 4 - Opgave 1 - HBO Programmeren in Javascript - By André de Groot.
17-7-2017.
*/

"use strict";

//Object literal
// var persoon = {
//   this.voornaam: Andre,
//   this.achternaam: de Groot,
//   this.geboortejaar: 1974,
//   function wijzigVoornaam() {},
//   function wijzigAchternaam() {}
// };

//Object constructor
// function persoon(voornaam, achternaam, geboortejaar) {
//     this.voornaam = voornaam;
//     this.achternaam = achternaam;
//     this.geboortejaar = geboortejaar;
// }




// var ik = new persoon("André", "de Groot", 42);
// var mijnMoeder = new persoon("Grace", "de Groot", 64);

var p1 = new persoon( "Johan", "Cruijff", 1947 );
var p2 = new persoon( "Amalia", "van Solms", 1602 );
document.getElementById("knop1").onclick = function() { toonGegevens(p1)};
document.getElementById("knop2").onclick = function() { toonGegevens(p2)};
document.getElementById("knopwijzigvn1").onclick =
function() { wijzigGegevens(p1)};
document.getElementById("knopwijzigvn2").onclick =
function() { wijzigGegevens(p2)};
function wijzigGegevens(p) {
var s = document.getElementById("invoervoorn").value;
if ( s.trim().length > 0) {
p.wijzigVoornaam(s);
}
s = document.getElementById("invoerachtern").value;
if ( s.trim().length > 0) {
p.wijzigAchternaam(s);
}
s = document.getElementById("invoergebjaar").value;
if ( s.trim().length > 0) {
p.wijzigGeboortejaar(s);
}
toonGegevens(p);
}
function toonGegevens(p) {
document.getElementById("demo").innerHTML = p.gegevens();
}
function persoon( voornaam, achternaam, geboortejaar) {
this.voornaam = voornaam;
this.achternaam = achternaam;
this.geboortejaar = geboortejaar;
this.gegevens = function() {
return this.voornaam + " " + this.achternaam
+ " (" + this.geboortejaar + ")";
}
this.wijzigVoornaam = function(naam) {
this.voornaam = naam;
}
this.wijzigAchternaam = function(naam) {
this.achternaam = naam;
}
this.wijzigGeboortejaar = function(jaar) {
this.geboortejaar = jaar;
}
}