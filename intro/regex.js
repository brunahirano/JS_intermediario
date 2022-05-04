const regexTest = /^[a-zA-Z]{3}$/gmi

const regexCPF= /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/gmi

const resultado = !!'111'.match(regexTest)


const regexSite = /^(www)\.(netshoes|zattini)\.(com)\.(br)$/gmi

const resultado1 = regexSite.test("www.zattini.com.br")
const resultado2 = !!"www.zattini.com.br".match(regexSite)
const resultado3 = !!"www.zattini.com.br".indexOf('zattini')

console.log(resultado1, resultado2, resultado3)

