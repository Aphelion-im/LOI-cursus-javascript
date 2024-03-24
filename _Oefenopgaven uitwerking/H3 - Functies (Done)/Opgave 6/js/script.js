"use strict";

//This may probably be not the most efficient code.

document.getElementById("getal1").addEventListener("mouseover", tekstVlak1F1);
document.getElementById("getal1").addEventListener("click", tekstVlak1F2);
document.getElementById("getal1").addEventListener("mouseout", tekstVlak1F3);

//Input field 2 event listeners
document.getElementById("getal2").addEventListener("mouseover", tekstVlak2F1);
document.getElementById("getal2").addEventListener("click", tekstVlak2F2);
document.getElementById("getal2").addEventListener("mouseout", tekstVlak2F3);


function tekstVlak1F1() {

    document.getElementById("getal1").style.backgroundColor = "pink";
    document.getElementById("output").innerHTML = "Color is pink!";
}

function tekstVlak1F2() {

    document.getElementById("getal1").style.backgroundColor = "green";
    document.getElementById("output").innerHTML = "Color is green!";
}

function tekstVlak1F3() {

    document.getElementById("getal1").style.backgroundColor = "red";
    document.getElementById("output").innerHTML = "Color is red!";
}

//Input field 2 Functions

function tekstVlak2F1() {

    document.getElementById("getal2").style.backgroundColor = "aqua";
    document.getElementById("output").innerHTML = "Color is aqua!";
}

function tekstVlak2F2() {

    document.getElementById("getal2").style.backgroundColor = "blueviolet";
    document.getElementById("output").innerHTML = "Color is blueviolet!";
}

function tekstVlak2F3() {

    document.getElementById("getal2").style.backgroundColor = "gold";
    document.getElementById("output").innerHTML = "Color is gold";
}
