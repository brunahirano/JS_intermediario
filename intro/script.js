//arrow function

// function person() {
    
// }

// const person2 = name => name

// const person = (firstName, lastname) => {
//     const getfullName = () => {
        
//     const fullName = `${firstName} ${lastname}`
//     return fullName
//     }
//     return getfullName()
// }

// const imprimir = () => console.log(person('Eduardo', 'Pereira2'))

//imprimir()

//operador ternário
 //? return do if clássico e os : é o return do else
 /**if(idade>=18){
     return 'Maior'
 } else {
     return 'Menor'
 }*/

// const person3 = (idade) => {
//  return maior = idade >= 18 ? 'Maior' : idade >=15 ? 'Menor' : 'Não sei'
// }

// console.log(person3(14)) //return é não sei

//Spread operator

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     country: "Brasil",
//     city: "São Paulo",
//     state: "SP",
//     postalCode: "0101010101",
//     neighbohur: "Centro"
// }

// const outroPerson = {
//     ...person,
//     cpf: '111.111.111-11',
//     age: parseInt(person.age),
//     lastName: "Doe 2",
//     updatesAt: person.createAt + 1
// }

// console.log('person', person)
// console.log('newPerson', outroPerson)

// const alteracao =  [...outroPerson.lastName]
// console.log('newPerson', [...alteracao, alteracao[1] = 'a'], alteracao)

//Destructuring assignment
const person = {
        firstName: "John",
        lastName: "Doe",
        age: 30,
        country: "Brasil",
        city: "São Paulo",
        state: "SP",
        postalCode: "0101010101",
        neighbohur: "Centro"
    }

    //const firstName = person.firstName

    let {firstName, lastName, city, ...rest } = person //quero pegar o firstName do person
    const{ age } = rest

    firstName = 'Eduardo'

    console.log(firstName, lastName, city)
    console.log('person2', rest)
    console.log('person2', age)

