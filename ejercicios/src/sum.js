function sum (x,y)
{
    if (typeof x ==='number' && typeof y === 'number')
    {
        return x + y;
    }
    throw new Error('Non numeric param');
}
module.exports = sum;