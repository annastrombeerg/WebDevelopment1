/*
Detta JavaScript program handlar kommunikation med webbservern inom domän med använding av Ajax.
Ajax tillåter programmet att skicka och ta emot data från servern utan att ladda om sidan.
Programmet låter användaren interagerar med sidan genom att:
- Mata in två tal i ett formulär
- Talen skickas till en server som beräknar summan av dessa
- Sidan visar sedan resultatet direkt
Detta demonstrerar kommunikation med webbservern inom domän.
*/

const form = document.getElementById("sum");
const result = document.getElementById("result");

//När användaren klickar på submit startar funktionen
form.addEventListener("submit", function (event) {
    event.preventDefault();  //Förhindra att sidan laddas om

    const number1 = document.getElementById("number1").value;
    const number2 = document.getElementById("number2").value;

    //Skapa och skicka en Ajax-förfrågan genom ett XMLHttpRequest-objekt
    const request = new XMLHttpRequest();
    const url = `https://people.dsv.su.se/~pierre/i/05_ass/ip3/3/3.4/3.4.3/example.php?number1=${number1}&number2=${number2}`;

    //Skapa en GET-förfrågan till URLn
    request.open("GET", url, true);
    
    //Funktione för att ta emot svaret från servern
    request.onreadystatechange = function () {
        //Förfrågan är klar om readyState är 4 (request finished and response is ready) 
        //och requesten är lyckad (status 200 = OK)
        if (request.readyState === 4 && request.status === 200) {
            //Visa resultatet från servern (summa) på sidan
            result.textContent = request.responseText;
        }
    };

    request.send();  // Skicka förfrågan
});

