import input from 'readline-sync'

let salarios_minimos = [

    {ano: 2010 , salario: 510},
    {ano: 2011 , salario: 545},
    {ano: 2012 , salario: 622},
    {ano: 2013 , salario: 678},
    {ano: 2014 , salario: 724},
    {ano: 2015 , salario: 788},
    {ano: 2016 , salario: 880},
    {ano: 2017 , salario: 937},
    {ano: 2018 , salario: 954},
    {ano: 2019 , salario: 998},
    {ano: 2020 , salario: 1045}
]

let inflacao = [

    {ano: 2010 , ipca: 5.91},
    {ano: 2011 , ipca: 6.50},
    {ano: 2012 , ipca: 5.84},
    {ano: 2013 , ipca: 5.91},
    {ano: 2014 , ipca: 6.41},
    {ano: 2015 , ipca: 10.67},
    {ano: 2016 , ipca: 6.29},
    {ano: 2017 , ipca: 2.95},
    {ano: 2018 , ipca: 3.75},
    {ano: 2019 , ipca: 4.31},
    {ano: 2020 , ipca: 4.52}

]

console.log('Escolha uma das opções:\n')

console.log('1 - Listar os salários minímos de 2010 à 2020')
console.log('2 - Listar o índice IPCA de 2010 à 2020')
console.log('3 - Comparação entre o percentual de aumento salarial e o IPCA\n')

let escolha = input.question('Digite o número da sua escolha: ')
console.log('\n')

switch (escolha){

case '1':

        for (let salarioMin of salarios_minimos) {

            let labelAno = "Ano: "
            let labelSalario = "Salário: "
            let salarioMinimo = salarioMin.salario
            let anoSalario = salarioMin.ano
                    
                console.log(labelAno.padEnd(30,'.') + anoSalario)
                console.log(labelSalario.padEnd(30,'.')+ 'R$ '  + salarioMinimo.toFixed(2).replace('.',',') + '\n\n')
        }
          

    break;
        
    case '2':

        for (let ipcainflacao of inflacao){

            let labelanoIpca = "Ano: "
            let labelInfla = "Inflação IPCA: "
            let ipcaInfla = ipcainflacao.ipca
            let anoIpca = ipcainflacao.ano

            console.log(labelanoIpca.padEnd(30,'.') + anoIpca)
            console.log(labelInfla.padEnd(30, '.') + ipcaInfla.toFixed(2) + '%\n\n')
        }

        break;

    case '3':
        
        for (let i = 0; i < salarios_minimos.length && inflacao; i++){
            
            let label_salarioMin = "Salário mínimo: "
            let salarioMin = salarios_minimos[i].salario


            let label_ano = "Ano: "
            let ano = salarios_minimos[i].ano

            let label_ipcainfla = "Inflação IPCA: "
            let ipcainfla = inflacao[i].ipca
            
            let label_crecimento_Sal = "Crescimento Salarial: " 


            if (i == 0) {
                console.log('\n' + label_ano.padEnd(30,'.') + ano)
                console.log(label_salarioMin.padEnd(30,'.') + 'R$ ' + salarioMin.toFixed(2).replace('.',','))
                console.log(label_crecimento_Sal.padEnd(30,'.') + '-' )
                console.log(label_ipcainfla.padEnd(30,'.') + ipcainfla.toFixed(2) + '%\n\n')
                continue
            }

            else{
                
                let salarioAnterior = salarios_minimos[i-1].salario
                let diferenca = salarioMin - salarioAnterior
                let crescimento = (diferenca/salarioAnterior)*100

                console.log('\n' + label_ano.padEnd(30,'.') + ano)
                console.log(label_salarioMin.padEnd(30,'.') + 'R$ ' + salarioMin.toFixed(2).replace('.',','))
                console.log(label_crecimento_Sal.padEnd(30,'.') + crescimento.toFixed(2) + '%')
                console.log(label_ipcainfla.padEnd(30,'.') + ipcainfla.toFixed(2) + '%\n\n')
                continue
            }
        }   
        break;

    default:
        console.log('Opção inválida')
           break;            
}
