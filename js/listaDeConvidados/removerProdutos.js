
listaDeConvidados.addEventListener('click', e => {
    let deleteItem = document.querySelectorAll('.delete-item');
    for (let i = 0; i < deleteItem.length; i++) {
        if (e.target == deleteItem[i]) {
            e.target.parentNode.classList.add('fadeOut');

            setTimeout(() => {
                deleteItem[i].parentNode.remove();
                
                let convidados = document.querySelectorAll('.convidado');
                total.innerHTML = `Total: ${convidados.length}`
                let somaCount = 1;
                
                for(let i = 0; i < convidados.length; i++){
                    let count = document.querySelectorAll('.count-convidado');
                    count[i].innerHTML = somaCount++
                }
            }, 500);
            
        }
    }
})