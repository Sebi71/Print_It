/* ** */
/* DECLARATION OF GLOBAL VARIABLES */
/* ** */

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

// Arrows path
const arrowLeft = document.querySelector(".arrow_left");  
const arrowRight = document.querySelector(".arrow_right");

// Dots path
const parentDot = document.querySelector(".dots");

// Slides path
const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");

let indexSlide = 0;  //index slide default
const nbSlide = slides.length;  //number slide


/* ** */
/* DECLARATION OF FUNCTIONS */
/* ** */

// Update Dot_selected
const updateDotSelected = () => {						
	const dots = document.querySelectorAll(".dot");		//selection class "dot"
	dots.forEach((dot, i) => {						
        if (i === indexSlide) {								
            dot.classList.add("dot_selected");		//add "dot_selected" if i = indexSlide			
        } else {
			if (dot.classList.contains("dot_selected")) {
				dot.classList.remove("dot_selected") 	//remove "dot_selected" if "dot_selected" present
			}
		}
    });	
}

// Update current slide
const updateSlide = () => {
	bannerImg.src = `./assets/images/slideshow/${slides[indexSlide].image}`; 
	bannerText.innerHTML = slides[indexSlide].tagLine;						
	updateDotSelected();	//function callback					
}

/* ** */
/* DECLARATION OF EVENT LISTENERS */
/* ** */
		
// Elements slide
// Change slide right with function addEventListener click
arrowRight.addEventListener ("click", () => {	
	indexSlide ++;		//incrementation								
	if (indexSlide > nbSlide -1) {	//return to first slide if indexSlide > slide number		
		indexSlide = 0;
	}
	updateSlide();	//function callback								 
})

// Change slide left with function addEventListener click
arrowLeft.addEventListener ("click", () => {		
	indexSlide --;		//decrementation						
	if (indexSlide < 0) {	//return to last slide if indexSlide < 0									
		indexSlide = nbSlide -1;
	}
	updateSlide()	//function callback											
})



/* ** */
/* CODE SEQUENCE */
/* ** */

// Elements dots
// Add bullet point
for (i=0; i < nbSlide; i ++) {					
	const dot = document.createElement("div"); 	//create element div
	dot.classList.add("dot");	//add class "dot" to div
	if(i === indexSlide) {						
		dot.classList.add("dot_selected");	//add class "dot_selected" to div if i = indexSlide
	}
	parentDot.appendChild(dot); 	//add "dot" to the container
}