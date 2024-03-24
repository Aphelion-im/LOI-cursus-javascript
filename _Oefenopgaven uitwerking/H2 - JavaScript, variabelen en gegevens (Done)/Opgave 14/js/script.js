function mijnFunctie () {

	var invoerA = document.getElementById("getalA");
	var getalA = +invoerA.value;

	if( isNaN(getalA) ) {
		document.getElementById("resultaat").innerHTML =
		"Dit is géén getal!";
	}
	else {
		
		document.getElementById("resultaat").innerHTML =
		"Het getal x 10: " + parseInt(getalA * 10);
		
	}

}





