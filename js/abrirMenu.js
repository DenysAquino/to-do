const hamburguer = document.querySelector('.hamburguer');
let menu = document.querySelector('.menu');
let line1 = document.querySelector('.line-1');
let line2 = document.querySelector('.line-2');
let line3 = document.querySelector('.line-3');

hamburguer.addEventListener('click', () => {

    if (menu.style.transform === 'translateY(0%)') {
        menu.style.transform = 'translateY(-100vh)';
        line1.style.transform = 'rotate(0deg) translate(0, 0)';
        line2.style.visibility = 'visible';
        line3.style.transform = 'rotate(0deg) translate(0, 0)';
        return
    } else {
        menu.style.transform = 'translateY(0%)';
        line1.style.transform = 'rotate(-45deg) translate(-6px, 6px)';
        line2.style.visibility = 'hidden';
        line3.style.transform = 'rotate(45deg) translate(-6px, -6px)';
    }
})

/* <div class="line-1"></div>
<div class="line-2"></div>
<div class="line-3"></div> */