/*
Detta JavaScript program hanterar olika DOM-manipulationer på en webbsida.
Programmet låter användaren interagerar med sidan genom att:
- Lägger till och tar bort en händelselyssnare när användaren dubbelklickar.
- Visar en alert för att säga att man klickade och dubbelklickat så händelsen tas bort. 
Detta demonstrerar praktiskt användning av DOM-manipulation.
*/

const p = document.getElementById("p");

let clickTimer;

//En function som väntar för att se ifall det är endast ett click eller dblclick
function handleClick() {
    clickTimer = setTimeout(() => {
        alert("Du klickade på texten");
    }, 250);
    
}

//Lägg till händelselyssnare
p.addEventListener("click", handleClick);

//Ta bort händelselyssnare
p.addEventListener("dblclick", function() {
    clearTimeout(clickTimer);
    p.removeEventListener("click", handleClick);
    alert("Click-händelsen har tagits bort!");
});

