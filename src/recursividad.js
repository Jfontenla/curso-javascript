function printFor(){
    var resultado = '';
    for(var i = 0; i<10; i++){
         resultado =resultado+ ' ' + i.toString() ;
    }
    console.log(resultado);
}
console.log('pintar del 1 al 10 con for, prueba rapida')
printFor();

function printRecursivo(start,end,increment)
{
    // var resultado= ''; // no hace falta, inicializas con lo de la L17
    if (end>start){ // start < end, al revés es más legible
        // no hace falta asignacón: return resultado + ...
        return start +' '+ printRecursivo(start+increment,end,increment);
    }
    else {
        return '';     
     }
}
console.log('Recursividad, pintar del 1 al 10');
console.log(printRecursivo(0,10,1));