//pegando valores do formulário
let numeros = document.querySelector('input#txtnumeros')
let addnumber = document.querySelector('select#add-number-list')
let resultado = document.querySelector('p#result')

//criando variavel para adicionar valores de array
let valores = []

function valorAdd(numero){
    //analisando se o valor adicionado é um número entre 1 e 100.
    if(Number(numero) >= 1 && Number(numero) <=100){
        return true
    }
    else{
        return false
    }
}

function naLista(numero, lista){
    //verificando se um numero ja existe na lista de array.
    if (lista.indexOf(Number(numero)) != -1) {
        return true
    } 
    else {
        return false
    }
    
}


function adicionarNumber(){
    //valorAdd, analisando se o valor adicionado é um número.
    // naLista(), verifica se o valor adicionado (!)não está localizado na lista 'valores'
    if(valorAdd(numeros.value) && !naLista(numeros.value, valores)){

        //adicionado os valores recebido pelo formulário, no array 'valores'
        valores.push(Number(numeros.value))

        //adicionar item, ao select uma tag'option' para visualização em tela dos valores.
        let item = document.createElement('option')
        item.text = `Valor ${numeros.value} adicionado.`
        //adicionando elemento a lista de números, tag select
        addnumber.appendChild(item)
        // ao adicionar elementos a lista, tem que limpar o 'resultado'
        resultado.innerHTML = ''
    } else {
        alert('Valor inválido ou já adicionado a lista.')
    }
    //Apagando o número do objeto "numeros", após adicionado a  lista
    numeros.value = ''
    //Fazer o curso  do mouse piscar, no campo 'números'
    numeros.focus()
}

function finalizarCalculo(){
    //Verificando se o array está vazio, ao clicar no botão de 'finalizar'
    if (valores == 0) {

        alert('Adicione valores antes de finalizar!')
        
    } 
    else {
    //criando váriaveis:
    // Para verificar o total de elementos:
    let totalElement = valores.length
    
    //Zerando resultado
    resultado.innerHTML = ''

    // Para verificar o total de elementos:
    resultado.innerHTML += `<p> Ao todo, temos ${totalElement} números adicionados.</p>`

    //Verificando quais valores do array é o maior ou menor
    let maior = valores[0]
    let menor = valores[0]

    let soma = 0
    let media = 0
    //para cada posição no array, verifica-se: Laço de percurso
        for(let position in valores){
            //somando os valores adicionados ao array
            soma += valores[position]
            //Se o valor adicionado a variavel 'maior', for maior que o numero atualmente guardado, então o valor de 'mairo' é alterado para o valor recentemente adicionado
            if (valores[position] > maior)
                maior = valores[position]
            //Se o valor adicionado a variavel 'menor', for menor que o numero atualmente guardado, então o valor de 'menor' é alterado para o valor recentemente adicionado
            if (valores[position] < menor)
                menor = valores[position]
        }
        //calculando a média dos arrays
        media = soma/totalElement


        resultado.innerHTML += `<p>O maior valor adicionado é ${maior}.</p>`
        resultado.innerHTML += `<p>O menor valor adicionado é ${menor}.</p>`
        resultado.innerHTML += `<p>A soma dos valores adicionados é ${soma}.</p>`
        resultado.innerHTML += `<p>A média dos valores adicionados é ${media}.</p>`
    }
}

//function para limpar valores da lista
function limparValue(){ 
    //limpa o array
    valores = []

    //limpa os resultados em tela
    addnumber.innerHTML = ''
    resultado.innerHTML = ''
    
}
