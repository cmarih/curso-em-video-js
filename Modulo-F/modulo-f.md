# Variáveis Compostas
    - Devem ser capazes de armazenar  vários valores em uma mesma estrutura.
    
## Array 

    - Um Array é uma variável especial, que pode conter mais de um valor por vez.

<h3> Criando um Array </h3>

~~~javascript
    var numeros = [0,2,5,9];

        console.log(numeros);

        // [ 0, 2, 5, 9 ]
~~~

<h3> Adicionando um item no Array </h3>

- Adicionando item em uma posição especifica:

    ~~~javascript
        var numeros = [0,2,5,9];
        //adicionando numero na posição 3 do array
        numeros[3] = 53
        
        console.log(numeros);
            
        // [ 0, 2, 5, 53 ]
    ~~~

- Adicionando item sem ordem especifica (Push):

    ~~~javascript
        var numeros = [0,2,5,9];
        //adicionando numero na posição 3 do array
        numeros[3] = 53

        //Adicionando item sem ordem especifica:
        numeros.push(38)

        console.log(numeros);

        // [ 0, 2, 5, 53, 38 ]
    ~~~

- Verificando o tamanho de um array com o atributo LENGTH:

    ~~~javascript
        var numeros = [0,2,5,9];
        //Adicionando numero na posição 3 do array
        numeros[3] = 53

        //Adicionando item sem ordem especifica:
        numeros.push(38)

        //Verificando o tamanho de um array com o atributo LENGTH:
        console.log(`Numeros de posições no vetor ${numeros.length}`);

        // Numeros de posições no vetor 5
    ~~~

- Colocando os vetores em ordem crescente (SORT()):

    ~~~javascript
        var numeros = [0,2,5,9];
        //Adicionando numero na posição 3 do array
        numeros[3] = 53

        //Adicionando item sem ordem especifica:
        numeros.push(38)

        //Colocando valores em ordem crescente
        numeros.sort()

        console.log(numeros)

        // [ 0, 2, 38, 5, 53 ]
    ~~~

- Percurso para exibição de vetores.

    ~~~javascript
        let numeros = [0,2,5,9,10,18,24,35];
        let posicao = 0;

        for(posicao ; posicao<numeros.length; posicao++){
            console.log (
                `A posição ${posicao} tem o valor ${numeros[posicao]}`
            )
        }

        /*
        A posição 0 tem o valor 0
        A posição 1 tem o valor 2
        A posição 2 tem o valor 5
        A posição 3 tem o valor 9
        A posição 4 tem o valor 10
        A posição 5 tem o valor 18
        A posição 6 tem o valor 24
        A posição 7 tem o valor 35
        */
    ~~~

    ~~~javascript
        let frutas = [
            'maçã',
            'banana',
            'morango'
        ];

        let posicao = 0;

        for(posicao ; posicao<frutas.length ; posicao++){
            console.log(
                `A posição ${posicao} armazena a fruta: ${frutas[posicao]}`
            )
        }
        /*
        A posição 0 armazena a fruta: maçã
        A posição 1 armazena a fruta: banana
        A posição 2 armazena a fruta: morango
        */
    ~~~

- Percurso para exibição de vetores SIMPLIFICADO.

    ~~~javascript
       let frutas = [
            'maçã',
            'banana',
            'morango'
        ];

        for(posicao in frutas){
                console.log(
                    `A posição ${posicao} armazena a fruta: ${frutas[posicao]}`
                )
        } 
        /*
        A posição 0 armazena a fruta: maçã
        A posição 1 armazena a fruta: banana
        A posição 2 armazena a fruta: morango
        */
    ~~~

    ~~~javascript
        //Colocando os vetores em ordem;
            let frutas = [
            'maçã',
            'banana',
            'morango'
            ];
            frutas.sort()

        for(posicao in frutas){
                console.log(
                    `A posição ${posicao} armazena a fruta: ${frutas[posicao]}`
                )
        }
        /*
        A posição 0 armazena a fruta: banana
        A posição 1 armazena a fruta: maçã
        A posição 2 armazena a fruta: morango
        */
    ~~~

- Buscando valores dentro dos Arrays(indexOf()).

    ~~~javascript
        let frutas = [
        'maçã',
        'banana',
        'morango'
        ];
        frutas.sort()
            
        posicao = frutas.indexOf('morango')
            console.log(`O 'morango' esta na posição ${posicao}`)
            
            // O 'morango' esta na posição 2
    ~~~

    ~~~javascript
        // Quando o valor solicitado não é encontrado, o mesmo retorna -1.
        let frutas = [
            'maçã',
            'banana',
            'morango'
        ];
        frutas.sort()
            
            posicao = frutas.indexOf('manga')
                console.log(`A 'manga' esta na posição ${posicao}`) 
        
        // A 'manga' esta na posição -1
    ~~~

    ~~~javascript
        //Ajustando resposta de valor não encontrado;

        let frutas = [
            'maçã',
            'banana',
            'morango'
        ];
        frutas.sort()
            
            posicao = frutas.indexOf('manga')

            if(posicao == -1){
                console.log('Valor não encontrado...')
            } else{
                console.log(`O 'manga' esta na posição ${posicao}`)
            }
        
        // Valor não encontrado...
    ~~~