function calcular() {
    const P = parseFloat(document.getElementById('pressao').value);
    const V = parseFloat(document.getElementById('volume').value);
    const n = parseFloat(document.getElementById('mol').value);
    const T = parseFloat(document.getElementById('temperatura').value);

    const R = 0.082;

    let faltando = "";

    if (isNaN(P)) {
        faltando = "P";
    } else if (isNaN(V)) {
        faltando = "V";
    } else if (isNaN(n)) {
        faltando = "n";
    } else if (isNaN(T)) {
        faltando = "T";
    } else {
        document.getElementById('resultado').innerHTML = "Deixe um campo vazio!";
        return;
    }

    let resultado = "";

    switch (faltando) {
        case "V":
            resultado = (n * R * T) / P;
            document.getElementById('resultado').innerHTML =
                "R = 0.082 L·atm/(mol·K)<br>Volume (V) = " + resultado.toFixed(2) + " L";
            break;

        case "P":
            resultado = (n * R * T) / V;
            document.getElementById('resultado').innerHTML =
                "R = 0.082 L·atm/(mol·K)<br>Pressão (P) = " + resultado.toFixed(2) + " atm";
            break;

        case "n":
            resultado = (P * V) / (R * T);
            document.getElementById('resultado').innerHTML =
                "R = 0.082 L·atm/(mol·K)<br>Mols (n) = " + resultado.toFixed(2) + " mol";
            break;

        case "T":
            resultado = (P * V) / (n * R);
            document.getElementById('resultado').innerHTML =
                "R = 0.082 L·atm/(mol·K)<br>Temperatura (T) = " + resultado.toFixed(2) + " K";
            break;
    }
}
