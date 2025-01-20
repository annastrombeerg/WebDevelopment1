/*
Detta JavaScript-program hanterar inläsning av flera textfiler.  
Programmet låter användaren interagera med sidan genom att:  
- Välja en eller flera textfiler från en filväljare.  
- Visa innehållet i varje textfil direkt på sidan.  

Detta program demonstrerar användning av JavaScript vid läsning av filer med File API.
*/

document.addEventListener('DOMContentLoaded', () => {
    const textFilesInput = document.getElementById('textFiles');
    const textOutput = document.getElementById('textOut');

    //Läs flera textfiler
    textFilesInput.addEventListener('change', (event) => {
        const files = event.target.files;
        textOutput.innerHTML = ''; //Rensa tidigare resultat

        Array.from(files).forEach((file) => {
            const reader = new FileReader(); //Skapa en FileReader-instans för att läsa filen
            reader.onload = () => {
                const li = document.createElement('li');
                li.textContent = reader.result; //Fyll <li>-taggen med filens innehåll
                textOutput.appendChild(li); //Lägg till <li> i <ul> med id="textOut"
            };
            reader.readAsText(file);
        });
    });
});
