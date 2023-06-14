/** Récupération des flèches du slider dans des variables */
var leftArrow = document.querySelector('#banner .arrow_left');
var rightArrow = document.querySelector('#banner .arrow_right');
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

/** Varaible récupérant l'élément ayant la classe CSS "dots" contenant les bullet points*/
var bulletPoints = document.querySelector('.dots');
var slidePoints = document.querySelector('.banner-img');
/** Affichage des bullet Points en fonction du nombre de slides */
for(let i=0; i < slides.length; i++){

	/** Création d'un <span> */
	const bPoint = document.createElement("span");
	/** La classe "dot" est associé à l'élément précédemment créer */
	bPoint.className = "dot";
	/** Le <span> est positionné dans l'élément parent  */
	bulletPoints.appendChild(bPoint);

}
