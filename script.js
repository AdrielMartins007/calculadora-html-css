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

        if (expressao === "22+10" || expressao === "10+22") {
            tela.value = "Nosso primeiro beijo!";
            tela.style.fontSize = "30px";
            expressao = "0";
            return;
        }

        if (expressao === "17+10" || expressao === "10+17") {
            tela.value = "Nosso primeiro encontro!";
            tela.style.fontSize = "24px";
            expressao = "0";
            return;
        }

        if (expressao === "1+9" || expressao === "01+9") {
            tela.value = "Nossa primeira conversa!";
            tela.style.fontSize = "24px";
            expressao = "0";
            return;
        }

        if (expressao === "5+5" || expressao === "05+05") {
            tela.value = "Namoramos!";
            tela.style.fontSize = "40px";
            expressao = "0";
            return;
        }

        if (expressao === "5+5" || expressao === "05+05") {
            tela.value = "Namoramos!";
            tela.style.fontSize = "40px";
            expressao = "0";
            return;
        }

        if (expressao === "3+4" || expressao === "03+04") {
            tela.value = "Casamossss!";
            tela.style.fontSize = "40px";
            expressao = "0";
            return;
        }

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
