// FizzBuzz
function fizzbuzz(valor) {
    if (typeof valor !== 'number') {
        return 'Não é um número';
    }
    if (valor % 3 === 0 && valor % 5 === 0) {
        return 'Divisível por 3 e 5.';
    }
    else if (valor % 3 === 0) {
        return 'Divisível por 3.';
    }
    else if (valor % 5 === 0) {
        return 'Divisível por 5.';
    }
    return 'Não divisível por 3 ou 5.'
}

console.log(fizzbuzz(7));