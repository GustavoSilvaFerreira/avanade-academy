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

var numerosSorteados = [];

var sortear = document.getElementById('sortear');

sortear.addEventListener('click', function(event) {
	var random = null;

	if(numerosSorteados.length === 10) {
		numerosSorteados = [];
	}

	do {
		random = Math.floor(Math.random() * 10);
	} while(numerosSorteados.indexOf(random) !== -1);
	
	numerosSorteados.push(random);

	var exibir = document.getElementById('exibir');
	exibir.innerHTML = "";

	if(frutas[random]) {
		var img = document.createElement('img');
		img.setAttribute('src', 'img/' + frutas[random]);
		img.style.width = '130px';
		exibir.appendChild(img);
	}
});