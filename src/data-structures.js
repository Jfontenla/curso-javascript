// var foo = {x: 1, y: 2};
function at (obj, prop)
{   var result = obj[prop];
    return result;
}
// console.log (at(foo, 'x'));
// sacar las keys, de un objeto solo las keys, sin usar Object.Keys

function objectKeys(obj)
{
    var attr;
    var arraykeys=[];
    for (attr in obj)
    {
        arraykeys[arraykeys.length]= attr;
    }
    return arraykeys;
}
//foreach ()
// foreach (array,function(item, index){}) // hay que usar while obligatorio
// foreach (object, function (item, atter){})
// console.log(objectKeys({a:3,b:6,c:55}));
module.exports = {
                at : at,
                objectKeys : objectKeys
                };