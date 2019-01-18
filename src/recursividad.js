var count = 0;
function foo()
{
    count ++;
    bar();
}

function bar(){
    count++;
    foo();
}

try
{ 
    foo();
}
catch(exception)
{
    console.log(exception)
    console.log(count);
}