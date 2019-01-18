function foo(){
    console.log('happy');
}

function bar()
{
    // console.log('init bar');
    foo();
    // console.log('end bar');
}

function qux()
{
    // console.log('init qux');
    bar();
    // console.log('end qux');
}

qux();