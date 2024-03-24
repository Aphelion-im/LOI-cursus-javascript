function mijnFunctie () {

	var invoerA = document.getElementById("getalA");
	var getalA = invoerA.value;

	document.getElementById("resultaat").innerHTML =
		"De ingevoerde string is: " + getalA;
	
	document.getElementById("lengte").innerHTML =
		"De lengte van de ingevoerde string is: " + getalA.length;
	
	document.getElementById("lengtezonderspaties").innerHTML =
		"De lengte van de ingevoerde string zonder spaties is: " + getalA.trim().length;



}
