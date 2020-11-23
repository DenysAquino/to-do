const mensagemErro = document.querySelector('.mensagem-erro')
const paragrafoErro = document.querySelector('.p-erro')

const erros = {
    produto: 'Item digitado inválido!',
    quantidade: 'Quantidade digitada inválida!',
    produtoEQuantidade: 'Produto e quantidade Inválidos!',
    convidado: 'Nome de convidado invállido!',
    estudo: 'Valor digitado inválido!'
}



function exibeMensagemErro(erros) {
    mensagemErro.style.display = 'flex'
    paragrafoErro.textContent = erros
    setTimeout(() => {
        mensagemErro.style.display = 'none'
    }, 3000);
    
    console.log('Erro valor digitado inválido!')
}

mensagemErro.addEventListener('click', function(){
    mensagemErro.style.display = 'none'
})

