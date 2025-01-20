/*
Detta JavaScript program handlar om bildhantering på en webbsida.
Programmet låter användaren interagerar med sidan genom att:
- Automatiskt byta bild var tredje sekund (tidsstyrt bildbyte)
- Byta till en specifik bild när användaren för muspekaren över bilden (användarstyrt)
- Återgå till tidsstyrt när muspekaren lämnar bilden
- Förladda alla bilder i förväg för att undvika fördröjningar
Detta demonstrerar praktiskt användning av bildhantering.
*/

const imagePath = ["images/bild1.jpg", "images/bild2.jpg", "images/bild3.jpg"];
const loadImage = [];

//Ladda in bilderna (förladda)
imagePath.forEach((path) => {
    const img = new Image();
    img.src = path;
    loadImage.push(img);
});

let current = 0;
const mainImg = document.getElementById("main-image");
mainImg.src = imagePath[current];

//Tidsstyrt bildbyte som byter var tredje sekund
setInterval(() => {
    current = (current + 1) % imagePath.length;
    mainImg.src = imagePath[current];
}, 3000);


//Användarstyrt bildbyte när muspekaren kommer över bilden
mainImg.addEventListener("mouseover", () => {
    mainImg.src = "images/bild2.jpg";
});

//Återgå till tidsstyrt bildbyte när användaren tar bort muspekaren
mainImg.addEventListener("mouseout", () => {
    mainImg.src = loadImage[current].src;
});