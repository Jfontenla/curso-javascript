//1º localizar los errores
//2º si es correcto crear una funcion que me devuelva un string con el nombre
var min = 0;
var max = 10;
function retrunValueStringIfElse(num)
{
    var result;
    if(num === 0){
        result = 'Zero';
    }else if(num ===1){
        result = 'One';    
    }else if(num===2){
        result = 'Two';
    }else if(num===3){
        result = 'Three';
    }else if(num===4){
        result = 'Four';
    }else if(num===5){
        result = 'Five';
    }else if(num===6){
        result = 'Six';
    }else if(num===7){
        result = 'Seven';
    }else if(num===8){
        result = 'Eight';
    }else if(num===9){
        result = 'Nine';
    }else if(num===10){
        result = 'Ten';
    }
    return result;
}

function retrunValueStringSwitchCase(num)
{
    var result;
    switch(num){
        case 0:
        result = 'Zero';    
        break;
        case 1:
        result = 'One';    
        break;
        case 2:
        result = 'Two';
        break;
        case 3:
        result = 'Three';
        break;
        case 4:
        result = 'Four';
        break;
        case 5:
        result = 'Five';
        break;
        case 6:
        result = 'Six';
        break;
        case 7:
        result = 'Seven';
        break;
        case 8:
        result = 'Eight';
        break;
        case 9:
        result = 'Nine';
        break;
        case 10:
        result = 'Ten';
        break;
        default:
        result='No es un numero del entero';
        break;
    }
    return result;

}

function retrunValueStringIfRetrun(num)
{
    if(num === 0){
        return 'Zero';
    }
    if(num ===1){
        return  'One';    
    }
    if(num===2){
        return 'Two';
    }
    if(num===3){
        return 'Three';
    }
    if(num===4){
        return 'Four';
    }
    if(num===5){
        return 'Five';
    } 
    if(num===6){
        return 'Six';
    }
    if(num===7){
        return 'Seven';
    }
    if(num===8){
        return 'Eight';
    }
    if(num===9){
        return 'Nine';
    
    }if(num===10){
        return 'Ten';
    }
}

function numberToStringIfElse(num)
{
    var result;
    if (typeof num !=='number')
    {
        throw new Error('Not a number');
    }else if(num<min)
    {
        throw new Error('must be greatest than ' + retrunValueStringIfElse(min));
    }else if(num>max){
        throw new Error('must be equal o lessor than Ten ' + retrunValueStringIfElse(max));
    }else{
        result = retrunValueStringIfElse(num);
        return result;
    } 
}
console.log(numberToStringIfElse(6));
function numberToStringSwitchCase(num){
    // var result;
    // if (typeof num !=='number')
    // {
    //     throw new Error('Not a number');
    // }else{
    //     switch(num){
    //         case num<min :
    //             throw new Error('must be greatest than ' + retrunValueStringSwitchCase(min));
    //         case num>max:
    //             throw new Error('must be equal o lessor than Ten ' + retrunValueStringSwitchCase(max));
    //         default:
    //         result = retrunValueStringSwitchCase(num);
    //         break;
    //     }
    //     return result;
    // }
    var result;
    if (typeof num !=='number')
    {
        throw new Error('Not a number');
    }else if(num<min)
    {
        throw new Error('must be greatest than ' + retrunValueStringSwitchCase(min));
    }else if(num>max){
        throw new Error('must be equal o lessor than Ten ' + retrunValueStringSwitchCase(max));
    }else{
        result = retrunValueStringSwitchCase(num);
        return result;
    }
}
console.log(numberToStringSwitchCase(5));
function numberToStringIfReturn(num)
{
    var result;
    if (typeof num !=='number')
    {
        throw new Error('Not a number');
    }else{
        switch(num){
            case num<min :
                throw new Error('must be greatest than ' + retrunValueStringIfRetrun(min));
            case num>max:
                throw new Error('must be equal o lessor than Ten ' + retrunValueStringIfRetrun(max));
            default:
            result = retrunValueStringIfRetrun(num);
            break;
        }
        return result;
    }
}
console.log(numberToStringIfReturn(3));

module.exports ={ 
    retrunValueStringIfElse: retrunValueStringIfElse,//tipo y valor -> es mejor hacerlo de esta forma, por que al tipo le puedes poner lo que quieras
    retrunValueStringSwitchCase : retrunValueStringSwitchCase,
    retrunValueStringIfRetrun : retrunValueStringIfRetrun,
    numberToStringIfElse : numberToStringIfElse,
    numberToStringSwitchCase: numberToStringSwitchCase,
    numberToStringIfReturn: numberToStringIfReturn
    };