/*
Detta JavaScript-program hanterar formulärhantering med dynamiska fält.  
Programmet fungerar enligt följande:  
- Markerar det aktiva fältet som användaren fyller i.  
- Döljer eller visar telefonfältet beroende på användarens val mellan "Telefon" och "E-post".  
- Validerar obligatoriska fält vid inlämning av formuläret.  
- Säkerställer att namn, email och telefonnummer följer specificerade mönster.  

Detta program demonstrerar användning av JavaScript för dynamisk formulärhantering.
*/


document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('dynamicForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const contactPhone = document.getElementById('contactPhone');
    const contactEmail = document.getElementById('contactEmail');
    const subscribeCheckbox = document.getElementById('subscribe');

    //Sätt fokus på första fältet
    nameInput.focus();

    //Markera aktivt fält
    form.addEventListener('focusin', (event) => {
        event.target.style.backgroundColor = '#e7f1ff';
    });

    form.addEventListener('focusout', (event) => {
        event.target.style.backgroundColor = '';
    });

    //Hantera radio-knappar för att visa/dölja telefonfältet
    contactPhone.addEventListener('change', () => {
        phoneInput.style.display = 'block'; //Visa telefonfältet
        phoneInput.focus();
    });

    contactEmail.addEventListener('change', () => {
        phoneInput.style.display = 'none'; //Göm telefonfältet
        phoneInput.value = ''; //Rensa värdet om det är dolt
    });

    //Validera formuläret
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        //Kontrollera att namn är ifyllt och giltigt
        if (!nameInput.value.trim()|| !validateName(nameInput.value)) {
            alert('Vänligen fyll i ett giltigt namn (endast bokstäver och mellanslag).');
            nameInput.focus();
            return;
        }

        //Kontrollera att e-post är giltig
        if (!emailInput.value.trim() || !validateEmail(emailInput.value)) {
            alert('Vänligen ange en giltig e-postadress.');
            emailInput.focus();
            return;
        }

        //Kontrollera att telefonnummer är ifyllt och giltigt (om kontakt via telefon är vald)
        if (contactPhone.checked && (!phoneInput.value.trim() || !validatePhone(phoneInput.value))) {
            alert('Vänligen ange ett giltigt telefonnummer (endast siffror, mellanslag och bindestreck).');
            phoneInput.focus();
            return;
        }

        //Om allt är korrekt visas en alert
        alert('Formuläret har skickats in!');
    });

    //Validering för namn
    function validateName(name) {
        const nameRegex = /^[A-Za-zÅÄÖåäö\s]+$/;
        return nameRegex.test(name);
    }

    //Validering för e-post
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    //Validering för telefonnummer
    function validatePhone(phone) {
        const phoneRegex = /^\+?[0-9]+([- ]?[0-9]+)*$/;
        return phoneRegex.test(phone);
    }
});
