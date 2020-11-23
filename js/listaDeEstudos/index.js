const inputText = document.querySelector('#input-text');
const inputBotton = document.querySelector('#input-botton');
const totalEstudos = document.querySelector('.total-estudos')
const corpoDaLista = document.querySelector('.container');

//Manipulando o Dom e Criando o Elemento.

inputBotton.addEventListener('click', () => {

    if(inputText.value == '')return exibeMensagemErro(erros.estudo)

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

    inputText.value = '';
    inputText.focus();

    let todosItemDeEstudo = document.querySelectorAll('.elements-created');

    for (let i = 0; i < todosItemDeEstudo.length; i++) {

        totalEstudos.innerHTML = `Total:  ${todosItemDeEstudo.length}`
    }

});


