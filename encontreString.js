// PROCURAR STRING EM OBJETO E RETORNÁ-LO

const filmes = {
    nome: 'Interestelar',
    lancamento: 2014,
    diretor: 'Christopher Nolan',
    ator: 'Matthew McConaughey',
    idade: 50
}

function findString(alvo) {
    for (key in alvo) {
        if (typeof alvo[key] === 'string') {
            console.log(key, alvo[key]);
        }
    }
}

findString(filmes);