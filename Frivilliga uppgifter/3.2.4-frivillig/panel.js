/*
Detta JavaScript-program hanterar innehållspaneler med tabbade paneler.  
Programmet låter användaren interagera med sidan genom att:  
- Klicka på en flik för att visa tillhörande innehållspanel.  
- Endast en panel visas åt gången och den aktiva fliken markeras visuellt.  

Detta program demonstrerar användning av JavaScript för att implementera en enkel användarvänlig navigeringslösning med tabbade paneler.  
*/

document.addEventListener('DOMContentLoaded', function () {
    //Hämta alla tab-knappar och paneler med deras ID
    const tab1 = document.getElementById('tab1');
    const tab2 = document.getElementById('tab2');
    const tab3 = document.getElementById('tab3');

    const panel1 = document.getElementById('panel1');
    const panel2 = document.getElementById('panel2');
    const panel3 = document.getElementById('panel3');

    //Funktion för att aktivera vald flik och panel
    function activateTab(selectedTab, selectedPanel) {
        //Nollställ alla tabbar och paneler
        [tab1, tab2, tab3].forEach(tab => tab.classList.remove('active'));
        [panel1, panel2, panel3].forEach(panel => panel.classList.remove('active'));

        //Aktivera vald flik och panel
        selectedTab.classList.add('active');
        selectedPanel.classList.add('active');
    }

    //Lägg till klickhändelser för flikarna
    tab1.addEventListener('click', () => activateTab(tab1, panel1));
    tab2.addEventListener('click', () => activateTab(tab2, panel2));
    tab3.addEventListener('click', () => activateTab(tab3, panel3));
});