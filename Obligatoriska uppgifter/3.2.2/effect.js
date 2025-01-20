/*
Detta JavaScript program handlar om effekter och animation på en webbsida.
Programmet låter användaren interagerar med sidan genom att:
- Visar och gömmer en text med en knapp.
- Fadear in och ut en text.
- Animerar en text genom att flytta upp och ner, ändar bakgrundsfärg. Animationen använder
easing (swing) och via en callback-funktion återgår den till sitt ursprungliga läge.
Detta demonstrerar praktiskt användning av effekter och animation.
OBS! Gjord med JQuery då metoderna kommer från det språket. OBS!
*/


$(document).ready(function() {
    // Visa/Göm texten när knappen klickas (toggle)
    $("#toggleButton").click(function () {
        $("#hideText").toggle(500);
    });

    // Fade In/Out texten baserat på synligheten (hidden eller ej)
    $("#fadeButton").click(function () {
        if ($("#fadingText").is(":hidden")) {
            $("#fadingText").fadeIn(500);
        } else {
            $("#fadingText").fadeOut(500);
        }
    });

    // Animera text (flytta + ändra färg och "swing" (easing))
    $("#animateButton").click(function () {
        //Flyttar ner texten 200px och ändra bakgrundsfärg på 2 sek
        $("#animateText").animate({
            marginTop: "200px", 
            backgroundColor: "#8a2be2"}, 2000,"swing",
            //Callback: Återställ position och färg när animationen är klar (1 sek)
            function () { 
            $(this).animate({
                marginTop: "20px",
                backgroundColor: "#5F8DA0"
            }, 1000);
        });
    });
});