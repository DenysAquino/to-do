const hamburguer = document.querySelector('.hamburguer');
let menu = document.querySelector('.menu');



hamburguer.addEventListener('click', () => {

    if(menu.style.transform == 'translateY(0%)'){
        menu.style.transform = 'translateY(-100%)';
    }else {
        menu.style.transform = 'translateY(0%)';
    }
})