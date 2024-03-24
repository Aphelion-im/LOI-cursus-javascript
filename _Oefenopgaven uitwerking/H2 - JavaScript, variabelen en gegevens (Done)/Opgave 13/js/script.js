function mijnFunctie () {

	var invoerX = document.getElementById("invoerA");
	var getalX = +invoerX.value;

	var invoerY = document.getElementById("invoerB");
	var getalY = +invoerY.value;

	var invoerZ = document.getElementById("invoerC");
	var getalZ = +invoerZ.value;
	
	
	if(getalX >= getalY && getalX >= getalZ) {
		document.getElementById("resultaat").innerHTML =
		"In vak A staat het grootste getal";
	}

	else if(getalY >= getalX && getalY >= getalZ) {
		document.getElementById("resultaat").innerHTML =
		"In vak B staat het grootste getal";
	}
	
	else {
		document.getElementById("resultaat").innerHTML =
		"In vak C staat het grootste getal";
	}

}





