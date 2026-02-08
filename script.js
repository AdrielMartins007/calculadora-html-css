var input = document.querySelector('input')

function adicionar(num) {

    input.value += num

}

function limpar() {

    input.value = ""

}

function calcular(){

    var resultado = eval(input.value) /* 'EVAL' para calular todos os itens dentro do input.value */

    input.value = resultado

}