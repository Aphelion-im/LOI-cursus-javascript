//Schrijf een pagina met twee tekstvakken en een knop. Zodra u in de tekstvakken twee getallen intikt en op de knop drukt, 
//wordt het gemiddelde van de getallen op de pagina afgebeeld. Maak daarbij gebruik van de functie gemiddelde().
"use strict";
document.getElementById("buttonBereken").addEventListener("click", berekenGemiddelde);






function berekenGemiddelde() {

    let getal1 = +document.getElementById("getal1").value;
    // console.log(typeof(getal1));
    // console.log(getal1);
    let getal2 = +document.getElementById("getal2").value;
    // console.log(typeof(getal2));
    // console.log(getal2);

    let gemiddeldeCijfer = (getal1 + getal2) / 2;

    document.getElementById("output").innerHTML = "Het gemiddelde is: " + gemiddeldeCijfer;





}
