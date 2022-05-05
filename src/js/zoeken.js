import * as restClient from './restClient.js';
import { Movie } from './Movie.js';
import { details } from './detail.js';

var arrayMovies=[];
export function init(){
    tableElements();
    searchField();
}

function searchField(){
    document.querySelector('#searchField').addEventListener('input', ()=>{
        var value = document.getElementById("searchField").value;
        var data = searchTable(value, arrayMovies);

        createtable(data);
    })
}

function tableElements(){
    restClient
        .getMovies()
        .then(function (responseData) {

            console.log(responseData)

            for (let i = 0; i < responseData.length; i++) {
                var Movies = Object.assign(new Movie,responseData[i]);
                arrayMovies.push(Movies);

                createtable(arrayMovies);

            }

        })
        .catch(function (e) {
            document.querySelector('#feedback3').innerHTML = 'Error bij GET:' + e;
        });
}

function createtable(data){
    var tbody = document.querySelector("#tbody");

    tbody.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
        var row = `<tr> <th id="item${i}">
                             ${data[i].id}
                             </th><td id="item${i}">
                             ${data[i].title}
                             </td><td id="item${i}">
                             ${data[i].released}
                             </td><td id="item${i}">
                             ${data[i].runtime}
                             </td><td id="item${i}">
                             ${data[i].type}
                             </td><td id="item${i}">
                             ${data[i].comingSoon}
                             </td></tr>`;
        tbody.innerHTML += row;

    }

}
function searchTable(value,data){
    var filterData = [];
    var numberData = [];

    for(let i = 0;i<data.length;i++){
        value = value.toUpperCase();
        var name = data[i].title.toUpperCase();
        var postcode = data[i].runtime.toString();


        if(name.includes(value)){
            filterData.push(data[i]);

        }
        if(postcode.includes(value)){
            numberData.push(data[i]);

        }

    }
    if(value.match(/[0-9]+/)){
        console.log("number");
        return numberData;
    }
    else{
        console.log("string")
        return filterData;
    }
}
init();