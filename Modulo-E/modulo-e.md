# Repetições em JavaScript

<h2> Laços e Repetições</h2>

Laços oferecem um jeito fácil e rápido de executar uma ação repetidas vezes.

> Você pode pensar em um laço de repetição como um jogo onde você manda o seu personagem andar X passos em uma direção e Y passos em outra; por exemplo, a ideia "vá 5 passos para leste" pode ser expressa em um laço desta forma:

~~~javascript
var passo;
for (passo = 0; passo < 5; passo++) {
  // Executa 5 vezes, com os valores de passos de 0 a 4.
  console.log('Ande um passo para o leste');
}
~~~

# While

Uma declaração while executa suas instruções, desde que uma condição especificada seja avaliada como verdadeira.

O teste da condição ocorre antes que o laço seja executado. Desta forma se a condição for verdadeira o laço executará e testará a condição novamente. Se a condição for falsa o laço termina e passa o controle para as instruções após o laço.

~~~javascript
    while (condicao)
        declaracao
~~~

<h3> Exemplo 1</h3>

~~~javascript
    valor1 = 0;
    valor2 = 0;

        while (valor1 < 3) {
            valor1++;
            valor2+= valor1;

        console.log(valor1, valor2)
}
~~~
A cada iteração, o laço incrementa valor1 e adiciona este valor para valor2. Portanto, valor1 e valor2 recebem os seguintes valores:

- Depois de executar pela primeira vez: valor1 = 1 e valor2 = 1
- Depois da segunda vez: valor1 = 2 e valor2 = 3
- Depois da terceira vez: valor1 = 3 e valor2 = 6

Depois de executar pela terceira vez, a condição valor1 < 3 não será mais verdadeira, então o laço encerrará.

<h3> Exemplo 2</h3>

~~~javascript
valor1 = 0;
while (valor1 <= 9) {

    valor1++;

    console.log(`Passo ${valor1}`)
}
// A cada iteração, o laço incrementa valor1. Portanto, valor1 recebe o seguinte valor:

/*
Passo 1
Passo 2
Passo 3
Passo 4
Passo 5
Passo 6
Passo 7
Passo 8
Passo 9
Passo 10
*/
~~~

# do... While

 A instrução do...while repetirá até que a condição especificada seja falsa.

~~~javascript
    do
        declaracao
        
    while (condicao);
~~~

A instrução será executada uma vez antes da condição ser verificada.

Caso a condicao seja verdadeira, então o laço será executado novamente. Ao final de cada execução, a condicao é verificada. Quando a condição contida no while for falsa a execução do laço é terminada e o controle é passado para a instrução seguinte a do...while.

<h3> Exemplo 1</h3>

No exemplo a seguir, o laço é executado pelo menos uma vez e irá executar até que i seja menor que j.

~~~javascript
    var i = 5
    var j = 9

        do {
            i++;
            console.log(i);
        } while (i < j);

/*
6
7
8
9
*/
~~~

# for

Um laço for é repetido até que a condição especificada seja falsa. O laço for no JavaScript é similar ao Java e C. Uma declaração for é feita da seguinte maneira:

~~~javascript
    for ([expressaoInicial]; [condicao]; [incremento])
  
        declaracao
~~~

Quando um for é executado, ocorre o seguinte:

- A 'expressão expressao' Inicial é inicializada e, caso possível, é executada. Normalmente essa expressão inicializa um ou mais contadores, mas a sintaxe permite expressões de qualquer grau de complexidade. Podendo conter também declaração de variáveis.

- A expressão 'condicao' é avaliada. caso o resultado de condicao seja verdadeiro, o laço é executado. Se o valor de condicao é falso, então o laço terminará. Se a expressão condicao é omitida, a condicao é assumida como verdadeira.

- A instrução é executada. Para executar múltiplas declarações, use uma declaração em bloco ({ ... }) para agrupá-las.

- A atualização da expressão 'incremento', se houver, executa, e retorna o controle para o passo 2.

<h3> Exemplo 1</h3>

No exemplo a seguir, o laço é executado pelo menos uma vez e irá executar até que i seja menor que j.

~~~javascript
for(i=0;i<9;i++){
        console.log(i);
}
~~~