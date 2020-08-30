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

<h3> <strong> String para Number:</strong></h3> 

~~~JAVASCRIPT
 //Numero inteiro
    Number.parseInt()

//Numero decimal/real
    Number.parseFloat()

//Na versão mais moderna do JavaScript, basta utilizar a alternativa abaixo e ele identifica o tipo de variável numérica:
    Number();
~~~

<h3><strong> Number para String:</strong></h3>

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

<h3><strong>Quantidade de caracteres em uma string (.length):</strong></h3>

~~~JAVASCRIPT
    //Contagem de caracteres em um nome:
    var name = window.prompt('Qual é o seu nome?');

    document.write(`Olá ${name}! Seu nome tem ${name.length} letras.`)
~~~

<h3><strong> Transformando texto em MAIÚSCULO (.toUpperCase() ):</strong></h3>

~~~JAVASCRIPT
     var name = window.prompt('Qual é o seu nome?');

    document.write(`Seu nome em maiúsculo é ${name.toUpperCase()}`)
~~~
<h3><strong> Transformando texto em MINUSCULO (.toLowerCase() ):</strong></h3>

~~~JAVASCRIPT
    var name = window.prompt('Qual é o seu nome?');

    document.write(`Seu nome em minusculo é ${name.toLowerCase()}`)
~~~
<h3><strong> Transformando ponto (.) em virgula (,) e adicionando casas decimais:</strong></h3>

~~~JAVASCRIPT
    var n1 = 1545.50;
    //Adicionando casa decimal:
    n1.toFixed(2)
    //Transformando (.) em (,);
    .replace('.',',');
~~~

<h3><strong> Conversão para moeda local: </strong></h3>
 
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
<h2> 1. <strong> Aritmético: </strong></h2>

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

<h2> 2. <strong> Atribuição: </strong></h2>
O valor da variável é substituído conforme for acrescentando valores.
<br>

~~~JAVASCRIPT
//EXEMPLO
    var n = 3;
        
    document.write(`${n+=4} | ${n-=5} | ${n*=4} | ${n\=2} | ${n**=2} | ${n%=5}`);

//Valor do calculo no navegador: 7 | 2 | 8 | 4 | 16 | 1
~~~

<br>
<h3><strong>Incremento:</strong></h3>

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
<h2> 3. <strong> Relacionais: </strong></h2>

1. Maior (>):
~~~JAVASCRIPT
        var a = 5;
        var b = 2;
        document.write(`${a>b}` );

    //Visualização no navegador: true
~~~

2. Menor (<):
~~~JAVASCRIPT
        var a = 5;
        var b = 2;
        document.write(`${a<b}` );

    //Visualização no navegador: false
~~~

3. Maior ou igual (>=):
~~~JAVASCRIPT
        var a = 5;
        var b = 2;
        document.write(`${a>=b}` );
        
    //Visuaização no navegador: true
~~~

4. Menor ou igual (<=):
~~~JAVASCRIPT
        var a = 5;
        var b = 2;
        document.write(`${a<=b}` );

    //Visuaização no navegador: false
~~~

4. Igual (==):
~~~JAVASCRIPT
        var a = 5;
        var b = 2;
        document.write(`${a==b}` );
    //Visualização no navegador: false

        var a = 5;
        var b = 5;
        document.write(`${a==b}` );
    //Visualização no navegador: true
~~~

5. Diferente (!=):
~~~JAVASCRIPT
        var a = 5;
        var b = 5;
        document.write(`${a!=b}` );
    //Visualização no navegador: false

        var a = 5;
        var b = 2;
        document.write(`${a!=b}` );
    //Visualização no navegador: true
~~~

6. Identidade(===):

**Igualdade restrita:**
~~~JAVASCRIPT
    //Mesmo o valor de "B" sendo uma String, ele identifica como iguais, apesar de serem de tipos diferentes.
        var a = 5;
        var b = '5';
        document.write(`${a==b}` );
    //Visualização no navegador: true

    //Por isso, utiliza-se o operador de identidade para diferencia-los.
        var a = 5;
        var b = '5';
        document.write(`${a===b}` );
    //Visualização no navegador: false
~~~

**Desigualdade restrita**

