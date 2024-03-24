function prijs() {
    let bedragMetBtw = +prompt("Voer een bedrag in inclusief BTW");

    let berekenZonderBtw = (bedragMetBtw/121) * 100;

    let bedragZonderBtw = +berekenZonderBtw.toFixed(2)

// console.log(typeof(bedragMetBtw));
// console.log(typeof(bedragZonderBtw));

alert("Bedrag met BTW is: €" + bedragMetBtw + ". " + "En bedrag zonder BTW is: €" + bedragZonderBtw);
}

prijs();
