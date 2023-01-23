const prompt = require('prompt-sync')()

let condicao = false

const adicao = ()=>{
    let n1 = Number(prompt('Digite um número: '))
    let n2 = Number(prompt('Digite outro número: '))
    let resultado = Number(n1+n2)
    console.log (resultado)
}

const subtracao = ()=>{
    let n1 = Number(prompt('Digite um número: '))
    let n2 = Number(prompt('Digite outro número: '))
    let resultado = Number(n1-n2)
    console.log (resultado)
}

const multiplicacao = ()=>{
    let n1 = Number(prompt('Digite um número: '))
    let n2 = Number(prompt('Digite outro número: '))
    let resultado = Number(n1*n2)
    console.log (resultado)
}

const divisao = ()=>{
    let n1 = Number(prompt('Digite um número: '))
    let n2 = Number(prompt('Digite outro número: '))
    let resultado = Number(n1/n2)
    console.log (resultado)
}

const operacao = ()=>{
    console.log(`
    1 - Adição
    2 - Subtração
    3 - Divisão
    4 - Multiplicacao
    5 - Sair
    `
)
    let opcao = prompt('Escolha uma das opções: ')
    switch(opcao){
        case '1':
            adicao()
        break
        case '2':
            subtracao()
        break
        case '3':
            divisao()
        break
        case '4':
            multiplicacao()
        break
        case'5':
            condicao = true
            console.log('Programa Encerrado.')
        break
        default:
            console.log('Opção Inválida')

    }
}

while(!condicao){
    operacao()
}
