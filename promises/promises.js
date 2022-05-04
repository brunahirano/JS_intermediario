// function primeiroPromise(erro) {

//     return new Promise((resolve, reject) =>{

//         if(erro) {
//             return reject(50);
//         }

//         return resolve(100);
//     })
// }

// function sucesso(response){
//     console.log("Deu tudo certo " + response);
// }

// function deuErro(response){
//     console.log("Deu erro " + response);
// }

// primeiroPromise(true)
//     .then(sucesso)
//     .catch(deuErro)





const executarCronometro = (segundos) => {

    return new Promise((resolve, reject) => {

        if (segundos === null) {
            return reject();
        }

        segundos = segundos * 1000;
        setTimeout(resolve, segundos)
    });
}

executarCronometro(2)
    .then(function () {
        console.log("A sua encomenda foi entregue");
    });

console.log("Fui para casa : ");

executarCronometro(null)
    .then(
        function () {
            console.log("Os 2 segundos acabaram");
        }).catch(function () {
            console.log("Erro ao executar")
        })
