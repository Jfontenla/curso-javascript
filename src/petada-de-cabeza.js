var x = {
    toString: function(){
        return 'pepe';
    }
    // ,
    // valueOf: function(){
    //     return 'bar';
    // }
};

var y = {
    valueOf: function(){
        return '987';
    }
    , 
    toString: function(){
        return '123';
    }
};

console.log(x + y);