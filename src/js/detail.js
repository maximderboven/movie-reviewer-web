import * as restClient from './restClient.js';
import {Movie} from './Movie.js';
import {getMovies} from "./restClient.js";

export default function initDetail () {
    document.querySelector('#errorlog-detail').innerHTML = '';
    loadMovies()
    var x = document.getElementById('movie-option');
    x.addEventListener("change", function() { loadMovie() });
    deleteMovie();
    editMovie();
    newMovieOpenen();
}

function loadMovies() {
    let x = document.getElementById('movie-option');
    restClient
        .getMovies()
        .then(function (responseData) {
            x.options.length = 0;
            for (let i = 0; i < responseData.length; i++) {
                let option = document.createElement("option");
                option.value = responseData[i].id;
                option.text = responseData[i].id + " - " + responseData[i].title;
                x.add(option);
            }
            loadMovie()
        })
        .catch(function (e) {
            document.querySelector('#errorlog-detail').innerHTML = 'ERROR ' + e;
        });
}


function deleteMovie() {
    document.querySelector('#delete').addEventListener('click', function (e) {
        restClient
            .deleteMovie(document.querySelector('#bestaand-id').value)
            .then(function (responseData) {
                document.querySelector('#errorlog-detail').innerHTML =
                    'Deleted movie succesfully';
                loadMovies()
            })
            .catch(function (e) {
                document.querySelector('#errorlog-detail').innerHTML = 'ERROR ' + e;
            });
    });
}

function editMovie(){
    document.querySelector('#edit').addEventListener('click', function (event) {
        var id = document.querySelector('#bestaand-id').value
        var title = document.querySelector('#bestaand-title').value
        var runtime = document.querySelector('#bestaand-runtime').value
        var releasedate = document.querySelector('#bestaand-releasedate').value
        var plot = document.querySelector('#bestaand-plot').value
        var comingsoon = document.querySelector('#bestaand-commingsoon').checked
        var type = document.querySelector('#bestaand-type').value
        var poster = document.querySelector('#poster-bestaand').src;

        restClient
            .putMovie(id,new Movie(comingsoon,title,releasedate,runtime,type,plot,poster,id))
            .then(function (responseData) {

                document.querySelector('#errorlog-detail').innerHTML =
                    'Edited ' + responseData.title + ' succesfully';
            })
            .catch(function (e) {
                document.querySelector('#errorlog-detail').innerHTML = 'ERROR ' + e;
            });
    });
}

function newMovieOpenen(){
    document.querySelector('#new').addEventListener('click', function (event) {
        document.querySelector('#nav-new-tab').click()
    });
}

export function loadMovie() {
    restClient
        .getMovie(document.getElementById('movie-option').value)
        .then(function (responseData) {
            document.querySelector('#bestaand-id').value = responseData.id;
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
            document.querySelector('#errorlog-detail').innerHTML = 'ERROR ' + e;
        });
}
