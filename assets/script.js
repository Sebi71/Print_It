// Table img
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
		// Reusable variables
// Arrows
const arrowLeft = document.querySelector(".arrow_left")  
const arrowRight = document.querySelector(".arrow_right")

// Dots
const parentDot = document.querySelector(".dots")

// Slides
const bannerImg = document.querySelector(".banner-img")
const bannerText = document.querySelector("#banner p")

let indexSlide = 0  //index slide default
const nbSlide = slides.length  //number slide
console.log(nbSlide)

// Update Dot_selected
const updateDotSelected = (update) => {						//class dot_selected update function
	const dotSelected = document.querySelectorAll(".dot")	//element selection with class dot
	dotSelected.forEach((dot, i) => {						//loop that loops through all selected elements
        dot.classList.add("dot_selected");					//add dot_selected
        if (i !== indexSlide) {								//instruction if for i different indexSlide
            dot.classList.remove("dot_selected");			//remove class dot_selected
        }
    });	
}

		// Elements arrows
// Arrow Left
arrowLeft.addEventListener ("click", () => {
	console.log("Vous avez cliqué sur la flèche de gauche");  //listen arrow left
});

//Arrow Right
arrowRight.addEventListener ("click", () => {
	console.log("Vous avez cliqué sur la flèche de droite");  //listen arrow right
});


		// Elements dots
// Add bullet point
for (i=0; i < nbSlide; i ++) {					//instruction for
	const dot = document.createElement("div"); 	//create element div
	parentDot.appendChild(dot);					//add a nod as last child
	dot.classList.add("dot"); 					//add class dot to div
	if(i === indexSlide) {						//instruction if for full bullet point
		dot.classList.add("dot_selected") 		//add class dot_selected to div
	}
	console.log(i);
}


		// Elements slide
// Change slide right
arrowRight.onclick = function() {				//function for click right arrow
	indexSlide ++;								//slide next
	if (indexSlide > nbSlide -1) {				//return to first slide if indexSlide > slide number
		indexSlide = 0;
	}
	bannerImg.src = `./assets/images/slideshow/${slides[indexSlide].image}`; //image path
	bannerText.innerHTML = slides[indexSlide].tagLine;						 //text path
	updateDotSelected();
}

// Change slide left
arrowLeft.onclick = function() {				//function for click left arrow
	indexSlide --;								//slide back
	if (indexSlide < 0) {						//return to last slide if indexSlide < 0			
		indexSlide = nbSlide -1;
	}
	bannerImg.src = `./assets/images/slideshow/${slides[indexSlide].image}`; //image path
	bannerText.innerHTML = slides[indexSlide].tagLine;						 //text path
	updateDotSelected();
}