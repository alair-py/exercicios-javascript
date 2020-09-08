// PAR OU IMPAR

function parOuImpar(num) {
    for (i = 0; i <= num; i++) {
        if (i % 2 === 0) {
            console.log(i, ': Número par!')
        }
        else {
            console.log(i, ': Número impar!')
        }
    }
}


parOuImpar(10);