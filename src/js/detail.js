import * as restClient from './restClient.js';
import {Movie} from './Movie.js';

function deleteMovie() {
    document.querySelector('#delete').addEventListener('click', function (e) {
        console.log('Trying DELETE!');
        restClient
            .deleteMovie(document.querySelector('#id').value)
            .then(function (responseData) {
                // response zal leeg zijn
                document.querySelector('#feedback1').innerHTML =
                    'DELETE gelukt:' + JSON.stringify(responseData);
            })
            .catch(function (e) {
                document.querySelector('#feedback1').innerHTML = 'Error bij DELETE:' + e;
            });
    });
}

document.querySelector('#nieuwefilm').addEventListener('click', function (event) {

    var title = document.querySelector('#nieuw-title').value
    var runtime = document.querySelector('#nieuw-runtime').value
    var poster = document.querySelector('#nieuw-poster').value;
    var releasedate = document.querySelector('#nieuw-releasedate').value
    var plot = document.querySelector('#nieuw-plot').value
    var comingsoon = document.querySelector('#nieuw-commingsoon').checked
    var type = document.querySelector('#nieuw-type').value

    console.log(title);
    restClient
        .postMovie(new Movie(20,comingsoon,title,releasedate,runtime,type,plot,poster))
        .then(function (responseData) {

            document.querySelector('#feedback1').innerHTML =
                'PUT gelukt:' + JSON.stringify(responseData);
        })
        .catch(function (e) {
            document.querySelector('#feedback1').innerHTML = 'Error bij PUT:' + e;
        });
});


document.querySelector('#pills-bestaand-tab').addEventListener('click', function (e) {
    bestaandMovie();
});

function bestaandMovie() {
    restClient
        .getMovie(Math.floor(Math.random() * 15))
        .then(function (responseData) {
            document.querySelector('#bestaand-title').value = responseData.title;
            document.querySelector('#bestaand-runtime').value = responseData.runtime;
            document.querySelector('#poster-bestaand').src = responseData.poster;
            document.querySelector('#bestaand-releasedate').value = responseData.released;
            document.querySelector('#bestaand-plot').value = responseData.plot;
            document.querySelector('#bestaand-type').value = responseData.type;
            if (responseData.comingSoon) {
                document.querySelector('#bestaand-commingsoon').checked = true;
            } else {
                document.querySelector('#bestaand-commingsoon').checked = false;
            }
        })
        .catch(function (e) {
            document.querySelector('#feedback1').innerHTML = 'Error bij GET:' + e;
        });
}