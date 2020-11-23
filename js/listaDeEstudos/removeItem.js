//CheckOrNot P

corpoDaLista.addEventListener('dblclick', (e) => {
  
    const listaEstudosP = document.querySelectorAll('.elements-created-p');

    for (let i = 0; i < listaEstudosP.length; i++) {

        if (e.target == listaEstudosP[i]) {
            e.target.parentNode.classList.add('fadeOut');

            setTimeout(() => {
                e.target.parentNode.remove();
                let todosItemDeEstudo = document.querySelectorAll('.elements-created');

                totalEstudos.innerHTML = `Total:  ${todosItemDeEstudo.length}`
            }, 500);
        }

    }
})
