function calcular() {
    const pressao = parseFloat(document.getElementById('pressao').value);
    const mol = parseFloat(document.getElementById('mol').value);
    const temperatura = parseFloat(document.getElementById('temperatura').value);
    const gases = 0.082; // Constante R (L·atm/(mol·K))

    if (isNaN(pressao) || isNaN(mol) || isNaN(temperatura) || pressao <= 0 || mol <= 0 || temperatura <= 0) {
        document.getElementById('resultado').innerHTML = 'Erro: Insira valores válidos e positivos!';
        document.getElementById('resultado').style.backgroundColor = '#ffe6e6';
        return;
    }

    const calculo = (mol * gases * temperatura) / pressao; // V = (nRT) / P

    document.getElementById('resultado').innerHTML = "O volume do gás é: <strong>${calculo.toFixed(2)}";
    document.getElementById('resultado').style.backgroundColor = '#e8f5e8';
    console.log("Cálculo realizado:", calculo);
}
