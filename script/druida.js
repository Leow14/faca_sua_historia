var t;

function menu_druida() {
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/inicial.jpg')";

    var content = document.getElementById("content");
    content.innerHTML = `<div class="titulo">
    <p class="letra">Qual o seu nome druida?</p>

<div>
    <div class ="input"> 
        <a><input id="nome" placeholder="Nome"> </input></a>
        <p class="aviso">*por favor insira um nome</p>
    </div>
<div class="botao_principal">
    <button class="botao_principal_druida" onclick="iniciar() ; inicio_druida()"> Continuar </button>
</div>`
}


function morrer() {
    var fundo = document.getElementById('fundo');
    fundo.innerHTML = ``
    fundo.style.backgroundImage = "url('./imgs/death3.jpg')";
}


function iniciar() {
    nome = nome.value;
}

function exemplo() {
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/forest.jpg')";

    var content = document.getElementById("content");
    content.innerHTML = ``
}


function inicio_druida() {
    var fundo = document.getElementById('fundo');
    fundo.style.backgroundImage = "url('./imgs/forest.jpg')";

    var content = document.getElementById("content");
    content.innerHTML = `oi`
}