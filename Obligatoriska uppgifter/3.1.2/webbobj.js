/*
JavaScript program som visar hur webbläsarobjekt skapar interaktiva
upplevelser i en webbsida genom användarinput, popup-fönster och tidsstyrda funktioner.
Programmet använder sig av metoderna alert, confirm, prompt, open, close, setTimeout, setInterval, clearInterval och clearTimeout.
*/

/*
Funktionen startBrowser() hanterar interaktion med användaren via popup-fönster och timers.
Användaren får en hälsning, kan ange sitt namn och sedan öppnas ett nytt fönster som stängs automatiskt.
Metoden hanterar även en räknare som kör var 2 sekund tills den når 5.

-setTimeout() används för att stänga popup-fönstret efter 3 sekunder.
-clearTimeout() ser till att stängningen av popup-fönstret stoppas om användaren manuellt stänger fönstret innan timouten löper ut.
-setInterval() startar en räknare som uppdateras varannan sekund och stoppas när den når 5.
-clearInterval() stoppar räknaren när den når 5 för att undvika att den kör vidare.
*/
function startBrowser() {
    alert("Välkommen!");

    const response = confirm("Vill du fortsätta? Tryck OK");
    if(response) {
        const name = prompt("Ange ditt namn:");
        document.write("Hejsan " + name + "! <br>");
    } else {
        document.write("Du valde att avsluta");
    }

    const newWindow = window.open("https://www.google.com", "_blank", "width=600, height=400");
    if(newWindow) {
        newWindow.document.write("Fönster öppnat!");
    }

    const timeOut = setTimeout(() => {
        alert("3 sekunder har gått");
        newWindow.close(); 
    }, 3000);

    const windowClosed = setInterval(() => {
        if(newWindow.close) {
            clearTimeOut(timeOut);
            clearInterval(windowClosed);
        }
    }, 500);

    let count = 0;
    const interval = setInterval(() => {
        count++;
        document.write("Räknare: " + count + "<br>");
        if(count == 5) {
            clearInterval(interval);
            document.write("Räknaren stoppade vid 5");
        }
    }, 2000);
}