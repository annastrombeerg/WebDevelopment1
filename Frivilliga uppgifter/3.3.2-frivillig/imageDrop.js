/*
Detta JavaScript-program hanterar drag-and-drop av en bildfil.  
Programmet låter användaren interagera med sidan genom att:  
- Dra och släppa en bild i en markerad drop-zone.  
- Visa en förhandsvisning av bilden direkt på sidan efter uppladdning.  

Detta program demonstrerar användning av JavaScript vid hantering av drag-and-drop och File API.
*/

document.addEventListener('DOMContentLoaded', () => {
    const dropZone = document.getElementById('drop');
    const imagePreview = document.getElementById('imagePre');

    //Hantera drag-and-drop för bildfiler
    dropZone.addEventListener('dragover', (event) => {
        event.preventDefault();
    });

    dropZone.addEventListener('drop', (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];

        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader(); //Skapa en FileReader-instans för att läsa filen
            reader.onload = () => {
                imagePreview.src = reader.result; //Sätter src för bild-elementet <img>
                imagePreview.style.display = 'block'; //Synliggör bilden
            };
            reader.readAsDataURL(file);
        }
    });
});
