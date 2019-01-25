var logArgs = function(){
    for(var i = 0; i< arguments.length; i++){
        console.log(arguments[i]);
    }
}

logArgs(1,2,3,4);
logArgs.apply(null,['1','2','abc',{}]);
//es lo mismo que el otro
logArgs(...['1','2','abc',{}]);
/*arguments NO ES UN ARRAY es un objeto*/
var logArgsForEach = function(){
    var args =Array.prototype.slice.call(arguments);// se podria poner como  : [].slice.call; Array.Prototype es lo mismo que []. Pasa lo mismo con objetos y cualquier otro tipo que tenga prototype.
    args.forEach(function(item){
        console.log(item);
    });
}
console.log('resultado del Array.prototype.slice.call(arguments) :');
logArgsForEach(1,2,3,4,5);
logArgsForEach(...['1','2','abc',{}]);


//type-of limitations-> nuevo archivo
console.log('ejercicio typeOf');
var resultado= Object.prototype.toString.call([]);
console.log(resultado);


var type_Of = function(variable){
    var tipo = Object.prototype.toString.call(variable);
    console.log(tipo);
    console.log (tipo.slice('[Object'.length,-']'.length).toLowerCase());
} 

type_Of([]);
