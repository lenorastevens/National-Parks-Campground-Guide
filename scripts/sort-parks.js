
export default function sortParksList(parksList) {
    const parksElement = document.querySelector('#parks');
    parksElement.innerHTML = '';

    parksList.forEach(function (park) {

        // const template = `
        // <section id="slider">
        //     <input type="radio" name="slider" id="s1"></input>
        //     <label for="s1" id="slide1">
        //         <img src="${images[0]}" height="100%" width="100%">
        //     </label>
        // </section>`;
                
    
        let parkDiv = document.createElement('div');
        parkDiv.classList.add('camp-slide');

        let h3 = document.createElement('h3');
        h3.classList.add('campName');
        h3.innerText = park.name;

        let img = document.createElement('img');
        img.classList.add('parksimg');
        if (park.images && park.images.length > 0) {
            img.src = park.images[0].url;
        } else {
            // Handle case where there are no images
            img.src = 'https://www.nps.gov/common/uploads/structured_data/69162F54-D4AF-8695-A42F97A8F9774C19.jpg'; // Provide a fallback image URL
        }

        
        parkDiv.appendChild(h3);
        parkDiv.appendChild(img);
        
        console.log(h3);
        parksElement.appendChild(parkDiv);    
    });
    
}

