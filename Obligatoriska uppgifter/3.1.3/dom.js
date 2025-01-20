/*
Detta JavaScript program hanterar olika DOM-manipulationer på en webbsida.
Programmet låter användaren interagerar med sidan genom att:
- Ändra en egenskap för ett HTML-elementet
- Lägga till nytt innehåll till ett HTML-elementet
- Ta bort ett HTML-element
- Utvinna information från ett HTML-element
Detta demonstrerar praktiskt användning av DOM-manipulation.
*/

//Utvinner information, väljer ett HTML-element, ändrar innehållet och klass
document.getElementById("changeText").addEventListener("click", function() {
    const description = document.getElementById("description");
    description.textContent = "Texten har ändrats nu med hjälp av JavaScript!";
    description.classList.toggle("highlight");
    console.log("Innehåll: " + description.textContent);
});

//Lägger till ett nytt element (element)
const addElement = document.getElementById("addElementToHTML");
addElement.addEventListener("click", function() {
    const newElement = document.createElement("element");
    newElement.textContent = "Nytt element tillagt!";
    document.body.appendChild(newElement);
});

//Tar bort det senast tillagda elementet (element)
const removeElement = document.getElementById("removeElementFromHTML");
removeElement.addEventListener("click", function() {
    const lastElement = document.querySelector("element:last-of-type");
    if (lastElement) {
        lastElement.remove();
    }
});