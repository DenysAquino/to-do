
const componenteHeader = document.querySelector('header');

function criaHeader() {

    componenteHeader.innerHTML = `
    <div class="box cabecalho">
        <div>
            <h1><a href="index.html">Your Tasks</a></h1>
        </div>
    
        <div class="hamburguer">
            <div class="line-1"></div>
            <div class="line-2"></div>
            <div class="line-3"></div>
        </div>
    </div>
    <nav class="menu">
        <ul>
            <li class="link-login-home">
                <a href="index.html" class="animation-menu">Home</a>| 
                <a class="animation-menu">Login</a>| 
                <a href="help.html" class="animation-menu" >Help</a>
            </li>
            <li><a href="listaDeCompras.html" class="link-icon animation-menu"><img src="img/icon-list.png">Lista de compras</a></li>
            <li><a href="listadeconvidados.html" class="link-icon animation-menu"><img src="img/icon-list.png">Lista de convidados</a></li>
            <li><a href="listaDeEstudos.html" class="link-icon animation-menu"><img src="img/icon-list.png">Lista de estudos</a></li>
        </ul>
    </nav>
    `
}

criaHeader();