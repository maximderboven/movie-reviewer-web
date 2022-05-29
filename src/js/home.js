import * as restClient from './restClient.js';
import { Movie } from './Movie.js';

export default function initHome() {
    cardElements();
}

var arrayMovies=[];
function cards(data){
    var card = document.querySelector("#cards");
    card.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
        var kaart = ` <div class="card" style="width: 18rem; margin:15px">
       <img class="card-img-top" src="${data[i].poster}" alt="Geen foto">
       <div class="card-body">
         <h5 class="card-title">${data[i].title}</h5>
         <p class="card-text">${data[i].released}</p>
         <p class="card-text">${data[i].runtime}min.</p>
       </div>
     </div>`;
        card.innerHTML += kaart;
    }
}
async function cardElements(){
    restClient
        .getMovies()
        .then(function (responseData) {
            arrayMovies.length = 0
            for (let i = 0; i < responseData.length; i++) {
                var movie = Object.assign(new Movie,responseData[i]);
                arrayMovies.push(movie);
                cards(arrayMovies);
            }
        })
        .catch(function (e) {
            console.log('ERROR' + e);
        });
}
