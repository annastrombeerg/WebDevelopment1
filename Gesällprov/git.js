/*
Detta JavaScript-program hanterar dynamisk hämtning och visning av GitHub-projekt på en portfoliosida.  
Programmet låter användaren interagera med sidan genom att:  
- Hämta alla publika repositories från användaren 'annastrombeerg' via GitHub API med AJAX.  
- För varje repository försöker programmet hämta en `Summary.md`-fil som innehåller en projektbeskrivning och en bild.  
- Om `Summary.md` hittas, extraheras projektbild och beskrivning och läggs till på sidan.  
- Om `Summary.md` saknas, visas en standardbild och GitHub-repotitel med beskrivning (om sådan finns på GitHub).  
- Resultatet presenteras i en dynamisk lista med projekt på portfoliosidan.  

Detta demonstrerar praktisk användning av AJAX (`XMLHttpRequest`) för att hämta och uppdatera information på sidan utan att ladda om den.  
*/

document.addEventListener('DOMContentLoaded', function () {
    const username = 'annastrombeerg';
    const project = document.querySelector('#projects') || document.querySelector('#projectsHome');    ;

    //Funktion för att hämta alla repositories från GitHub API
    function fetchGit() {
        const request = new XMLHttpRequest();
        const url = `https://api.github.com/users/${username}/repos`;

        request.open('GET', url, true);  //Öppna en GET-förfrågan
        request.onreadystatechange = function () {
            if (request.readyState === 4) {  //När förfrågan är klar
                if (request.status === 200) {  //Om statusen är 200 (OK)
                    const repos = JSON.parse(request.responseText);
                    repos.forEach(repo => {
                        fetchSummary(repo);  //Hämta Summary.md för varje repo
                    });
                } else {
                    console.error('Could not load repos from GitHub');
                }
            }
        };
        request.send();  //Skicka förfrågan
    }

    //Funktion för att hämta Summary.md för varje repo
    function fetchSummary(repo) {
        const request = new XMLHttpRequest();
        const url = `https://api.github.com/repos/${username}/${repo.name}/contents/Summary.md`;

        request.open('GET', url, true);
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                const projectItem = document.createElement('article');
                projectItem.classList.add('project-item');

                if (request.status === 200) {
                    const summaryData = JSON.parse(request.responseText);
                    const summaryText = atob(summaryData.content);  //Base64-dekodning

                    //Extrahera bild och beskrivning från Summary.md
                    const imgMatch = summaryText.match(/!\[.*?\]\((.*?)\)/);
                    const imgSrc = imgMatch ? imgMatch[1] : '/My-Portfolio/images/project-placeholder.svg';
                    const description = summaryText.split('![')[0].trim() || 'No description available';

                    buildProject(projectItem, imgSrc, repo.name, description, repo.html_url);
                } else {
                    //Om Summary.md saknas, fallback
                    buildProject(
                        projectItem,
                        '/My-Portfolio/images/project-placeholder.svg',
                        repo.name,
                        repo.description || 'No description available',
                        repo.html_url
                    );
                }
                project.appendChild(projectItem);
            }
        };
        request.send();
    }

    //Funktion för att bygga HTML-strukturen
    function buildProject(container, imgSrc, title, description, link) {
        const projectImage = document.createElement('img');
        projectImage.src = imgSrc;
        projectImage.alt = title;
        projectImage.classList.add('project-img');

        const projectTitle = document.createElement('h2');
        projectTitle.textContent = title;

        const projectDescription = document.createElement('p');
        projectDescription.textContent = description;

        const projectLink = document.createElement('a');
        projectLink.href = link;
        projectLink.target = '_blank';
        projectLink.textContent = 'Go To GitHub';

        //Bygg strukturen
        container.appendChild(projectImage);
        container.appendChild(projectTitle);
        container.appendChild(projectDescription);
        container.appendChild(projectLink);
    }

    //Kör när sidan laddas
    fetchGit();
});
