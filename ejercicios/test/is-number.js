function isNumber(arg)
{
    var result;
    if (typeof(arg)==='number')
    {
        result = true;
    }
    else
    {
        result = false;
    }
    return result;
}

console.log(isNumber(3));