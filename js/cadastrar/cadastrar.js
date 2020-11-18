
const email = document.querySelector('#input-cadastro-email');
const senha = document.querySelector('#input-cadastro-password');
const btnCadastrar = document.querySelector('#botao-cadastrar');
const nome = document.querySelector('#input-cadastro-name')

export const cadastros =  [];

btnCadastrar.addEventListener('click', (e)=>{
    
    let nameDigitado = nome.value
    let emailDigitado = email.value;
    let passwordDigitado = senha.value;

    salvarCadastro(nameDigitado, emailDigitado, passwordDigitado );

    // setTimeout(()=>{
    //     window.location.href = "login.html"
    // }, 500)
})

function salvarCadastro (name, email, password){

    let user = {name, email, password}
    cadastros.push(user);
    console.log(cadastros)
}
