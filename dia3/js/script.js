function dispararFoguete() {
	var foguete = document.getElementById('imagemFoguete');
	var posicao = foguete.offsetTop;

	var intervalo = setInterval(function() {
		if(posicao > 0) {
			posicao --;
			foguete.style.top = posicao + 'px';
		} else {
			clearInterval(intervalo);
			alert('Foguete lançado com sucesso!!!');
		}
	}, 3);
}

var start = document.getElementById('clicou');
start.addEventListener('click', function() {
	var tempo = document.getElementById('tempo').value;
	if(tempo > 0) {
		var IntervalId = setInterval(function() {
			var p = document.getElementById('temporizador');
			p.innerHTML = tempo;

			if(tempo === 0) {
				clearInterval(IntervalId);
				dispararFoguete();
			}

			tempo--;
		}, 1000);
	}
});