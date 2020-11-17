listaDeConvidados.addEventListener('click', e => {
    let deleteItem = document.querySelectorAll('.delete-item');
    for (let i = 0; i < deleteItem.length; i++) {
        if (e.target == deleteItem[i]) {
            deleteItem[i].parentNode.remove();
            let convidados = document.querySelectorAll('.convidado');
            total.innerHTML = `Total: ${convidados.length}`
        }
    }
})