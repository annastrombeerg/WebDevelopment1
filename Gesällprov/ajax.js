/*
Detta JavaScript-program hanterar formulärdata för kontaktformuläret på webbplatsen.
Programmet låter användaren interagera med sidan genom att:
- Skicka formulärdata utan att ladda om sidan (via AJAX).
- Skicka ett meddelande till en extern server (Formspree) för att hantera användarkontaktinformation.
Detta demonstrerar praktisk användning av AJAX (XMLHttpRequest) för att kommunicera med en server utan att behöva ladda om sidan.
*/


//Hämta formulär
const form = document.getElementById("contact-form");
const formEndp = document.getElementById("formEndp");

//När användaren skickar formuläret
form.addEventListener("submit", function(event) {
    event.preventDefault();  //Förhindra att sidan laddas om

    //Hämta värdena från formuläret
    const subject = document.getElementById("subject").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    //Skapa och skicka en AJAX-förfrågan med XMLHttpRequest
    const request = new XMLHttpRequest();
    const url = "https://formspree.io/f/xzzzlbqb";


    //Skicka POST-förfrågan till servern
    request.open("POST", url, true);
    request.setRequestHeader("Accept", "application/json");

    // Förbered formulärdata att skicka
    const formData = new FormData();
    formData.append("subject", subject);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    request.onreadystatechange = function() {
        //När förfrågan är klar och lyckad (status 200)
        if (request.readyState === 4 && request.status === 200) {
            //Visa resultatet från servern (bekräftelsemeddelande)
            formEndp.textContent = "Thank you, your message has been sent successfully! I will respond as fast as I can!";
            form.reset();
        } else if (request.readyState === 4 && request.status !== 200) {
            //Hantera fel
            formEndp.textContent = "Sorry, there was an issue sending your message.";
        }
    };

    request.send(formData);  //Skicka förfrågan
});
