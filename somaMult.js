// SOMAR MULTIPLOS DE 3 E 5

function somarMult(max) {
    let totalSoma = 0;
    for (let i = 0; i <= max; i++) {
        if (i % 3 === 0) {
            totalSoma += i;
        }
        if (i % 5 === 0) {
            totalSoma += i;
        }
    }
    console.log('Total:', totalSoma);
}

somarMult(10);