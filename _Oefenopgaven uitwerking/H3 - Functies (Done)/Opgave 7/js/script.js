"use strict";

//More efficient code this time, but could probably be even better. 


/* Solution: 
When passing function parameter values, use an "anonymous function" that calls the specified 
function with the parameters.
http://www.w3schools.com/jsref/met_document_addeventlistener.asp

"Mouseout" event is out of the window.
*/

//Input field 1 
document.addEventListener("click", function() {
    kleur("getal1", "pink");
});

document.addEventListener("contextmenu", function() {
    kleur("getal1", "red");
});

document.addEventListener("mouseout", function() {
    kleur("getal1", "green");
});

//Input field 2 

document.addEventListener("click", function() {
    kleur("getal2", "coral");
});

document.addEventListener("contextmenu", function() {
    kleur("getal2", "aqua");
});

document.addEventListener("mousemove", function() {
    kleur("getal2", "tomato");
});







function kleur(element, color) {

    document.getElementById(element).style.backgroundColor = color;
    document.querySelector("#output").innerHTML = "Hallo, de kleur is: " + color;


}




