function mijnFunctie () {

	var invoerX = document.getElementById("invoerA");
	var getalX = +invoerX.value;

	var invoerY = document.getElementById("invoerB");
	var getalY = +invoerY.value;

	if (getalX > getalY) {
		document.getElementById("resultaat").innerHTML =
			"A = " + getalX + " is groter dan " + "B = " + getalY;
	} else if (getalX != getalY) {
		document.getElementById("resultaat").innerHTML =
			"A = " + getalX + " is kleiner dan " + "B = " + getalY;
	} else {
		document.getElementById("resultaat").innerHTML =
			"A = " + getalX + " is gelijk aan " + "B = " + getalY;
	}


}





