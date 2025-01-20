/*
Detta JavaScript-program hanterar serversända meddelanden för att visa data från en annan webbserver utan att ladda om sidan.  
Programmet låter användaren interagera med sidan genom att:
- Läsa meddelanden från en server med hjälp av EventSource-objektet
- Dynamiskt lägga till och visa meddelanden från servern
- Hantera fel och visar felmeddelanden för användaren om servern är otillgänglig

Detta program demonstrerar användning av EventSource, som är en teknik för halv-duplex serverinitierad kommunikation.
*/

document.addEventListener('DOMContentLoaded', function () {
    const messageContainer = document.getElementById('message');

    //Skapa en ny EventSource till PHP-skriptet på URLen
    const eventSource = new EventSource('http://people.dsv.su.se/~pierre/i/05_ass/ip3/3/3.4/3.4.5/example.php'); 
    //Använder din example.php men verkar vara något fel med servern på er sida

    //Lyssna på message-händelser från servern
    eventSource.onmessage = function (event) {
        const message = document.createElement('p');
        message.textContent = `Servern skickade: ${event.data}`;
        messageContainer.appendChild(message);
    };

    //Hantera fel i EventSource
    eventSource.onerror = function () {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Kunde inte ansluta till servern.';
        errorMessage.style.color = 'red';
        messageContainer.appendChild(errorMessage);
    };
});