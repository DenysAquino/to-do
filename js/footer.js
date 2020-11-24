const componenteFooter = document.querySelector('footer');

function criaFooter (){
    componenteFooter.innerHTML = `
    <div class="box rodape">
        <h2>Developed by Denys.Dev.</h2>
        <div class="technologies-footer">
            <p>Technologies: </p>
            <img src="./img/html5-brands.png" title="HTML5"/>
            <img src="./img/css3-alt-brands.png" title="Css3"/>
            <img src="./img/js-square-brands.png" title="JavaScript"/>
        </div>
        <div class="contact-footer">
            <p>Contact: </p>
            <a href="https://www.linkedin.com/in/denys-aquino/" alt="Link para o linkedin do desenvolvedor" target="_blank"><img src="./img/linkedin-brands.png" /></a>
            <a href="https://github.com/DenysAquino" alt="Link para o github do desenvolvedor" target="_blank"><img src="./img/github-square-brands.png" /></a>
            <a href="mailto:denyshcmid@gmail.com"> denyshcmid@gmail.com</a>
        </div>
    </div>
    `
}

criaFooter();