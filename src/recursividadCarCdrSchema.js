var car = function(arrayInput=[])
{    
    return arrayInput[0];
}

var cdr = function(arrayInput=[])
{
    // var output= [];
    // var arrayInputPosition = 1;
    
    //ESTO ES LO MISMO QUE EL FOR
   var output = arrayInput.slice(1); 

    // for (var index = 0; index < arrayInput.length; index++) {
    //     if (arrayInputPosition>=arrayInput.length)
    //         return output;
    //     output[index] = arrayInput[arrayInputPosition];
    //     arrayInputPosition++;
    // }
    return output;
}
var hasElements = function(arrayInput=[]){
    return arrayInput.length>0;
}

var array =[1,2,3,4,5,6,7];
// console.log(car(array));
// console.log(cdr(array));

var log = function(arrayInput)
{
    if(hasElements(arrayInput))
    {
        console.log(car(arrayInput));
        log(cdr(arrayInput));
    }
}

log(array);

// module.exports={
//     car:car,
//     cdr:cdr
// };