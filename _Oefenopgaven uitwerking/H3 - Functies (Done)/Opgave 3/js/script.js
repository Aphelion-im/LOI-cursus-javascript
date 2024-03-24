let num1 = +prompt("Voer het eerste getal in");
let num2 = +prompt("Voer het tweede getal in");
let num3 = +prompt("Voer het derde getal in");

// console.log(typeof(num1));
// console.log(typeof(num2));



function max2(num1, num2) {

document.getElementById("outputMax2").innerHTML = "Het hoogste cijfer is: " + Math.max(num1, num2);

}



function max3(num1, num2, num3) {

document.getElementById("outputMax3").innerHTML = "Het hoogste cijfer is: " + Math.max(num1, num2, num3);










}


max2(num1, num2);
max3(num1, num2, num3);




