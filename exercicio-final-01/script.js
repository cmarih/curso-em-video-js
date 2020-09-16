function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var saudacao = document.getElementById('saudacao')
    var data = new Date()
    var hora = data.getHours()

    //var hora = 22

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora <= 12) {
        //Bom dia

        img.src = 'img/manha.jpg'
        saudacao.innerHTML = 'Bom dia!!'
        document.body.style.background = "#F0E68C"
    }
    else if (hora >= 13 && hora <= 18) {
        //Boa tarde

        img.src = 'img/tarde.jpg'
        saudacao.innerHTML = 'Boa tarde!!'
        document.body.style.background = "#FFA500"
    } else {
        //Boa noite

        img.src = 'img/noite.jpg'
        saudacao.innerHTML = 'Boa noite!!'
        document.body.style.background = "#000000"
    }
}