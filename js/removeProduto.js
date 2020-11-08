let tbody = document.querySelector('.lista-produtos');
let table = document.querySelector('table');

let botoesDelete = document.querySelectorAll('.delete-item')

tbody.addEventListener('click', (e) => {

    if (e.target !== table && e.target !== tbody && e.target.textContent == 'x'){
        console.log(e.target.textContent)
        e.target.parentNode.classList.add('fadeOut')

        setTimeout(() => {
            e.target.parentNode.remove();
        }, 500);
    }    

})
