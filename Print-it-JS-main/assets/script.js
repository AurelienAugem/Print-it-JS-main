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
