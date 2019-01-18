function fib(a)
{
    var iteraciones = 0;
    var resultado = 1;
    while(a > iteraciones )
    {
        // iteraciones++;
        // if (resultado === 0 ){
        //     resultado = iteraciones;
        // } else 
        // {
            resultado = (iteraciones+1) * resultado;
        // }
        iteraciones ++;
    }
    return resultado;
}

function fibfor(num){
    var result= 1;
    for(var a = 0 ;a < num; a++)
    {
        result = result * (a+1);
    }
    return result;
};

console.log (fib(5));
console.log (fib(6));