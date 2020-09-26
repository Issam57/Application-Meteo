let ville = 'Paris';
recevoirTemperature(ville);

let btn = document.querySelector('#changer');
    btn.addEventListener('click', () => {
    ville = prompt("Entrez le nom d'une ville");
    recevoirTemperature(ville);
    })

function recevoirTemperature(ville) {
const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=01f174883d111965a32e07742a9cc2a3&units=metric';

let requete = new XMLHttpRequest();
requete.open('GET', url);
requete.responseType = 'json';
requete.send();

requete.onload = function() {
    if (requete.readyState === XMLHttpRequest.DONE) {
        if (requete.status === 200) {
        let reponse = requete.response; // on stock la réponse
        let temperature = reponse.main.temp;
        let ville = reponse.name;

        document.querySelector('#temperature_label').textContent = temperature;
        document.querySelector('#ville').textContent = ville;
        }
        else {
            alert('Un problème est intervenu, merci de revenir plus tard.');
        }
        }
    }
}

let dateAujourdhui = new Date();

dateAujourdhui.toLocaleDateString(navigator.language, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
})

let date = document.querySelector('#date').textContent = dateAujourdhui