var conteudo = document.getElementById('conteudo');

conteudo.addEventListener('keyup', function(event) {
	var exibir = document.getElementById('exibir');
	exibir.innerHTML = "";

	var valor = this.value;

	var h1 = document.createElement('h1');
	var texto = document.createTextNode(valor);

	h1.appendChild(texto);

	exibir.appendChild(h1);
});