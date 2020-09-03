
        function verificar(){
            var idade = document.querySelector('input#idade');
            var valueIdade = Number(idade.value)

            var votação = document.querySelector('div#votação');

            votação.innerHTML = `Você tem: <strong>${valueIdade}</strong> anos.`

            if (valueIdade < 16) {
                votação.innerHTML += '<p>Não é permitido votar.</>'
            }
           else if(valueIdade < 18 || valueIdade > 65) {
                votação.innerHTML += '<p> Seu voto é opcional.</p'
            }
            else{
                votação.innerHTML += '<p>Seu voto é obrigatório.</p>'
            }

        }
   