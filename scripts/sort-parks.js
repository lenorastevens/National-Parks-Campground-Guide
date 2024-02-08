
export default function sortParksList(parksList) {
    const parksElement = document.querySelector('.slide');
    parksElement.innerHTML = '';

    parksList.forEach(function (park) {
        const template = `
        <div class="item" style="background-image: url(${park.images[0].url});">
            <div class="content">
                <h4 class="name">${park.name}</h4>
                
                <button>See More</button>
            </div>
        </div>
        `;
        parksElement.innerHTML += template;
    });

    
    // console.log(template);
    

}


// parksList.forEach(function (park) {

    // const template = `
    //     <div class="item" style="background-image: url(${park.images[0]});">
    //         <div class="content">
    //             <h4 class="name">${park.name}</h4>
    //             <div class="des">${park.description}</div>
    //             <button class="more">See More</button>
    //         </div>
    //     </div>
    //     `;

    
//     parksElement.innerHTML += template;
// });

// let parkDiv = document.createElement('div');
        // parkDiv.classList.add('camp-slide');

        // let h3 = document.createElement('h3');
        // h3.classList.add('campName');
        // h3.innerText = park.name;

        // let img = document.createElement('img');
        // img.classList.add('parksimg');
        // if (park.images && park.images.length > 0) {
        //     img.src = park.images[0].url;
        // } else {
        //     // Handle case where there are no images
        //     img.src = 'https://www.nps.gov/common/uploads/structured_data/69162F54-D4AF-8695-A42F97A8F9774C19.jpg'; // Provide a fallback image URL
        // }

        
        // parkDiv.appendChild(h3);
        // parkDiv.appendChild(img);
        
        // console.log(h3);
        // parksElement.appendChild(parkDiv);    