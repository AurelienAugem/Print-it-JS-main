
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
];

/** Chemin d'accès aux images */
let sourceImg = "./assets/images/slideshow/";

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

/** Récupération des flèches du slider dans des variables */
let leftArrow = document.querySelector('#banner .arrow_left');
let rightArrow = document.querySelector('#banner .arrow_right');

/** Génération de la <div> contenant les bullet points */
const slideDots = document.createElement('div');
slideDots.className = "dots";
mainBanner.appendChild(slideDots);

/** Génération de la balise <img> */
const slideImage = document.createElement('img');
slideImage.setAttribute("alt", "Banner Print-it");
slideImage.className = "banner-img";
mainBanner.appendChild(slideImage);
/** Génération de la balise <p> */
const slideText = document.createElement('p');
mainBanner.appendChild(slideText);

/** Varaible récupérant l'élément ayant la classe CSS "dots" contenant les bullet points*/
let bulletPoints = document.querySelector('.dots');

/** Initialisation de l'index */
let index = 0;
let imgName = slides[index].image;
let imgText = slides[index].tagLine;
slideImage.src = sourceImg + imgName;
slideText.innerHTML = imgText;

/** Affichage des bullet Points en fonction du nombre de slides */
for(let i=0; i < slides.length; i++){
	/** Création d'un <span> */
	const bPoint = document.createElement("span");
	/** La classe "dot" est associé à l'élément précédemment créer */
	bPoint.className = "dot";
	bPoint.setAttribute("id", i);
	/** Le <span> est positionné dans l'élément parent  */
	bulletPoints.appendChild(bPoint);
	
}

/** Parcours des slide vers la droite */
function slideDroite(){
	
	if(index < slides.length - 1){
		index++;
	}
	else {
		index = 0;
	}

	let imgName = slides[index].image;
	let imgText = slides[index].tagLine;
	slideImage.src = sourceImg + imgName;
	slideText.innerHTML = imgText;
	let bPoint = document.querySelectorAll('.dot');
	let selectedPoint = document.getElementById(index);
	bPoint.classList.remove("dot_selected");
	selectedPoint.classList.add("dot_selected");
	console.log("L'image affichée est la n° " + index + " " + imgName + " " + "Source : " + slideImage.src);
}
/** Parcours des slide vers la gauche */
function slideGauche(){
	
	if(index > 0){
		index--;
	}
	else {
		index = slides.length - 1;
	}

	let imgName = slides[index].image;
	let imgText = slides[index].tagLine;
	slideImage.src = sourceImg + imgName;
	slideText.innerHTML = imgText;
	let bPoint = document.querySelectorAll('.dot');
	let selectedPoint = document.getElementById(index);
	bPoint.classList.remove("dot_selected");
	selectedPoint.classList.add("dot_selected");
	console.log("L'image affichée est la n° " + index + " " + imgName + " " + "Source : " + slideImage.src);
}

/** Fonction de test de fonctionnement des flèches */
function testLeftArrow(){
	console.log("Flèche gauche fonctionne");
}
function testRightArrow(){
	console.log("Flèche droite fonctionne");
}

/** Event listener sur les boutons */
leftArrow.addEventListener('click', slideGauche);
leftArrow.addEventListener('click', testLeftArrow);
rightArrow.addEventListener('click', slideDroite);
rightArrow.addEventListener('click', testRightArrow);