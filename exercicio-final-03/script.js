function contar(){
    let inicio = document.querySelector('input#txtinicio')
    let fim = document.querySelector('input#txtfim')
    let passo = document.querySelector('input#txtpasso')
    let resultado = document.querySelector('div#resultado')

    if(inicio.value == 0 || fim.value == 0 || passo.value == 0){
        resultado.innerHTML = `Impossível contar... `
    }
    else{
        resultado.innerHTML = 'Contando: <br> '
        //Convertendo dados em numeros
        let inicial = Number(inicio.value)
        let final = Number(fim.value)
        let passos = Number(passo.value)

        let contador = inicial

        if(inicial < final){
            //contagem crescente
            for(contador; contador <= final; contador += passos){
                resultado.innerHTML += `${contador} \u{1f449}`
            }
    
        }
        else{
            //contagem regressiva
            for(contador; contador >= final; contador -= passos){
                resultado.innerHTML += `${contador} \u{1f449}`
            }
        }

        resultado.innerHTML += `\u{1f3c1}`
    }
}