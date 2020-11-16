let listaDeConvidados = document.querySelector(".lista-convidados");
let botaoAdicionar = document.querySelector('.btn-adicionar');

let convidadoDigitado = document.querySelector('#input-convidado');
let convidados = document.querySelectorAll('.convidado')

let contador = 1;

let total = document.querySelector('.total')

botaoAdicionar.addEventListener('click', ()=>{

    if(convidadoDigitado.value === ''){
        return exibeMensagemErro(erros.convidado);
    }

    let convidado = document.createElement('div');
    convidado.classList.add('convidado')

    listaDeConvidados.appendChild(convidado)

    let pCount = document.createElement('p');
    let pConvidado = document.createElement('p')
    let bottonDelete = document.createElement('div')
    
    pConvidado.classList.add('name-convidado');
    pConvidado.textContent = convidadoDigitado.value;

    pCount.classList.add('count-convidado');
    pCount.textContent = contador;
    
    bottonDelete.classList.add('delete-item');
    bottonDelete.textContent = 'x'

    convidado.appendChild(pCount);
    convidado.appendChild(pConvidado);  
    convidado.appendChild(bottonDelete)

    convidadoDigitado.value = ''
    convidadoDigitado.focus()
    total.textContent = `Total: ${contador}`;
    contador++;
})
