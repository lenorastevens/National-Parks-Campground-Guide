export default class Park {
   
    constructor(park) {
        this.data = park;
        this.SlideIndex = 1;   
    }    

    displayParkDetails(){
        const parkCard = document.querySelector('.park-info');
        parkCard.innerHTML = '';
        const parkTemplate = `
            <div class="slideshow-container">
                <a class="prevSlide" href="#">&#10094;</a>
                ${this.generateSlidesShowItems()}
                <a class="nextSlide" href="#">&#10095;</a>
            </div>
            <br>
            <div style="text-align:center">
                ${this.generateDots()}
            </div>
            <div><h2>${this.data.name}</h2></div>
            <a class="links" href="${this.data.url}" target="blank">Directions</a>
            <a class="links" href="${this.data.reservationUrl}" target="blank">Reservations</a>
            <a class="links" href="${this.data.regulationsurl}" target="blank">Plan Your Visit</a>
            <p>${this.data.fees[0].title}: $${this.data.fees[0].cost}</p>
            <p>${this.data.description}</p>

        `;

        parkCard.innerHTML = parkTemplate;

        //get table to display
        const campTable = this.generateCampTable();
        parkCard.appendChild(campTable);

        this.runCampSlides();
    }
    
    generateSlidesShowItems() {
        return this.data.images.map((image, index) =>` 
        <div class="mySlides fade">
            <div class="numbertext">${index + 1} / ${this.data.images.length}</div>
            <img src="${image.url}" alt="${image.altText}" style="width:100%">
            <div class="text">${image.altText}</div>
        </div>
        `).join('');
    }
    generateDots() {
        return this.data.images.map((image, index) =>`
        <span id="${image.title}" class="dot" ></span>
        `).join('');
    }

    generateCampTable() {
        // process the data to display in the campsite table
        let table = document.createElement('table');
        table.className = "camp-sites";

        //head and header cells
        let thead = table.createTHead();
        let headerRow = thead.insertRow();

        let headerCell0 = document.createElement('th');
        headerCell0.textContent = 'TOTAL SITES:';
        headerRow.appendChild(headerCell0);

        let headerCell1 = document.createElement('th');
        headerCell1.textContent = 'Electric Hookups:';
        headerRow.appendChild(headerCell1)

        let headerCell2 = document.createElement('th');
        headerCell2.textContent = 'RV Only:';
        headerRow.appendChild(headerCell2)

        let headerCell3 = document.createElement('th');
        headerCell3.textContent = 'Tent Only:';
        headerRow.appendChild(headerCell3)

        let headerCell4 = document.createElement('th');
        headerCell4.textContent = 'Walk or Boat To:';
        headerRow.appendChild(headerCell4)

        let headerCell5 = document.createElement('th');
        headerCell5.textContent = 'Group';
        headerRow.appendChild(headerCell5)

        let headerCell6 = document.createElement('th');
        headerCell6.textContent = 'Horse & Other:';
        headerRow.appendChild(headerCell6)

        // table rows 
        let tbody = table.createTBody();       
        let bodyRow = tbody.insertRow();

        bodyRow.insertCell(0).textContent = this.data.campsites.totalSites;
        bodyRow.insertCell(1).textContent = this.data.campsites.electricalHookups;
        bodyRow.insertCell(2).textContent = this.data.campsites.rvOnly;
        bodyRow.insertCell(3).textContent = this.data.campsites.tentOnly;
        bodyRow.insertCell(4).textContent = this.data.campsites.walkBoatTo;
        bodyRow.insertCell(5).textContent = this.data.campsites.group;
        
        const horse = parseInt(this.data.campsites.horse);
        const other = parseInt(this.data.campsites.other);
        const horseAndOtherSum = horse + other;
        bodyRow.insertCell(6).textContent = horseAndOtherSum.toString();

        return table;
    
    }

    runCampSlides() {
        const prevSlideBtn = document.querySelector('.prevSlide');
        const nextSlideBtn = document.querySelector('.nextSlide');
        const dots = document.querySelectorAll('.dot');

        prevSlideBtn.addEventListener('click', () => this.plusSlides(-1));
        nextSlideBtn.addEventListener('click', () => this.plusSlides(1));
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.currentSlide(index + 1));
        });

        this.showSlides();
    }

    plusSlides(n) {
        this.showSlides(this.SlideIndex += n);
    }

    currentSlide(n) {
        this.showSlides(this.SlideIndex = n);
    }

    showSlides() {
        let i;
        let slides = document.getElementsByClassName('mySlides');
        let dots = document.getElementsByClassName('dot');
        if (this.SlideIndex > slides.length) {this.SlideIndex = 1}
        if (this.SlideIndex < 1) {this.SlideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for ( i= 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[this.SlideIndex - 1].style.display = "block";
        dots[this.SlideIndex - 1].className += " active";
    }   
}