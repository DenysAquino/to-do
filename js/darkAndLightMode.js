const darkMode = document.querySelector('.dark-mode');
const lightMode = document.querySelector('.light-mode');
const elemento1 = document.querySelector('body')

darkMode.addEventListener('click', ()=>{
    const inputDark = document.querySelectorAll('input');

    darkMode.style.display = 'none';
    lightMode.style.display = 'block';
    elemento1.style.backgroundColor = '#1b262c';
    elemento1.style.color = 'lightblue';

    for(let i =0; i < inputDark.length; i++){
        inputDark[i].style.backgroundColor = '#dcefff';
        inputDark[i].style.borderColor = 'lightblue';        
    }

});

lightMode.addEventListener('click', ()=>{
    const inputLight = document.querySelectorAll('input');

    lightMode.style.display = 'none';
    darkMode.style.display = 'block';
    elemento1.style.backgroundColor = '#dcefff';
    elemento1.style.color = '#152f3e';

    for(let i =0; i < inputLight.length; i++){
        inputLight[i].style.backgroundColor = '#00a7c438';
        inputLight[i].style.borderColor = '#152f3e';        
    }

});

