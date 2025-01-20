/*
Detta JavaScript-program hanterar dynamisk hämtning och visning av bilder från Flickr baserat på ett specifikt sökord.  
Programmet låter användaren interagera med sidan genom att:  
- Hämta bilder från Flickr API baserat på ett fördefinierat sökord med hjälp av JSONP.  
- För varje bild som returneras från API:et skapas ett dynamiskt "kort" med bild och titel.  
- Om inga bilder hittas för det valda sökordet visas ett felmeddelande för användaren.  
- Resultatet visas som en responsiv lista med bilder på sidan, utan att sidan behöver laddas om.  

Detta program demonstrerar användning av JSONP för att sända och hämta information till/från en annan webbserver och visar svaret för användaren utan omladdning av sidan.  
*/

document.addEventListener('DOMContentLoaded', function () {
    const tag = 'dog';
    const apiKey = '925692584b0177aebad278195c8d4862';
    const results = document.querySelector('#resultat');

    //Funktion för att initiera JSONP-förfrågan
    function fetchFlickrPhotos() {
        const script = document.createElement('script');
        const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&format=json&jsoncallback=handleFlickrResponse`;

        script.src = url;
        document.body.appendChild(script);
    }

    //Callback-funktion som hanterar svaret från Flickr API
    window.handleFlickrResponse = function (data) {
        if (data && data.photos && data.photos.photo) {
            data.photos.photo.forEach(photo => { //finns datan så iterera genom listan
                createPhotoCard(photo); //Bygg varje foto som ett kort
            });
        } else {
            console.error('Inga bilder hittades.');
            results.textContent = 'Inga bilder hittades.';
        }
    };

    //Funktion för att bygga HTML-strukturen
    function createPhotoCard(photo) {
        const photoCard = document.createElement('article');
        photoCard.classList.add('photo-card');

        const photoImage = document.createElement('img');
        photoImage.src = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`;
        photoImage.alt = photo.title;
        photoImage.classList.add('photo-img');

        const photoTitle = document.createElement('h2');
        photoTitle.textContent = photo.title || 'Okänd titel';

        //Bygg strukturen
        photoCard.appendChild(photoImage);
        photoCard.appendChild(photoTitle);
        results.appendChild(photoCard);
    }

    //Kör när sidan laddas
    fetchFlickrPhotos();
});
