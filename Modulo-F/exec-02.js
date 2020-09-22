/*let numeros = [0,2,5,9,10,18,24,35];
let posicao = 0;

for(posicao ; posicao<numeros.length; posicao++){
    console.log (
        `A posição ${posicao} tem o valor ${numeros[posicao]}`
    )
}
*/
/*
let frutas = [
    'maçã',
    'banana',
    'morango'
];
frutas.sort()

for(posicao in frutas){
        console.log(
            `A posição ${posicao} armazena a fruta: ${frutas[posicao]}`
        )
}
*/

let frutas = [
    'maçã',
    'banana',
    'morango'
];
frutas.sort()
    
    posicao = frutas.indexOf('manga')

    if(posicao == -1){
        console.log('Valor não encontrado...')
    } else{
        console.log(
            `O 'manga' esta na posição ${posicao}`
        )
    }

