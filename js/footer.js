const componenteFooter = document.querySelector('footer');

function criaFooter (){
    componenteFooter.innerHTML = `
    <footer>
        <div class="rodape">
            <h3>Desenvolvido por Denys.Dev 	
            &#169;</h3>
        </div>
    </footer>
    `
}

criaFooter();