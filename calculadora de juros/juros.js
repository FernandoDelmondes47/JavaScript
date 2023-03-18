import input from 'readline-sync'

console.log("Aplicação de Juros:\n")

let valor_original = input.question("Informe o valor devido: R$ ")

let dias_atraso = input.question("Informe quantos dias se passaram desde o vencimento do boleto: ")

let valor_devedor
let taxa

if( valor_original <= 0 ){

    console.log("O valor deve ser maior do que 0")

}

else if( valor_devedor > 0 && dias_atraso > 15 ){
    
    taxa = 0.1
    valor_devedor = Number((valor_original)) + Number((valor_original * taxa))

    console.log("\nValor original da dívida: R$ " +  valor_original)
    console.log("Dias atrasados: " + dias_atraso)
    console.log("Taxa de juros: 10%")
    console.log("Valor total com juros: R$ " + valor_devedor)

}

else if( valor_devedor > 0 && dias_atraso <= 15 && dias_atraso > 0 ){

    taxa = 0.05
    valor_devedor = Number((valor_original)) + Number((valor_original * taxa))  
    
    console.log("\nValor original da dívida: R$ " +  valor_original)
    console.log("Dias atrasados: " + dias_atraso)
    console.log("Taxa de juros: 5%")
    console.log("Valor total com juros: R$ " + valor_devedor)

}

else {

    console.log("Valor original da dívida: R$ " +  valor_original)
    console.log("Dias atrasados: " + dias_atraso)
    console.log("Taxa de juros: 0% ")
    console.log("Valor total com juros: R$ " + valor_original)
    
}

