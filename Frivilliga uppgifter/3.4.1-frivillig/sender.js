/*
Detta JavaScript-program hanterar sändning och mottagning av meddelanden mellan ett huvuddokument och en iframe med hjälp av postMessage-API:t.  
Programmet används i en avsändarsida (sender) och fungerar enligt följande:  
- Tillåter användaren att skriva ett meddelande i ett input-fält och skicka det till en iframe.  
- Använder `postMessage` för att överföra meddelandet från huvuddokumentet till iframe.  
- Lyssnar på svar från iframen via `message`-händelsen.  
- Visar mottagna svar från iframen i huvuddokumentet.  

Detta program demonstrerar användning av iframe.
*/

document.addEventListener('DOMContentLoaded', function () {
    const sendMessageButton = document.getElementById('sendMessage');
    const messageInput = document.getElementById('messageInput');
    const iframe = document.getElementById('iframe');
    const responseOutput = document.getElementById('response');

    //Skicka meddelande till iframe
    sendMessageButton.addEventListener('click', function () {
        const message = messageInput.value;
        if (message.trim() !== '') {
            iframe.contentWindow.postMessage(message, 'http://127.0.0.1:5500'); //Ändra till rätt vid behov (Jag använder VsCode Liver Server)
        }
    });

    //Hantera svar från iframe
    window.addEventListener('message', function (event) {
        if (event.origin === 'http://127.0.0.1:5500') { //Ändra till rätt vid behov (Jag använder VsCode Liver Server)
            responseOutput.textContent = `Svar från mottagaren: ${event.data}`;
        } else {
            console.warn('Ogiltig origin:', event.origin);
        }
    });
});
