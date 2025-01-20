/*
Detta JavaScript program hanterar olika DOM-manipulationer på en webbsida.
Programmet låter användaren interagerar med sidan genom att:
- Logga tangettryckningar
- Implementera hover-effekt
- Logga muskoordinater
Detta demonstrerar praktiskt användning av DOM-manipulation.
*/


// Tangentbords-händelse (logga tangenttryckning)
document.getElementById("name").addEventListener("keyup", function(event) {
    console.log("Tangenten som trycktes: ", event.key);
});

//Hover-effekt, ändrar färg
const title = document.getElementById("title");
title.addEventListener("mouseover", function() {
    title.classList.add("hover-effect");
});
title.addEventListener("mouseout", function() {
    title.classList.remove("hover-effect");
});

//Visar muskoordinaterna i log
document.addEventListener("mousemove", function(event) {
    console.log(`X: ${event.pageX}, Y: ${event.pageY}`);
});