const nEstrellas = 200;
				
let i = 0;
while (i < nEstrellas) {
	const estrella = document.createElement("i");

	estrella.style.left = Math.random() * window.innerWidth + "px";
	estrella.style.top = Math.random() * window.innerHeight + "px";

	const tamaño = Math.random() * 4;
	estrella.style.width = tamaño + "px";
	estrella.style.height = tamaño + "px";

	const duracionDelay = Math.random() * 2;
	estrella.style.animationDuration = duracionDelay + "s";
	estrella.style.animationDelay = duracionDelay + "s";

	document.querySelector("section").appendChild(estrella);

	i++;
}