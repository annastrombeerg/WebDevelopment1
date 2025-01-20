/*
Detta JavaScript-program hanterar en animerad navigationslista med en drop-down meny.  
Programmet låter användaren interagera med sidan genom att:  
- Klicka på ett menyalternativ för att visa eller dölja en drop-down meny.  
- Automatiskt dölja drop-down menyn när användaren klickar utanför den.  

Detta program demonstrerar användning av JavaScript vid animering för en navigationsmeny. 
*/

document.addEventListener('DOMContentLoaded', function () {
    //Hämta drop-down meny och toggle-knapp
    const dropdown = document.getElementById('dropdown');
    const dropdownMenu = document.getElementById('dropdown-menu');

    //Lägg till en klickhändelse för att visa/dölja drop-down menyn
    dropdown.addEventListener('click', function (event) {
        event.preventDefault(); //Förhindra standardbeteendet
        dropdownMenu.style.display = dropdownMenu.style.display === 'flex' ? 'none' : 'flex';
    });

    //Stäng menyn när användaren klickar utanför
    document.addEventListener('click', function (event) {
        if (!dropdown.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
});
