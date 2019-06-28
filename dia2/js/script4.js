var frutas = [
	'abacaxi.jpg',
	'ameixa.jpg',
	'caju.jpg',
	'goiaba.jpg',
	'laranja.jpg',
	'manga.jpg',
	'melancia.jpg',
	'pera.jpg',
	'pessego.jpg',
	'uva.jpg',
];

var sortear = document.getElementById('sortear');

sortear.addEventListener('click', function(event) {
	var random = Math.floor(Math.random() * 10);

	var exibir = document.getElementById('exibir');
	exibir.innerHTML = "";

	if(frutas[random]) {
		var img = document.createElement('img');
		img.setAttribute('src', 'img/' + frutas[random]);
		img.style.width = '130px';
		exibir.appendChild(img);
	}
});