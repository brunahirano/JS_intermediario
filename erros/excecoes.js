try {
    throw new Error('Lançando nossa primeira exceção') // throw lança uma exceção
} catch (erro) {
    console.log(erro)
}

//Exceções não checadas
// Nesse exemplo nós tentamos converter uma string para objeto, mas como a string não está no formato de um json válido por ter uma aspa a mais, o erro acontece e vai parar no bloco catchg onde nós podemos tratar o erro de forma que acahamos melhor, mas como ele não é checado, ou seja não sabemos nenhum detalhe do que pode ter ocorrido, o tratamento fica bem genérico.
const stringJson = '{ "messagem": "Olá mundo!""}'

try {
    const object = JSON.parse(stringJson)
    console.log(JSON.stringify(object, null, 2))
} catch (error) {
    console.log(error)
}

// //Exceções não checadas
// Na exceção checada nós preparamos o fluxo da alicação para "checar" se aconteceu algo que precisa ser tratado como erro

try {
    const customerList = []

    if (customerList.length < 1) {
        throw {
            name: "CostuemerListError",
            message: "Alista de clientes não pode ser vazia",
            code: 9000
        }
    }
} catch (error) { //bem genético
    console.log(error)
}

//Tratamento específico, vamos tratar o primeiro exemplo
//Temos tto  nativo do js e tbm podemos criar erros personalizados, como fizemos no exemplo com o CustomError 

const stringJson2 = '{ "messagem": "Olá mundo!""}'

try {
    const object = JSON.parse(stringJson2)
    throw { name: "CostuemerListError", message: "Deu ruim geral" }

} catch (error) {
    if (error instanceof SyntaxError) {
        console.log('Ocorreu o seguinte erro de sintaxe', error.message)
    } else if (error instanceof TypeError) {
        console.log('Ocorreu o seguinte erro de tipagem', error.message)
    } else if (error instanceof ReferenceError) {
        console.log('Ocorreu o seguinte erro de referência', error.message)
    } else {
        console.log('Error genérico', error.name, error.message)
    }
}

//Exceções de Banco de dados
//É bem similar a que vimos acime. Porém em se tratando de BDD, é necessário tomar todo cuidado para não gravar dados inconsistentes. Então toda vez que fizermos alguma alteraçãi é m uito importante tratar os erros que possam acontecer.

const dbInit = async () => {
    try {
        await dbConnect()
        const Product = awaitProductModel()
        console.log(Product)

        const productList = await Product.findAll({ raw: true })
        console.log(productList)
    } catch (error) {
        console.log("process error: ", error)
    }
}

dbInit()

//Exceções HTTP
//Erros em requisições HTTP também são tratados com try...catch, porém as informações do erro são diferentes. O objetivo gerado pelo errro sempre tem um código de status HTTP e esse código tem um significado que indica quala erro ocorreu

const axios = require('axios')

const search = async (term) => {
    try {
        const response = await axios.get(`https://swapi.dev/api/people/${term}`)
        console.log(response.data)
        return response.data
    } catch (error) {
        const errorResponse = { statusCode: error.response.status, body: error.response.data }
        console.log(errorResponse)
        return errorResponse
    }
}

search('roberto')
//saída de erro desse exemplo: statusCode: 404, body:{detail: 'Not found'}

//Log da aplicação
//Não é uma boa prática apesar de ser comum usar console.log
//Temos que implementar recursos que salvem erros em algum lugar para que possamos voltar e analisá-los
//uma das formas é gravar os erros em arquivos

//Nesse exemplo está sendo implementada uma função que recebe um objeto e grava um arquivo JSON com o erro usando a data e hora do erro como nome.
const fs = require('fs')

const saveError = (errorObject) => {
    const date = (new Date()).toJSON()
    const errorString = JSON.stringify(errorObject, null, 2)
    fs.writeFile(`${date}.json`, errorString, (err) => {
        if (err) return console.log(err);
    })
}


//Agora quando acontecer um erro podemos usar a função para gravar o erro em um arquivo

try {
    const object = Json.parse('stringJson')
    console.log(object)
} catch (error)  {
    const errorObject = {
        type: error.name,
        message: error.message,
        detail: error.stack && error.stack.split('\n')[2].trim()
    }

    saveError(errorObject)
}

