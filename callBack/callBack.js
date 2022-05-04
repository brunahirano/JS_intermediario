function exibirConsole(resultado) {
    console.log(`O resultado da soma foi ${resultado}`)
}

function exibirAlerta(resultado) {
    alert (`O resultado da soma foi: ${resultado}`)
}

function realizarSoma(valorUm, valorDois, callback) {
    let resultado = valorUm + valorDois;
    callback(resultado);
}

realizarSoma(10,20, exibirAlerta)
realizarSoma(1352, 1524, exibirAlerta)
realizarSoma(1352, 1524, exibirConsole)