// RETORNAR NÚMEROS PRIMOS APENAS

function exibirPrimo(valor) {
    for (let num = 2; num <= valor; num++) {
        if (testarPrimo(num)) console.log(num);
    }
}

function testarPrimo(numero) {
    for (let divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor === 0) {
            return false;
        }
    }
    return true;
}

exibirPrimo(25);