function verificar(){
    var agora = new Date()
    var hora = agora.getHours()

    var imprimirhora = document.querySelector('div#imprimirhora')

    imprimirhora.innerHTML += `Agora são exatamente ${hora} horas.`

        if (hora < 12){
            imprimirhora.innerHTML += '<p>Bom dia!</p>'
            
        } else if(hora <= 18){
            imprimirhora.innerHTML += '<p>Boa tarde!</p>'

        }else{
            imprimirhora.innerHTML += '<p>Boa noite!</p>'
        }
}