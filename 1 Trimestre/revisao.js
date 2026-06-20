/*Baseado no objeto produtos do revisao.js. Crie um objeto estoque com pelo menos 3 produtos (cada um com nome e preco). Escreva uma função buscarProduto(cod) que:
Recebe um código como argumento
Retorna o produto se existir
Retorna "Produto não encontrado" se não existir*/

const produtos ={
	"123": {"nome: ": "Suco de tamarindo","preco: ": 10.50},
	"456": {"nome: ": "Guarana JESUS","preco: ": 20.50},
	"789": {"nome: ": "Barreado de Pato-Branco","preco: ": 1.50},
	"147": {"nome: ": "Goiaba","preco: ": 1.50},
};
const estoque={
	"123": {"nome: ": "Suco de tamarindo", "preco: ":10.50,"quantidade: ":200},
	"456": {"nome: ": "Guarana JESUS", "preco: ":20.50, "quantidade:":180},
	"789": {"nome: ":"Barreado de Pato-Branco","preco:":1.50,"quantidade: ":50},
	"147": {"nome: ":"Goiabada","preco: ":1.50,"quantidade: ":60},
};
let carrinho = [];

const audio = new Audio("ai-que-delicia-mickey.mp3");

window.onload = () => {
	document.getElementById("cod").focus();
}
function addProduto(){
	const codElemento = document.getElementById("cod");
	const qtdElemento = document.getElementById("qtd");
	
	const codValue = codElemento.value
	const qtdValue = qtdElemento.value

	if(!produtos[codValue]){
		alert("Produto não Cadastrado");
		return;
	}
	const produtoBase = produtos[codValue];
	const item = {
		nome: produtoBase.nome,
		preco: produtoBase.preco,
		quantidade: qtdValue,
	    subtot: produtoBase.preco * qtdValue,
		};
	
	
	
	carrinho.push(item);
	audio.currentTime = 0;
	audio.play();
	atualizaTela();



};
function atualizaTela(){
	let total = 0;
	const list = document.getElementById("lista");
		carrinho.forEach((item, index) =>{
			total += item.subtot;
			const li = document.createElement("li");
			li.className = "list-group-item"
			li.innerHTML = `<div>${item.nome} ${item.quantidade} X ${item.preco} = ${item.subtot}</div>`;
			lista.appendChild(li);
		
		});
		
	}
function buscarProduto(cod){
 if (!estoque[cod]){
	return "produto não encontrado"
}
return estoque[cod]
};