# Variáveis e Tipos de dados

**Criando variáveis:**
- Var:

- Const:

- Let:

<h2> <strong>Tipos de Variáveis</strong></h2>

1. Number:

        1.1. Infinity:

        1.2. NaN:

2. String:

3. Boolean:

4. Null:

5. Underfined:

6. Object:

        6.1. Array:

7. Function:

# Tratamento de dados

<h2> Transformando Valores:</h2>

1. String para Number: 

~~~JAVASCRIPT
 //Numero inteiro
    Number.parseInt()

//Numero decimal/real
    Number.parseFloat()

//Na versão mais moderna do JavaScript, basta utilizar a alternativa abaixo e ele identifica o tipo de variável numérica:
    Number();
~~~

2. Number para String:

~~~JAVASCRIPT
    String();
    //EXEMPLO:
    var soma = n1+n2;

    window.alert('A soma dos valores é: ' + String(soma));

    //ou
    .toString();
    //EXEMPLO:
    var soma = n1+n2;

    window.alert('A soma dos valores é: ' + soma.toString());
~~~

# Formatando String - Template String (formatador de string)

~~~JAVASCRIPT
    //Utilização de tamplate string - placehoder para concatenação.

    //EXEMPLO:
         var n1 = Number(window.prompt('Digite um numero: '));
        var n2 = Number(window.prompt('Digite outro número: '));

        var soma = n1+n2;

        window.alert(`A soma entre ${n1} e ${n2} é igual a ${soma}`);
~~~

1. Quantidade de caracteres em uma string (.length):
~~~JAVASCRIPT
    //Contagem de caracteres em um nome:
    var name = window.prompt('Qual é o seu nome?');

    document.write(`Olá ${name}! Seu nome tem ${name.length} letras.`)
~~~

2. Transformando texto em MAIÚSCULO (.toUpperCase() ):
~~~JAVASCRIPT
     var name = window.prompt('Qual é o seu nome?');

    document.write(`Seu nome em maiúsculo é ${name.toUpperCase()}`)
~~~
3. Transformando texto em MINUSCULO (.toLowerCase() ):
~~~JAVASCRIPT
    var name = window.prompt('Qual é o seu nome?');

    document.write(`Seu nome em minusculo é ${name.toLowerCase()}`)
~~~
5. Transformando ponto (.) em virgula (,) e adicionando casas decimais:
~~~JAVASCRIPT
    var n1 = 1545.50;
    //Adicionando casa decimal:
    n1.toFixed(2)
    //Transformando (.) em (,);
    .replace('.',',');
~~~
4. Conversão para moeda local:
~~~JAVASCRIPT
    var n1 = 1545.50;
    //Real:
    n1.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'});
    //Dolar:
    n1.toLocaleString('pt-BR', {style: 'currency', currency:'USD'});
    //Euro:
    n1.toLocaleString('pt-BR', {style: 'currency', currency:'EUR'});
~~~

# Operadores 
1. Aritméticos:

        1.1. Adição (+)

        1.2. Subtração (-)

        1.3. Multiplicação (*)

        1.4. Divisão (/)

        1.5. Resto da divisão inteira (%)

        1.6. Potência - Quadrado (**)
<br>
<br>
<h3><strong>Ordem de precedência</strong></h3>

Ordem | Operador | Descrição
----- | ------- |   ---------
1ª ordem | (  )  | parenteses
2ª ordem | **  | potencia
3ª ordem | * , /, %  | Multiplicação, divisão, resto da divisão.
4ª ordem | + , - | adição, subtração

<br>

~~~JAVASCRIPT
//EXEMPLO:
        var a = 5+3;
        var b = a%5;
        var c = 5*b**2;
        var d = 10-a/2;
        var e = 6*2/d;
        var f = b%e+4/e;
        
        document.write(`${a} | ${b} | ${c} | ${d}| ${e} | ${f}`);

    //Valor dos calculos no navegador: 8 | 3 | 45 | 6| 2 | 3
~~~
<br>
<h3><strong>Auto-atribuições</strong></h3>

O valor da variável é substituído conforme for acrescendo valores.
<br>

~~~JAVASCRIPT
//EXEMPLO
    var n = 3;
        
    document.write(`${n+=4} | ${n-=5} | ${n*=4} | ${n\=2} | ${n**=2} | ${n%=5}`);

//Valor do calculo no navegador: 7 | 2 | 8 | 4 | 16 | 1
~~~

<br>
<h3><strong>Incremento</strong></h3>

~~~JAVASCRIPT
//EXEMPLO
    var x=5;

    document.write(`${x+=1} | ${x-=1}` );

//COM INCREMENTO
    document.write(`${x++} | ${x} | ${x--} | ${x}` );

//Valor no navegador: 5 | 6 | 6 | 5

//Colocando os sinais antes da variavel, o valor é exibido de imediato.
    document.write(`${++x} | ${--x}` );
    
//Valor no navegador: 6 | 5

~~~


2. Atribuição:
3. Relacionais:
4. Lógicos:
5. Ternários:

