console.log("main.js loaded 🎉");

//Opdracht 1 - START

let opdracht1Array = [15, 14, 31, 14, 5, 26, 7, 48, 29, 11, 13, 14, 35];
let opdracht1Getal = 0;

for (let i = 0; i < opdracht1Array.length; i++) {
    let element1 = opdracht1Array[i];
    opdracht1Getal += element1;
}
console.log("Het gemiddelde van [15, 14, 31, 14, 5, 26, 7, 48, 29, 11, 13, 14, 35] is: " + opdracht1Getal / opdracht1Array.length);

//Opdracht 1 - EINDE

//Opdracht 2 - START
let opdracht2Array = [321, 124, 254, 66, 127, 189, 90, 101, 611, 212, 313, 184, 315];
let opdracht2Getal = 0;

for (let i = 0; i < opdracht2Array.length; i++) {
    let element2 = opdracht2Array[i];
    opdracht2Getal += element2;
}
console.log("Het gemiddelde van [321, 124, 254, 66, 127, 189, 90, 101, 611, 212, 313, 184, 315] is: " + opdracht2Getal / opdracht2Array.length);

//Opdracht 2 - EIND

//Opdracht 3 - START

let opdracht3Array = [15, 14, 31, 14, 5, 26, 7, 48, 29, 11, 13, 14, 35];
let opdracht3Getal = 0;

for (let i = 0; i < opdracht3Array.length; i++) {
    let element3 = opdracht3Array[i];
    if (element3 > opdracht3Getal) {
        opdracht3Getal = element3;
    }
}
console.log("Het hoogste getal van [15, 14, 31, 14, 5, 26, 7, 48, 29, 11, 13, 14, 35] is: " + opdracht3Getal)

//Opdracht 3 - EINDE

//Opdracht 4 - START

let opdracht4Array = [321, 124, 254, 66, 127, 189, 90, 101, 611, 212, 313, 184, 315];
let opdracht4Highest = 0;
let opdracht4Getal = 0;

    for (let i = 0; i < opdracht4Array.length; i++) {
        let element4 = opdracht4Array[i];
         if (element4 > opdracht4Highest) {
            opdracht4Highest = element4;
            
        }
    }



console.log("Het laagste getal van [321, 124, 254, 66, 127, 189, 90, 101, 611, 212, 313, 184, 315] is: " + opdracht4Highest)

//Opdracht 4 - EINDE
