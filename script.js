let tela = document.getElementById("tela-resultado");

let expressao = "";

function adicionar(valor){
    expressao += valor;
    tela.value = expressao;
}

function limpar(){
    expressao = "";
    tela.value = "";
}

function calcular(){
    try{
        expressao = eval(expressao);
        tela.value = expressao;
    } catch {
        tela.value = "Erro";
        expressao = "";
    }
}