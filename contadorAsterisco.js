// EXIBE QUANTIDADE DE ASTERISCOS EM LINHAS

// function contAsterisco(quant) {
//     let asterisco = '';
//     for (let line = 1; line <= quant; line++) {
//         asterisco += '*';
//         console.log(asterisco);
//     }
// }

// OU LOOP COM LOOP

function contAsterisco(quant) {
    let asterisco = '';
    for (let line = 1; line <= quant; line++) {
        for (i = 0; i <= line; i++) {
            asterisco += '*';
            console.log(asterisco);
        }
    }
}

contAsterisco(5);


