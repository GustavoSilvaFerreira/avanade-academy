var frutas = {
	'abacaxi': 'abacaxi.jpg',
	'manga': 'manga.jpg',
	'pera': 'pera.jpg',
	'pessego': 'pessego.jpg',
	'uva': 'uva.jpg',
}

var conteudo = document.getElementById('conteudo');

conteudo.addEventListener('keyup', function(event) {
	var exibir = document.getElementById('exibir');
	exibir.innerHTML = "";

	var valor = this.value;

	for(fruta in frutas) {
		if(fruta === valor) {
			var img = document.createElement('img');
			img.setAttribute('src', 'img/' + frutas[valor]);
			img.style.width = '130px';
			exibir.appendChild(img);
		}
	}
});