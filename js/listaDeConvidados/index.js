let listaDeConvidados = document.querySelector(".lista-convidados");
let botaoAdicionar = document.querySelector('.btn-adicionar');
let total = document.querySelector('.total');
let convidadoDigitado = document.querySelector('#input-convidado');


botaoAdicionar.addEventListener('click', ()=>{
    
    if(convidadoDigitado.value === ''){
        return exibeMensagemErro(erros.convidado);
    }
    
    let convidado = document.createElement('div');
    convidado.classList.add('convidado');
    
    listaDeConvidados.appendChild(convidado);

    let pCount = document.createElement('p');
    let pConvidado = document.createElement('p');
    let bottonDelete = document.createElement('div');
    
    pConvidado.classList.add('name-convidado');
    pConvidado.textContent = convidadoDigitado.value;
    
    let convidados = document.querySelectorAll('.convidado');

    pCount.classList.add('count-convidado');
    // pCount.innerHTML = convidados.length;

    for(let i = 0; i < convidados.length; i++){
        pCount.innerHTML = convidados.length;
    }
    
    bottonDelete.classList.add('delete-item');
    bottonDelete.textContent = 'x';
    
    convidado.appendChild(pCount);
    convidado.appendChild(pConvidado);  
    convidado.appendChild(bottonDelete);
    
    convidadoDigitado.value = '';
    convidadoDigitado.focus(); 

    total.innerHTML = `Total: ${convidados.length}`
    
})
