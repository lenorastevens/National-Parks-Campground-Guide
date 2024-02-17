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
    
        // clear park card each time new state is loaded
        const parkCard = document.querySelector(".park-info");
        parkCard.innerHTML = "";
        
        // check if state park list is empty
        if (parksList.length === 0) {
            const parksElement = document.querySelector('.slide');
            parksElement.innerHTML = ' No park data available to display for this state. ';
        } else {
            sortParksList(parksList);
        }
    }
}
