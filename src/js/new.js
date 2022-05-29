import * as restClient from "./restClient.js";
import {Movie} from "./Movie.js";
import initZoeken from "./zoeken.js";
import initHome from "./home.js";
import initDetail from "./detail.js";

export default function initNew() {
    NewMovie();
    document.querySelector('#errorlog-zoeken').innerHTML = '';
}

function NewMovie() {
document.querySelector('#nieuwefilm').addEventListener('click', function (event) {
    var title = document.querySelector('#nieuw-title').value
    var runtime = document.querySelector('#nieuw-runtime').value
    var poster = document.querySelector('#nieuw-poster').value;
    var releasedate = document.querySelector('#nieuw-releasedate').value
    var plot = document.querySelector('#nieuw-plot').value
    var comingsoon = document.querySelector('#nieuw-commingsoon').checked
    var type = document.querySelector('#nieuw-type').value
    restClient
        .postMovie(new Movie(comingsoon,title,releasedate,runtime,type,plot,"https://" + poster))
        .then(function (responseData) {
            document.querySelector('#errorlog-zoeken').innerHTML =
                "Added movie " + responseData.title + " succesfully.";
            document.querySelector('#nieuw-title').value = ""
            document.querySelector('#nieuw-runtime').value = ""
            document.querySelector('#nieuw-poster').value = ""
            document.querySelector('#nieuw-releasedate').value = ""
            document.querySelector('#nieuw-plot').value = ""
            initZoeken()
            initHome()
            initDetail()
        })
        .catch(function (e) {
            document.querySelector('#errorlog-zoeken').innerHTML = 'ERROR' + e;
        });
});
}
