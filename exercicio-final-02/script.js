function verificar(){
    var data = new Date()
    var anoAtual = data.getFullYear()
    var formularioAno = document.querySelector('input#ano-nascimento')
    var imagem = document.getElementById('img')

    var resultado = document.querySelector('div#resultado')

        if(formularioAno.Value == 0 || Number(formularioAno.value) > anoAtual){
        alert ('[Erro] Verifique os dados e tente novamente!')
        } 
        else {
        var formularioSexo = document.getElementsByName('radsex')
        var idade = anoAtual - Number(formularioAno.value)
        var genero = ''
        

            if(formularioSexo[0].checked){
                genero = 'Homem'

                if (idade >=0 && idade <10){
                    imagem.src = 'img/bebe-menino.jpg'
                    document.body.style.background = "#c0d6e4"
                }
                else if (idade <21){
                    imagem.src = 'img/jovem-menino.jpg'
                    document.body.style.background = "#42c5fa"
                }
                else if(idade <50){
                    imagem.src = 'img/adulto-homen.jpg'
                    document.body.style.background = "#5f6d90"
                } 
                else{
                    imagem.src = 'img/idoso-homem.jpg'
                    document.body.style.background = "#c0c0c0"
                }                
            }
            else if (formularioSexo[1].checked){
                genero = 'Mulher'

                if (idade >=0 && idade < 10){
                    imagem.src = 'img/bebe-menina.jpg'
                    document.body.style.background = "#ddb4cd"
                }
                else if(idade < 21){
                    imagem.src = 'img/jovem-menina.jpg'
                    document.body.style.background = "#fb9092"
                }
                else if(idade < 50){
                    imagem.src = 'img/adulto-mulher.jpg'
                    document.body.style.background = "#c03d56"
                }
                else{
                    imagem.src = 'img/idoso-mulher.jpg'
                    document.body.style.background = "#eef1b6"
                }
            }

            resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       
        }
}