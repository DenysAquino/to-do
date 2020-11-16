let produtoDigitado = document.querySelector('#add-produto');
let quantidadeDigitada = document.querySelector('#add-quantidade');
let tipoDigitado = document.querySelector('#add-tipo');
let listaDeProdutos = document.querySelector('.lista-produtos');
let total = document.querySelector('.total');

const btnAdicionar = document.querySelector('.adicionar');
btnAdicionar.addEventListener('click', addProduto); 

function criaProduto () {

    if(quantidadeDigitada.value == '' 
        && produtoDigitado.value == '')return exibeMensagemErro(erros.produtoEQuantidade)
        
    if(produtoDigitado.value == '')return exibeMensagemErro(erros.produto)

    if(quantidadeDigitada.value == ''
        || quantidadeDigitada.value < 0)return exibeMensagemErro(erros.quantidade)

    let produtoTr = document.createElement('tr')
    produtoTr.classList.add('produtos-list')
    listaDeProdutos.appendChild(produtoTr)

    let produtoTd = document.createElement('td')
    produtoTr.appendChild(produtoTd)
    produtoTd.textContent = produtoDigitado.value

    let quantidadeTd = document.createElement('td')
    produtoTr.appendChild(quantidadeTd)
    quantidadeTd.textContent = `${quantidadeDigitada.value} ${tipoDigitado.value}`

    let bottonTd = document.createElement('td')
    produtoTr.appendChild(bottonTd)
    bottonTd.classList.add('delete-item')
    bottonTd.textContent = 'x'

} 

function addProduto () {
    
    criaProduto();

    let produtosList = document.querySelectorAll('.produtos-list');
    
    for(let i = 0; i < produtosList.length; i++){
        if(produtoDigitado.value !== '' || quantidadeDigitada.value !== ''){

        total.innerHTML = `Total: ${produtosList.length}`;

        produtoDigitado.value = '' ;
        quantidadeDigitada.value = '';
        produtoDigitado.focus();
        } 
    }
}   
