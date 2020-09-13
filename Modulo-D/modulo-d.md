# Condições em JavaScript

> Uma expressão (premissa) que pode ser avaliada como verdadeira (true) ou falsa (false)

<h2>Tipos de Condição</h2>

1. Condição simples: 

~~~javascript
var vel = 80;

console .log (`A velocidade do seu carro é de ${vel}km/h`)

if(vel > 60){
    console.log('Você ultrapassou a velocidade permitida. MULTADO!')
}

console.log('Dirija sempre usando o cinto de segurança')
~~~

2. Condição Composta:

~~~javascript
var país = 'EUA'
console.log(`Vivendo em ${país}`)

if(país != 'Brasil') {
    console.log('Você é Estrangeiro!')
} else {
    console.log('Você é Brasileiro!')
}
~~~

3. Condições Aninhadas:

~~~javascript
var idade = 12
console.log(`Você tem ${idade} anos.`)

if(idade < 16) {
    console.log('Não vota.')
} else {
    if (idade < 18 || idade > 65){
        console.log('Voto Opcional.')
    }
    else {
        console.log('Voto Obrigatório.')
    }
}
~~~
3. Condição Multipla:
~~~javascript
var agora = new Date()
var diadasemana = agora.getDay()

switch(diadasemana){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-feira')
        break
    case 2:
        console.log('Terça-feira')
        break
    case 3: 
        console.log('Quarta-feira')
        break
    case 4: 
        console.log('Quinta-feira')
        break
    case 5:
        console.log('Sexta-feira')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        break
    
}
~~~

# Exercitando Condição Simples/Composta:

- [Sistema de Multas:](https://github.com/cmarih/curso-em-video-js/blob/master/Modulo-D/exec-03.html) 

- [Verificando Nacionalidade:](https://github.com/cmarih/curso-em-video-js/blob/master/Modulo-D/exec-04.html) 

# Exercitando Condições Aninhadas:

- [Sistema de idade para votação:](https://github.com/cmarih/curso-em-video-js/blob/master/Modulo-D/exec-03.html) 

- [Sistema de hora:](https://github.com/cmarih/curso-em-video-js/blob/master/Modulo-D/exec-04.html) 

# Exercitando Condição Multipla:

- [Sistema de verificação dia da semana:](https://github.com/cmarih/curso-em-video-js/blob/master/Modulo-D/exec-05.html) 


