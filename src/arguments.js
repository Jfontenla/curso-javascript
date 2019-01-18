

function sum()
{
    var result= 0;
    for (var i=0; i < arguments.length; i++) {
        result = result +arguments[i];
    }
    return result;
}

console.log(sum(1,2,3));
console.log(sum(1,1,1,1,1,1,1,1,1));
console.log(sum(1,1,1,1,1,1,1,1,1," jejeje hola"));