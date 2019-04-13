var b= 'bar';
var c ='qux';

var foo = function xyz (){
    var a = 'foo';
    console.log(a + b);
    foo();
}

module.exports =foo;

