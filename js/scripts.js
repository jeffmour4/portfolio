//função para alertar o usuário ao clicar em Início quando em uma página diferente da inicial
function mensagemInicio() {
    if (location.href != "http://localhost/portfolio/index.html") {
        alert("Voltando ao início...");
        location.href = "index.html";
    }
}