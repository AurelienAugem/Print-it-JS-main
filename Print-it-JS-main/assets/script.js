
/** Bullet points */
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

/** Récupération de la bannière */
let mainBanner = document.querySelector('#banner');
mainBanner.innerHTML = "";

/** Génération des flèches de navigation */
const slideLeft = document.createElement('input');
slideLeft.setAttribute("type", "image");
slideLeft.setAttribute("src","./assets/images/arrow_left.png");
slideLeft.className = "arrow arrow_left";
mainBanner.appendChild(slideLeft);
const slideRight = document.createElement('input');
slideRight.setAttribute("type","image");
slideRight.setAttribute("src","./assets/images/arrow_right.png");
slideRight.className = "arrow arrow_right";
mainBanner.appendChild(slideRight);

/** Génération de la div contenant les bullet points */
const slideDots = document.createElement('div');
slideDots.className = "dots";
mainBanner.appendChild(slideDots);

const slideImage = document.createElement('img');
slideImage.setAttribute("alt", "Banner Print-it");
slideImage.className = "banner-img";
mainBanner.appendChild(slideImage);

const slideText = document.createElement('p');
slideImage.appendChild(slideText);



/** Varaible récupérant l'élément ayant la classe CSS "dots" contenant les bullet points*/
let bulletPoints = document.querySelector('.dots');

/** Affichage des bullet Points en fonction du nombre de slides */
for(let i=0; i < slides.length; i++){

	/** Création d'un <span> */
	const bPoint = document.createElement("span");
	/** La classe "dot" est associé à l'élément précédemment créer */
	bPoint.className = "dot";
	/** Le <span> est positionné dans l'élément parent  */
	bulletPoints.appendChild(bPoint);

}

/** Récupération des flèches du slider dans des variables */
let leftArrow = document.querySelector('#banner .arrow_left');
let rightArrow = document.querySelector('#banner .arrow_right');
/** Fonction de test de fonctionnement des flèches */
function testLeftArrow(){
	console.log("Flèche gauche fonctionne");
}
function testRightArrow(){
	console.log("Flèche droite fonctionne");
}

/** Event listener sur les boutons */
leftArrow.addEventListener('click', testLeftArrow);
rightArrow.addEventListener('click', testRightArrow);