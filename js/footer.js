const componenteFooter = document.querySelector('footer');

function criaFooter (){
    componenteFooter.innerHTML = `
    <footer>
        <div class="box rodape">
            <h3>Desenvolvido por Denys.Dev 	
            &#169;</h3>
            <div class="redes-sociais">
                <a href="https://github.com/DenysAquino" alt="Link para o github do desenvolvedor" target="_blank"><img src="./img/github.png" /></a>
                <a href="https://www.linkedin.com/in/denys-aquino/" alt="Link para o linkedin do desenvolvedor" target="_blank"><img src="./img/linkedin.png" /></a>
            </div>
        </div>
    </footer>
    `
}

criaFooter();