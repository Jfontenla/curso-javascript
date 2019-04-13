var factorial = function(num){
    if (typeof num ==='string')
        throw 'Variable num is a string, num should be a positive number';
    if (num < 0)
        throw 'Variable num can\'t a negative number. '
    if (num===1 || num===0){
        return 1;
    }
    return (num * factorial(num-1));
};

module.exports= factorial;
