let tbody = document.querySelector('.lista-produtos');
let table = document.querySelector('table');


tbody.addEventListener('click', (e) => {    
    
    if (e.target !== table && e.target !== tbody && e.target.textContent == 'x'){
        e.target.parentNode.classList.add('fadeOut')
        
        setTimeout(() => {
            e.target.parentNode.remove();
            let produtosList = document.querySelectorAll('.produtos-list');
            total.innerHTML = `Total: ${produtosList.length}`
            
        }, 500);
    }    
})
    