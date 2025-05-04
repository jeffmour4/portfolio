//função para alertar o usuário ao clicar em Início quando em uma página diferente da inicial
function mensagemInicio() {
    if (location.href != "https://jeffmour4.github.io/portfolio/index.html") {
        alert("Voltando ao início...");
        location.href = "index.html";
    }
}

//função para alertar acerca da não implementação do formulário de contato
function trabalhandoNisso() {
    alert("Desculpe. Ainda não implementado.")
}