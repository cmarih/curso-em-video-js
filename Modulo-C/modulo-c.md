# Entendendo o DOM(Document Object Model)
<h1> O que é DOM? </h1>

- O DOM (Document Object Model) é uma interface que representa como os documentos HTML e XML são lidos pelo seu browser. Após o browser ler seu documento HTML, ele cria um objeto que faz uma representação estruturada do seu documento e define meios de como essa estrutura pode ser acessada. Nós podemos acessar e manipular o DOM com JavaScript, é a forma mais fácil e usada.

<h2>Como ele é representado pelo browser:</h2>

<img src="https://i.imgur.com/lu4PMfw.jpg" alt="árvore DOM">
<br>
<br>
<h2><strong>Selecionando elementos para navegar dentro da árvore DOM</strong></h2>

Selecionando| Comando
-------     | -------
Marca:      | getElementsByTagName( )
Id:         | getElementById( )
Nome:       | getElementsByName ( )
Classe:     | getElementsByClassName( )
Seletor:    | querySelector( ) / querySelectorAll( )

- Marca:
~~~Html
    <body>
    <H1> Entendendo o DOM</H1>
    <p> Primeiros passos. </p>
    <p>
        Aprendendo a usar o <strong>DOM</strong> com JAVASCRIPT
    </p>
    
    <div>
        Clique em mim!
    </div>
    

    <script>
        var p1 = document.getElementsByTagName('p')[1]
        //Selecionando o paragrafo na posição 1.
        window.document.write('Está escrito assim: '+ p1.innerText);
        //Imprimindo dados do paragrafo selecionado
    </script>
</body>

<!-- Visualização no navegador: "Está escrito assim: Aprendendo a usar o DOM com JAVASCRIPT"-->
~~~

- Id: 

~~~html
    <body>
    <H1> Entendendo o DOM</H1>
    <p>
        Primeiros passos.
    </p>
    <p>
        Aprendendo a usar o <strong>DOM</strong> com JAVASCRIPT
    </p>
    
    <!--Adicionando um ID a tag-->
    <div id="msg">
        Clique em mim!
    </div>
    

    <script>
        //Selecionando o Id
        var d = document.getElementById('msg')
        
        //Substituindo o texto da tag selecionada pelo seu ID.
        d.innerText = "Ok"

        //Visualização no navegador: Ok
    </script>
</body>
</html>
~~~

- Name:
~~~html
    <body>
    <H1> Entendendo o DOM</H1>
    <p>
        Primeiros passos.
    </p>
    <p>
        Aprendendo a usar o <strong>DOM</strong> com JAVASCRIPT
    </p>
    <!--Adicionando um NAME  a tag-->
    <div name="msg">
        Clique em mim!
    </div>
    

    <script>
        //Seleionando a tag via NAME
        var d = document.getElementsByName('msg')[0]
        //Alterando texto da tag
        d.innerText = "Hello!"
        //Visualização no navegador: Hello!
    </script>
</body>
</html>
~~~

- Classes: 
~~~html
    <body>
    <H1> Entendendo o DOM</H1>
    <p>
        Primeiros passos.
    </p>
    <p>
        Aprendendo a usar o <strong>DOM</strong> com JAVASCRIPT
    </p>
    <!--Adicionando nome da classe a tag-->
    <div class="msg">
        Clique em mim!
    </div>
    

    <script>
        //Selecionando a tag pelo nome da classe
        var d = document.getElementsByClassName('msg')[0]
        //Substuindo o texto da tag
        d.innerText = "!"

        //Visualização no navegador: !
    </script>
</body>
</html>
~~~

- Seletor: Nova forma, e mais recomendada na maioria dos manuais, substitui os seletores acima.
> Selector por ID
~~~html
    <body>
    <H1> Entendendo o DOM</H1>
    <p>
        Primeiros passos.
    </p>
    <p>
        Aprendendo a usar o <strong>DOM</strong> com JAVASCRIPT
    </p>
    <!--Colocando ID a tag-->
    <div id="msg">
        Clique em mim!
    </div>
    

    <script>
        //Selecionado a tag pelo ID
        var d = document.querySelector('div#msg')
        //Alterando o texto a ser exibido da tag
        d.innerText = "Testando querySelector"

        //Visualização no navegador: Testando querySelector
    </script>
</body>
~~~

> Selector por Class
~~~html
    <body>
    <H1> Entendendo o DOM</H1>
    <p>
        Primeiros passos.
    </p>
    <p>
        Aprendendo a usar o <strong>DOM</strong> com JAVASCRIPT
    </p>
    <!--Colocando class a tag-->
    <div class="msg">
        Clique em mim!
    </div>
    

    <script>
        //Selecionado a tag pelo ID
        var d = document.querySelector('div.msg')
        //Alterando o texto a ser exibido da tag
        d.innerText = "Testando querySelector"

        //Visualização no navegador: Testando querySelector
    </script>
</body>
~~~

# Eventos DOM

> Eventos podem representar desde interações básicas do usuário (cliques, rolagem da página...) até notificações automáticas de novidades no DOM. 

~~~html
    <!--Exemplo de evetos- CLIQUES MOUSE-->
    <!--Adicionando estilo ao obejto que recebera o evento de clique-->
    <style>
        #area{
            background: chocolate;
            font: normal 20pt Arial;
            color: white;
            width: 220px;
            height: 220px;
            line-height: 200px;
            text-align: center;
        }
    </style>
    <div id="area">
        Interaja...
    </div>

    <script>
        var area = window.document.getElementById('area');
        //Adicionando Eventos:
        area.addEventListener('click', clicar);
        area.addEventListener('mouseenter', entrar);
        area.addEventListener('mouseout', sair); 
        //Ao clicar com o elemento, vê-se a mensagem "Clicou!"
        function clicar(){
            
            area.innerText =  'Clicou!';
            //Ao clicar, o elemento ficará na cor vermelha.
            area.style.background = 'red'
        }
        //Ao passar o mouse, vê-se a mensagem "Entrou!"
        function entrar(){
            
            area.innerText =  'Entrou!';
        }
        //Ao tirar o mouse do elemento, vê-se a mensagem "Saiu!"
        function sair(){
            
            area.innerText =  'Saiu!';
            //Ao tiraro ponteiro do mouse do elemento, o mesmo ficará com a cor verde.
            area.style.background = 'green';
        }
    </script>
~~~

<h2>Somando Valores </h2>

~~~html
 <style>
        body, input, div{
            font: normal 18pt Arial;

        }
        input{
            width: 100px;
        }
        div{
            color: brown;
            padding-top: 2rem;

        }
    </style>
</head>
<body>
    <h1>Somando valores</h1>

    <input type="number" name="txtn1" id="txtn1"> + 
    <input type="number" name="txtn2" id="txtn2">
    <input type="button" value="somar" onclick="somar()">

    <div id="result">Resultado: </div>

    <script>
    function somar(){
        var txtn1 = window.document.querySelector('input#txtn1');
        var txtn2 = window.document.querySelector('input#txtn2');
        var result = window.document.querySelector('div#result')

        var n1 = Number(txtn1.value);
        var n2 = Number(txtn2.value);
        var soma = n1 + n2;

        result.innerHTML = `A soma de ${n1} e ${n2} é igual a <strong>${soma}</strong>`

    }
    </script>
~~~
