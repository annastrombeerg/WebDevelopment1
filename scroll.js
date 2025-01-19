/*
Detta JavaScript-program hanterar scroll-effekten på webbsidorna för <section>.
Programmet låter användaren interagera med sidan genom att:
- Lägg till och ta bort en CSS-klass ('in-view') när en sektion kommer i fokus när användaren scrollar på sidan.
- Aktiverar en visuell effekt för sektioner när de når 50% synlighet i användarens vy.
Detta demonstrerar praktisk användning av Intersection Observer API för att skapa scroll-effekter och animeringar 
utan att behöva lyssna på scroll-händelser direkt, vilket gör det mer effektivt för prestanda.
*/

//Skapa en observer
const options = {
    root: null, //Använder viewporten som root
    rootMargin: '0px',
    threshold: 0.5 //Sektionen måste vara 50% synlig för att trigga effekten
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            //Lägg till klassen 'in-view' när elementet kommer i fokus
            entry.target.classList.add('in-view');
        } else {
            //Ta bort klassen 'in-view' om elementet lämnar fokus
            entry.target.classList.remove('in-view');
        }
    });
}, options);

//Hitta alla sektioner
const sections = document.querySelectorAll('section');

//Starta observern för varje sektion
sections.forEach(section => {
    observer.observe(section);
});
