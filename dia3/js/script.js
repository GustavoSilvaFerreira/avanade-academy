var screenHeight = screen.height;
var displayFlex = document.getElementById('displayFlex');
displayFlex.style.height = screenHeight;

function dispararFoguete() {
	var foguete = document.getElementById('foguete');
	var posicao = ['center','flex-start'];

	for(var i = 0; i < 2; i++) {
		foguete.style.alignItems = posicao[i];	
	}
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
				alert('Foguete lançado com sucesso!!!');
			}

			tempo--;
		}, 1000);
	}
});