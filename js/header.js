
const componenteHeader = document.querySelector('header');

function criaHeader() {

    componenteHeader.innerHTML = `
    <div class="box cabecalho">
        <div>
            <h1>Your Tasks</h1>
        </div>
    
        <div class="hamburguer">
            <div class="line-1"></div>
            <div class="line-2"></div>
            <div class="line-3"></div>
        </div>
    </div>
    <nav class="menu">
        <ul>
            <li><a href="index.html" class="animation-menu">Home</a></li>
            <li><a href="listaDeCompras.html" class="animation-menu">Lista de compras</a></li>
            <li><a href="listadeconvidados.html" class="animation-menu">Lista de convidados</a></li>
        </ul>
    </nav>
    `
}

criaHeader();