let inputText = document.querySelector('#input-text');
let inputBotton = document.querySelector('#input-botton');

inputBotton.addEventListener('click', ()=>{
    
    let estudoDigitado = inputText.value;
    let listaDeEstudo = document.querySelector('.lista-estudos');

    let divElementsCreate = document.createElement('div');
    divElementsCreate.classList.add('elements-created');
    listaDeEstudo.appendChild(divElementsCreate);

    let pEstudo = document.createElement('p');
    pEstudo.classList.add('elements-created-p');
    divElementsCreate.appendChild(pEstudo);
    pEstudo.innerHTML = estudoDigitado;

    let checkEstudo = document.createElement('input');
    checkEstudo.classList.add('elements-created-checkbox');
    checkEstudo.setAttribute('type', 'checkbox');
    divElementsCreate.appendChild(checkEstudo);

    inputText.value = ''
    inputText.focus()
});