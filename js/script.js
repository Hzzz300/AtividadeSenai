//efeito do botão voltar ao Topo

function topo(){
    window.scrollTo(
        {
            top:0,
            left:0,
            bahavior:'smooth'
        })
} 

//Validação de Login

function login() {
    var logado = 1;
    var usuario = document.getElementById("usuario").value;
    usuario=usuario.toLowerCase();
    var senha = document.getElementById("senha").value;
    senha=senha.toLowerCase();
    

    if(usuario == 'admin' && senha == 'q1w2e3r4' ){
        window.location.href = "index.html";
        logado = 1;
    }

    else{
        alert("Acesso Negado. Dados incorretos");
    }
}


//Ativar alert no botão cadastrar 

function cadastro() {
    alert("Cadastrado com sucesso!");
    window.location.href = "index.html";
}
