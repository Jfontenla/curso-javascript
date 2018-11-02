const Adult_Minimun_Age = 18;

function getagetype(age){
    const Adult_Minimun_Age = 18;
    if(typeof age === 'number'){
        if(isBoy(age))
        {
        var message= 'BOY';
        }
        else
        {
        var message= 'MAN';
        }
        return message;
    }else{
        throw new Error('NON NUMERIC PARAM');
    }
}
function isBoy(age){
    return age<Adult_Minimun_Age;
}
function isAdult(age){
    // return age>=Adult_Minimun_Age;
    return !isBoy(age);
}
module.exports ={ 
        getagetype: getagetype,//tipo y valor -> es mejor hacerlo de esta forma, por que al tipo le puedes poner lo que quieras
        isBoy,
        isAdult
        };
