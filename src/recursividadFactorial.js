var iteracion = 0;

/*
var factorial = function(numberInput){
    if (numberInput===1 || numberInput === 2 || numberInput === 0){
        return numberInput===0? 1: numberInput;
    }
    return factorial(numberInput - 1) * numberInput;
}
*/

var factorial = function(numberInput){
    console.log('iteracion:', iteracion++);
    if (numberInput < 2) { return 1; }
    if (numberInput === 2) { return 2; }
    return factorial(numberInput - 1) * numberInput;
}

var factorialMasLegible = function (n) {
    console.log('iteracion:', iteracion++);
    if (n === 0) { return 1; }
    if (n <= 2) { return n; }
    return  n * factorial(n - 1);
}

// console.log(factorial(4));

var fibonacci = function(indice){
    if (indice < 0){throw 'no se puede hacer un fibonacci menor de 0';}
    if(indice<2){return indice;}
    return fibonacci(indice - 1) + fibonacci(indice - 2);
}

var printFibonacci = function(n){
    try {
        console.log(fibonacci(n));
    } catch (error) {
        console.log(error);
    }
}

printFibonacci(-9);