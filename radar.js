// VERIFICAR VELOCIDADE E APLICAR MEDIDAS ADMINISTRATIVAS

function radar(speed) {
    const speedMax = 70;
    const kmPorPonto = 5
    if (speed <= speedMax) {
        return 'Siga com segurança!'
    }
    else {
        let calc = speed - speedMax;
        const pontos = Math.floor(calc / kmPorPonto);
        return pontos > 12 ? 'Habilitação Suspensa!' : 'Multado: ' + pontos + ' pontos';
    }
}

console.log(radar(135));