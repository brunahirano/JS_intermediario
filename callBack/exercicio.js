//
// let valorSoma1 = 10;
// let valorSoma2 = 20;

// let soma = valorSoma1 + valorSoma2;
// console.log(`O resultado da soma foi: ${soma}`);

//
// let valorMulti1 = 50;
// let valorMulti2 = 2;

// let multiplicacao = valorMulti1 * valorMulti2;
// alert(`O resultado da multiplicação foi: ${multiplicacao}`);
// function exibirAlertaSoma(resultado) {
//     alert (`O resultado da soma foi: ${resultado}`)
// }

// function exibirAlertaMulti(resultado) {
//     alert (`O resultado da multiplicação foi: ${resultado}`)
// }

function exibirAlerta(resultado) {
    if(resultado === realizarSoma()){
        alert (`O resultado da soma foi: ${resultado}`)
    }
    alert (`O resultado da multiplicação foi: ${resultado}`)
}

function realizarSoma(valorSoma1, valorSoma2, operation = 'sum') {
    let resultado = valorSoma1 + valorSoma2;
    callback(resultado);
}

function realizarMulti(valorMulti1,valorMulti2, callback) {
    let resultado = valorMulti1 * valorMulti2;
    callback(resultado);
}

//realizarSoma(10, 10, exibirAlertaSoma);
//realizarMulti(5, 5, exibirAlertaMulti);

realizarMulti(5, 5, exibirAlerta);
realizarSoma(10, 10, exibirAlerta);