function tabuada(){
    let numero = document.querySelector('input#txtnumero')
    let tabuada = document.querySelector('select#selecao-tabuada')

        if(numero.value == 0){
            alert('Por favor, digite um número!')
        }
        else {
            let num = Number(numero.value)
            let contador = 0

            tabuada.innerHTML = ''

            while (contador <= 10){
                let item = document.createElement('option')
                item.text = `${num} x ${contador} = ${ num*contador}`
                tabuada.appendChild(item)
                contador++
            }
        }
}