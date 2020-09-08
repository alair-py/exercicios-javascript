// MÉDIA DE NOTA ESCOLAR A PARTIR DE UM ARRAY

const notas = [9, 6, 7];

function mediaAluno (valor) {
    const media = calcularMedia(valor);

    if (media > 9)
        return 'Média: A';
    else if (media > 8)
        return 'Média: B';
    else if (media > 7)
        return 'Média: C';
    else if (media > 6) 
        return 'Média: D';
    return 'Média: F';
}

function calcularMedia (valores) {
    let total = 0;
    for (nota of valores) {
        total += nota;
    }
    return total / valores.length;
    
}

 console.log(mediaAluno(notas));