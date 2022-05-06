//Erros
//1- Escreva um try...catch e faça com que seu código cais na exceção do erro

//1- Neste exemplo vai dar um erro por o formato Json está errado, falta "" no user e senha
const stringJson = '{ user: "user@email.com", senha: "123456"}'

try {
    const object = JSON.parse(stringJson)
    console.log(JSON.stringify(object, null, 2))
} catch (error) {
    console.log(error)
}



//2- Aponte 3 tipos de erros em JS e comente seu caso de uso e escreva um exemplo de pelo menos 1 deles
// SyntaxError - quando ocorre erro de sintaxe
// TypeError - quando uma variável ou parâmetro não é de um tipo válido.
// ReferenceError - acontece quando é feita uma tentativa de referenciar uma variável que não foi declarada.

//exemplo Reference erros
try {
    var a = variavelNaoDeclarada;
  } catch (e) {
    console.log(e instanceof ReferenceError); // true
    console.log(e.message);                   // "variavelNaoDeclarada is not defined"
    console.log(e.name);                      // "ReferenceError"
  }


//3- Escreva um erro customizado sobre um assusnto qualquer
try {
    const productList = [arroz]

    if (productList.length < 1) {
        throw {
            name: "Error na Lista de produtos:",
            message: "A lista de produtos não pode ser vazia",
            code: 9000
        }
    }
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log('Ocorreu o seguinte erro de sintaxe:', error.message)
    } else if (error instanceof ReferenceError) {
        console.log('Ocorreu o seguinte erro de referência:', error.message)
    } else {
        console.log('Error genérico', error.name, error.message)
    }
}
