function fibfact(a)
{
    if(a===1) return 1;
    return a * fibfact(a-1);
}

console.log (fibfact(5));