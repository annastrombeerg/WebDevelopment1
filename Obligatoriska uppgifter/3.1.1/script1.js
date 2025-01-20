/*
JavaScript som använder och testar de globala objekten 
Array, Boolean, Date och Math
*/

/*Använder en array för att spara bilobjekt*/
const cars = ["Audi", "Mercedes", "BMW"];
console.log("Bilar: ", cars);
document.write("Bilar: ", cars.join(", ") + "<br>");

/*Använder boolean för att kolla om ett specifikt bilobjekt finns i arrayen*/
const hasVolvo = cars.includes("Volvo");
console.log("Finns Volvo i listan?", hasVolvo);
document.write("Finns Volvo i listan?", " " + hasVolvo + "<br>");

/*Använder Date för att hämta aktuellt datum*/
const currentDate = new Date();
console.log("Aktuellt datum:", currentDate.toLocaleDateString());
document.write("Aktuellt datum: ", currentDate + "<br>");

/*Använder Math för att generera en slumpmässig regnummer för ett bilobjekt*/
const carREG = Math.trunc(Math.random() * 1000);
console.log("Random Regnummer: ", carREG);
document.write("Random Regnummer: ", carREG);