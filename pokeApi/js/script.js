const GIT_URL = "https://api.github.com/users/";

let complemento = 'GustavoSilvaFerreira';

let fightButton = document.getElementById('fight-button');
fightButton.addEventListener('click', function() {
	let inputBattle1 = document.getElementById('input-battle1').value;
	let inputBattle2 = document.getElementById('input-battle2').value;

	
});

/*
function getAPI(method, url, callback) {
	let xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			let json = JSON.parse(xhttp.responseText);
			callback(json);
		}
	}

	xhttp.open("GET", `${API_END_POINT} pokemon`);
	xhttp.send();
}

var xhttp = new XMLHttpRequest();
function listarPokemons() {
	xhttp.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			var pok = document.getElementById('pokemons');

			var json = JSON.parse(xhttp.responseText);
			console.log(json);
			json.results.map(function(e) {
				var p = document.createElement('p');
				p.classList.add('abilities');
				p.setAttribute('data-url', e.url);
				p.style.cursor = 'pointer';
				p.innerText = e.name;
				pok.appendChild(p);
			});
		}
	}


	xhttp.open("GET", `${ENDPOINT} pokemon`);
	xhttp.send();
}

listarPokemons();

var abilities = document.getElementsByClassName('abilities');
abilities.addEventListener('click', function() {
	console.log(this);
});

*/