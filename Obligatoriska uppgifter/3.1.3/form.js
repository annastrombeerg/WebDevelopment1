/*
Detta JavaScript program hanterar olika DOM-manipulationer på en webbsida.
Programmet låter användaren interagerar med sidan genom att:
- Stoppa formulärets standardbeteende
- Extraherar och använder data som användaren skriver in i textfältet.
- Visar en alert med det inskickade datat från användaren. 
Detta demonstrerar praktiskt användning av DOM-manipulation.
*/

//Formulär - stoppa standardbeteende och extrahera datat
document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    alert("Formulärat har skickats av: " + name);
});