let tela = document.getElementById("tela-resultado");
let expressao = "0";

tela.value = "0";
tela.style.fontSize = "50px";

function adicionar(valor) {
    if (expressao === "0") {
        expressao = valor;
    } else {
        expressao += valor;
    }

    tela.style.fontSize = "50px";
    tela.value = expressao;
}

function limpar() {
    expressao = "0";
    tela.style.fontSize = "50px";
    tela.value = "0";
}

function calcular() {
    try {

        let resultado = eval(expressao);
        expressao = resultado.toString();

        tela.style.fontSize = "50px";
        tela.value = expressao;

    } catch {
        tela.value = "Erro";
        expressao = "0";
    }
}

function apagar() {
    if (expressao.length > 1) {
        expressao = expressao.slice(0, -1);
    } else {
        expressao = "0";
    }

    tela.value = expressao;
}
