# Avançando em funções

1. Chamada;

2. Conjunto de parametros;

3. Ação;

4. Retorno;

<P>
    São AÇÕES executadas assim que são CHAMADAS ou em decorrência de um EVENTO.
</P>

<P>
    Uma Função pode receber PARÂMETROS e retornar em RESULTADO.
</P>

<h3>Exemplo 01</h3>

~~~javascript
    function parimpar(numero){
    if(numero%2 == 0){
        return 'par'
    }
    else {
        return 'impar'
    }
    }

    console.log(parimpar(330))

    // par
~~~

<h3>Exemplo 02</h3>

~~~javascript
    function parimpar(numero){
    if(numero%2 == 0){
        return 'par'
    }
    else {
        return 'impar'
    }
    }

    console.log(parimpar(330))

    // par
~~~

Para que o javascript não interprete como NaN, um valor que não foi colocado aos parametros, o igualamos a ZERO.

~~~javascript
    function soma(valor1=0, valor2=0){
        //igualando a ZERO os parametros, ao realizar a soma com somente um numero, o mesmo identificará o valor ZERO passado: 2+ 0 = 2
    return valor1 + valor2;
    }

    console.log(soma(2))

    // 2
~~~

<h3>Exemplo 03</h3>

Variável recebendo o valor de uma function;

~~~javascript
    let valor =  function (numero){
    return  numero*2;
    }

    console.log(valor(222))

    // 444
~~~

<h3>Exemplo 04</h3>

Calculando o valor de um FATORIAL;

~~~javascript
    function fatorial(numero){
    let fator = 1;

        for(contador = numero ; contador >1; contador --){
            
            fator *=contador;

        }
        return fator;
    }
    console.log(fatorial(5))

    //120
~~~

Calculando o valor de um FATORIAL; Utilizando RECURSIVIDADE

~~~JAVASCRIPT
        
    function fatorial (numero){
        if(numero == 1){
            return 1
        }
        else{
            return numero * fatorial(numero-1)
        }

    }

    console.log(fatorial(5))
~~~