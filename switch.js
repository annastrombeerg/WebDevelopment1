/*
Detta JavaScript-program hanterar växlingen mellan dark mode och light mode på projectsidan.
Programmet låter användaren interagera med sidan genom att:
- Växla mellan dark mode och light mode genom att trycka på en knapp.
- Spara användarens val av läge i LocalStorage så att det bibehålls även vid framtida besök.
Detta demonstrerar praktisk användning av LocalStorage för att spara användarinställningar 
och användning av event listeners för att reagera på knapptryckningar för att ändra stil på sidan.
*/

//Hämta knappen och body-elementet
const modeToggle = document.getElementById("modeSwitch");
const body = document.body;

//Kontrollera om lightMode är aktiverat i LocalStorage
if (localStorage.getItem("theme") === "light") {
    body.classList.add("lightMode");
}

//Lägg till eventlistener för knappen
modeToggle.addEventListener("click", function() {
    //Växla mellan dark-mode och light mode
    body.classList.toggle("lightMode");

    //Spara användarens preferens i localStorage
    if (body.classList.contains("lightMode")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.removeItem("theme");
    }
});
