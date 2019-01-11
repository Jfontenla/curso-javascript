// var foo = {x: 1, y: 2};
function at (obj, prop)
{   var result = obj[prop];
    return result;
}
// console.log (at(foo, 'x'));
// sacar las keys, de un objeto solo las keys, sin usar Object.Keys

function objectKeys(obj)
{
    
}
//foreach ()
// foreach (array,function(item, index){}) // hay que usar while obligatorio
// foreach (object, function (item, atter){})

module.exports = {at : at};