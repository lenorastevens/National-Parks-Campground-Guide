import { API_KEY } from "./config.js";
import sortParksList from "./sort-parks.js";  


let stateCode = "";
document.querySelector("#state").addEventListener("input", function () {
    stateCode = this.value;
    const url = `https://developer.nps.gov/api/v1/campgrounds?stateCode=${stateCode}&api_key=${API_KEY}`
    getParks(url);
}); 

//empty list container for the functions to draw on after list has been retrieved and processed
let parksList = [];


// fetch function that takes the state code and NPS url and gets a list of arrays with parks information
let parks = null;
async function getParks(url) {
    const response = await fetch(url);
    if (response.ok) {
        parks = await response.json();
        parksList = parks.data;
        console.log(parksList);
        sortParksList(parksList);
    }
}

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})