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
// Change slide left
arrowLeft.onclick = function() {
	indexSlide --;
	if (indexSlide < 0) {
		indexSlide = nbSlide -1;
	}
	bannerImg.src = `./assets/images/slideshow/${slides[indexSlide].image}`;
	bannerText.innerHTML = slides[indexSlide].tagLine;
}

// Change slide right
arrowRight.onclick = function() {
	indexSlide ++;
	if (indexSlide > nbSlide -1) {
		indexSlide = 0;
	}
	bannerImg.src = `./assets/images/slideshow/${slides[indexSlide].image}`;
	bannerText.innerHTML = slides[indexSlide].tagLine;
	

}
