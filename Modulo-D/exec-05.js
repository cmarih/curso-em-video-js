function verificar(){
    var agora = new Date()
    var diadasemana = agora.getDay()

    var mostrarsemana = document.querySelector('div#mostrarsemana')

        switch(diadasemana){
        case 0:
            mostrarsemana.innerHTML += '<p>Hoje é Domingo</p>'
            break
        case 1:
            mostrarsemana.innerHTML += '<p>Hoje é Segunda-feira</p>'
            break
        case 2:
            mostrarsemana.innerHTML += '<p>Hoje é Terça-feira</p>'
            break
        case 3: 
            mostrarsemana.innerHTML += '<p>Hoje é Quarta-feira</p>'
            break
        case 4: 
            mostrarsemana.innerHTML += '<p>Hoje é Quinta-feira</p>'
            break
        case 5:
            mostrarsemana.innerHTML += '<p>Hoje é Sexta-feira</p>'
            break
        case 6:
            mostrarsemana.innerHTML += '<p> Hoje é Sábado</p>'
            break
        default:
            mostrarsemana.innerHTML += '<p> Dia da semana inválido</p>'
            break
        }   
}