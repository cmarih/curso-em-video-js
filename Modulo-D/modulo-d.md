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

# Exercitando:

- [Sistema de Multas:]() 

- [Verificando Nacionalidade:]() 