const hamburguer = document.querySelector('.hamburguer');
const menuUl = document.querySelector('.menu');


hamburguer.addEventListener('click', () => {

    if(menuUl.style.visibility == 'visible'){
        menuUl.style.visibility = "hidden" ;
    }else {
        menuUl.style.visibility = 'visible';
    }

})