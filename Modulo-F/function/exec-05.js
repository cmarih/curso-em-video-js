//recursividade

//calculo vetorial

/*
5! = 5 x (4 x 3 x 2 x 1) ===> 4!
logo
5! = 5 x 4!

Transformando em calculo funcional temos:
numero! = numero x (numero - 1)!

Com exceção do valor 1, pois:
1! = 1
*/ 

function fatorial (numero){
    if(numero == 1){
        return 1
    }
    else{
        return numero * fatorial(numero-1)
    }

}

console.log(fatorial(5))