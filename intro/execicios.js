/**
 * escreva uma função (arrow function) que irá receber os parâmetros cpf, data de nascimento e cep (todos em string)
 * e sem formatação, formate-os com regex e exiba no console
 */

const person = (cpf, dataNascimento, cep) => {
    //retira os caracteres indesejados...
    cpf = cpf.replace(/[^\d]/gmi, "");

    //realizar a formatação...
    ;
    return [cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/gmi, "$1.$2.$3-$4"),
            dataNascimento.replace(/(\d{2})(\d{3})(\d{3})/gmi, "$1/$2/$3"),
            cep.replace(/(\d{2})(\d{3})(\d{3})/gmi, "$1.$2-$3")]

}



const imprimir = () => console.log(person('99999999911', '28011991', '13730020'))

imprimir()

/**
 * const person = {
 *  firstName: "John",
 *  lastName: "Doe"
 * };
 * 
 * Dado o objeto acima, extraia cada propriedade com destructuring
 */
const person2 = {
    firstName: "John",
    lastName: "Doe"
};

let { firstName, lastName } = person2

console.log(firstName, lastName)


/**
 * const person = {
 *  firstName: "John",
 *  lastName: "Doe",
 *  age: 30,
 *  country: "Brazil",
 *  city: "São Paulo"
 *  state: "SP",
 *  postalCode: "01001001",
 *  neighbohur: "Centro"
 * }
 * 
 * Dado o objeto acima, extraia os dados pessoais de John e todo restante (endereço) em uma variável
 * chamada endereco, ao final desse exercício, você deve ter apenas 4 variáveis
 */

const person3 = {
    firstName3: "John",
    lastName3: "Doe",
    age3: 30,
    country: "Brazil",
    city: "São Paulo",
    state: "SP",
    postalCode: "01001001",
    neighbohur: "Centro"
}

let { firstName3, lastName3, age3, ...endereco  } = person3


console.log('Endereço', endereco)
console.log('Pessoa3:', person3)

