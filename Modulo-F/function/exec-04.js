function fatorial(numero){
    let fator = 1;

        for(contador = numero ; contador >1; contador --){
            
            fator *=contador;

        }
        return fator;
}
console.log(fatorial(5))