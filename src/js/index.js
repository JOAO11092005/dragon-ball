//passo 1 & 2 
const botoes = document.querySelectorAll('.botao');
const personagem = document.querySelectorAll('.personagem');

botoes.forEach(function(botao , indece){
	botao.addEventListener('click', function(){
		//passo 3 importante
		deseleciona()
        const botaoSelecionado = document.querySelector('.botao.selecionado');
		
		botaoSelecionado.classList.remove('selecionado')
		console.log(botaoSelecionado);

		botao.classList.add('selecionado');
		let selecao = personagem[indece].classList.add('selecionado')
		
		
	})
})


const deseleciona = function(){
	const personagemSelecionado = document.querySelectorAll(".personagem.selecionado");

	personagemSelecionado.forEach(function(selecionado){
		selecionado.classList.remove('selecionado')
	})
}