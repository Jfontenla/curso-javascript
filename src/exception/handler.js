var factorial = require("./factorial.js");

var  handler = function(){
    try {
        factorial(-6);
    } catch (ex) {
        console.log(ex);
    }
}

handler();