~~~JAVASCRIPT
    //Mesmo o valor de "B" sendo uma String, ele identifica como iguais, apesar se serem de tipos diferentes.
        var a = 5;
        var b = '5';
        document.write(`${a!=b}` );
    //Visualização no navegador: false

    //Por isso, utiliza-se o operador de identidade para diferencia-los.
        var a = 5;
        var b = '5';
        document.write(`${a===b}` );
    //Visualização no navegador: true
~~~

<h2> 4. <strong> Lógicos: </strong></h2>
1. AND (&&): quando usado para valores Booleanos, && retorna verdadeiro se ambos os operandos forem verdadeiro ; senão, retorna falso.
<br>
<br>

- true AND true = true 

- true AND false = false 

- false AND true = false 

- false AND false = false

~~~JAVASCRIPT
        var a = 5;
        var b = 2;
        document.write(`${a > b && b % 2 == 0}` );

        //Visualização no navegador: true

        Para a expressão acima, primeiro é analisado a expressão aritmética (b % 2 que equivale a 0). Em seguida é realizada a comparação relacional 0==0 --> true), seguindo para a expressão relacional (a > b --> true), como ambas são verdade, realizamos a comparação (true && true --> true).
~~~

~~~JAVASCRIPT
        var a = 5;
        var b = 5;
        document.write(`${a > b && b % 2 == 0}` );

        //Visualização no navegador: false

        Para a expressão acima, primeiro é analisado a expressão aritmética (b % 2 que equivale a 1). Em seguida é realizada a comparação relacional 1==0 --> false), seguindo para a expressão relacional (a > b --> false), como ambas NÃO são verdades, realizamos a comparação (false && false --> false).
~~~

~~~JAVASCRIPT
        var a = 5;
        var b = 4;
        document.write(`${a > b && b % 2 == 1}` );

        //Visualização no navegador: false

        Para a expressão acima, primeiro é analisado a expressão aritmética (b % 2 que equivale a 0). Em seguida é realizada a comparação relacional 0==1 --> false), seguindo para a expressão relacional (a > b --> true), temos somente UMA verdade, realizamos então a comparação (false && true--> false)
~~~

2. OR (||): quando usado para valores Booleanos, || retorna verdadeiro se qualquer dos operandos for verdadeiro; se ambos são falso, retorna falso.
<br>
<br>
- true OR true = true 

- true OR false = true 

- false OR true = true 

- false OR false = false

~~~JAVASCRIPT
        var a = 6;
        var b = 2;
        document.write(`${a == b || b - 2 == 0}` );

        //Visualização no navegador: true

        Para a expressão acima, primeiro é analisado a expressão aritmética (b - 2 que equivale a 0). Em seguida é realizada a comparação relacional 0==0 --> true), seguindo para a expressão relacional (a == b --> false) e por ultimo a expressão lógica (||), temos somente UMA verdade, realizamos então a comparação (true || false --> true).
~~~

~~~JAVASCRIPT
        var a = 6;
        var b = 6;
        document.write(`${a == b || b - 2 == 4}` );

        //Visualização no navegador: true

        Para a expressão acima, primeiro é analisado a expressão aritmética (b - 2 que equivale a 4). Em seguida é realizada a comparação relacional 4==4 --> true), seguindo para a expressão relacional (a == b --> true), sabemos que ambas são verdade, então realizamos a comparação (true || true --> true).
~~~

~~~JAVASCRIPT
        var a = 6;
        var b = 6;
        document.write(`${a != b || b - 2 == 0}` );

        //Visualização no navegador: false

        Para a expressão acima, primeiro é analisado a expressão aritmética (b - 2 que equivale a 4). Em seguida é realizada a comparação relacional 4==0 --> false), seguindo para a expressão relacional (a != b --> false), sabemoa que ambas NÃO são verdade, logo, realizamos a compração (false || false --> false).
~~~
<h2> 5. <strong> Ternários: </strong></h2>

- Possui três operandos. Este operador é frequentemente usado como um atalho para a instrução if. Representando da seguinte forma:

~~~ JAVASCRIPT
condition ? true : false 
~~~

~~~ JAVASCRIPT
        idade = 18;
        
        document.write(`${idade>=18?'Permitido beber!':'Menor que 18, sai fora!'}` );
    // Visualização no navegador: Permitido beber!

        media = 5;
        
        document.write(`${media>=8?'Aprovado':'Reprovado'}` );
    // Visualização no navegador: Reprovado
~~~


