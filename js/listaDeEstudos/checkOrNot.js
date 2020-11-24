
//CheckOrNot checkbox

corpoDaLista.addEventListener('click', (e) => {

    let checks = document.querySelectorAll('.elements-created-checkbox');

    for (let i = 0; i < checks.length; i++) {
        let listaDeEstudoP = document.querySelectorAll('.elements-created-p');
        console.log(checks[i])

        if (e.target === checks[i]) {

            if (checks[i].checked == true){
                console.log('if')
                listaDeEstudoP[i].style.color = '#55555593';
                listaDeEstudoP[i].style.fontStyle = 'italic';
                listaDeEstudoP[i].style.textDecoration = 'line-through'
                checks[i].checked = true;
                return
            }else{
                console.log('else')
                listaDeEstudoP[i].style.color = '';
                listaDeEstudoP[i].style.fontStyle = 'normal';
                listaDeEstudoP[i].style.textDecoration = 'none'
                checks[i].checked = false;
                return
            }
        }

    }
});