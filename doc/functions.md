# Functions
* **Expression** : Devuelve valor
    Literales nombre igual a lo que expresa
* **Statment** : No devuelve un valor

> **Nota :** *Buscar los tipos de ciudadanos, en especial los de primer orden*

Los statments de bloque no terminan con punto y coma
if{} for {}



## Functions statment
Una function statment function(){}

>   Ejemplo:
>   function sum (a,b){
>       return a + b;
>   }

te obliga a ponerle nombre

## Function expression
Function expresion(o funcion anonima)
Toda funcion anónima, es una function expresion.
Si se le pone nombre es para usarla para recursividad *var sum = function pepe(a,b)*
>   Ejemplo:
>   var sum =function(a,b){
>        return a + b;
>    };



##  Function SCOPE
> **Nota :** *Buscar los scope de bloque*

Como curiosidad: cuando llamamos a una variable que se declarará mas tarde, estará como definida, ya que JS hace dos lecturas al compilar. La primera de las declaraciones y la segunda ejecuta las definiciones.

una function statment si la llamas antes de definirla, la ejecutará entera.

JS NO TIENE SCOPE DE BLOQUE
**HOISTING** LAS DECLARACIONES VAN PRIMERO
Node al compilar cada archivo te pone dentro de una funcion, el browser no lo hace, te añade el fichero al global scope

**Ejemplazo**
>Var a  = 3;

>function foo ()
>{
>    console.log(a);
>    var a = 5;
>}

>foo();

>console.log(a);

>foo(a);

>*resultado* : undefined, 3, undefined

##  Nested Scope
En JS se pueden crear una función dentro de otra función

## Call Stack

Pila de llamadas: existe un limite de llamadas apiladas

Es lo primero que hay que ver, que es lo que te lanza por pantalla por error, desde el punto en el que sale la excepción y las llamadas inversas
Usar recursividad para ver como falla y saber que cantidad de llamadas se pueden hacer.
**Ejemplo**

Error: Sad
    at foo (C:\Users\jfontenl\curso-javascript\src\call-stack.js:3:11)
    at bar (C:\Users\jfontenl\curso-javascript\src\call-stack.js:9:5)
    at qux (C:\Users\jfontenl\curso-javascript\src\call-stack.js:16:5)
    at Object.<anonymous> (C:\Users\jfontenl\curso-javascript\src\call-stack.js:20:1)
    at Module._compile (module.js:653:30)
    at Object.Module._extensions..js (module.js:664:10)
    at Module.load (module.js:566:32)
    at tryModuleLoad (module.js:506:12)
    at Function.Module._load (module.js:498:3)
    at Function.Module.runMain (module.js:694:10)
## recursividad

Ejercicio de factoriales sin usar recursividad