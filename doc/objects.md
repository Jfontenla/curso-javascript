#OBJECTS Y ARRAYS
##Objects
definir un objeto 
var obj = {a:3};
**como leer** propiedades de los objetos
    obj.a;
también nos vale
    obj['a'];
como escribir propiedades de los objetos
    obj.b=22;
tambien se puede escribir de la siguiente forma
    obj['b'] = 22;
Como borrar una propiedad(cualquiera de las dos)
<delete obj[attr]>
    delete obj.y;
    delete obj['y'];
## iterations
## data sets
## tables
## records /struct
## access

# ARRAYS
 ## declaracion del array
 var arr =[]
**meter valores** con push, pero no hace falta, se pueden meter valores de otra forma por ejemplo
> arr[0]=2 hace que el array quede con el valor [2]
**leer valores**
> arr[valor] = valor 
**borrar**
arr.splice(startpossition,how possitios, newVal); newVal seria el valor o conjunto de valores por los que te lo modificia, sino ponemos nada borraremos todas las posiciones entre el start y el endpossition.
**coger una parte del array** copia desde el start hasta el end, si en estos dos valores no anotamos nada al final 
arr.slice(startPossition, endPossition); 
**Ejercicio :**
act(arr, index) -> que te devuelva el valor de un array segun una posicion
set (arr, index,value) -> sobre escribir una posición del array lo que le pasamos como valor