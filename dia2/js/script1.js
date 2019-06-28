var btn = document.getElementById('btn');
btn.addEventListener('click', function(event) {
	var conteudo = document.getElementById('conteudo').value;
	var exibir = document.getElementById('exibir');
	exibir.innerHTML = "";

	var h1 = document.createElement('h1');
	var texto = document.createTextNode(conteudo);

	h1.appendChild(texto);

	exibir.appendChild(h1);
});