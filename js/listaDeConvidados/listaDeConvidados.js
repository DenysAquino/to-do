let listaDeConvidados = document.querySelector(".lista-convidados");
let botaoAdicionar = document.querySelector('.btn-adicionar');

let convidadoDigitado = document.querySelector('#input-convidado');
let convidados = document.querySelectorAll('.convidado')

let contador = 1;

botaoAdicionar.addEventListener('click', ()=>{
    let convidado = document.createElement('div');
    convidado.classList.add('convidado')

    listaDeConvidados.appendChild(convidado)

    let pCount = document.createElement('p');
    let pConvidado = document.createElement('p')
    
    pConvidado.classList.add('name-convidado');
    pConvidado.textContent = convidadoDigitado.value;

    pCount.classList.add('count-convidado');
    pCount.textContent = contador;
    
    convidado.appendChild(pCount);
    convidado.appendChild(pConvidado);  

    convidadoDigitado.value = ''
    contador++;
})


