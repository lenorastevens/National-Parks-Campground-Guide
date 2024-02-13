export default class Park {
   
    constructor(park) {
        this.data = park;   
    }    

    displayParkDetails(){
        const parkCard = document.querySelector('.park-info');
        const parkTemplate = `
            <div>
                <img class="park-img" src="${this.data.images[0].url}" alt="${this.data.name}">
            </div>
            <div><h2>${this.data.name}</h2></div>
        `;

        parkCard.innerHTML = parkTemplate;
    }
    
}