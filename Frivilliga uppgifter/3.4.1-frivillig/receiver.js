/*
Detta JavaScript-program hanterar mottagning och svar av meddelanden mellan två dokument med hjälp av postMessage-API:t.  
Programmet används i en mottagarsida (receiver) och fungerar enligt följande:  
- Lyssnar på meddelanden från ett sändande dokument med hjälp av `message`-händelsen.  
- Kontrollerar att meddelandet kommer från rätt origin för att säkerställa säkerheten.  
- Uppdaterar DOM för att visa det mottagna meddelandet.  
- Skickar ett bekräftelsemeddelande tillbaka till sändaren med det mottagna meddelandet.  

Detta program demonstrerar användning av iframe.
*/

document.addEventListener('DOMContentLoaded', function () {
    const receivedMessageOutput = document.getElementById('receivedMessage');

    //Lyssna på meddelanden från sändaren
    window.addEventListener('message', function (event) {
        if (event.origin === 'http://127.0.0.1:5500') { //Ändra till rätt vid behov (Jag använder VsCode Liver Server)
            const receivedMessage = event.data;
            receivedMessageOutput.textContent = `Meddelande mottaget: ${receivedMessage}`;

            //Skicka ett svar tillbaka till sändaren
            event.source.postMessage(`Tack för ditt meddelande: "${receivedMessage}"`, event.origin);
        } else {
            console.warn('Ogiltig origin:', event.origin);
        }
    });
});
