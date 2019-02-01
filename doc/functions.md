# Functions
* **Expression** : Devuelve valor
    Literales nombre igual a lo que expresa
* **Statment** : No devuelve un valor

> **Nota :** *Buscar los tipos de ciudadanos, en especial los de primer orden*
> se puede asignar a variable
> pasar como parámetro
> se puede devolver como valor de retorno

Los statments de bloque no terminan con punto y coma
if{} for {}

## Functions statment
Una function statment function(){}

   Ejemplo:
   ```js
   function sum (a,b){
      return a + b;
   }
   ```

te obliga a ponerle nombre

## Function expression
Function expresion(o funcion anonima)
Toda funcion anónima, es una function expresion.
   Si se le pone nombre es para usarla para recursividad  ``` var sum = function pepe(a,b) ```
   Ejemplo:
   ```js
   var sum =function(a,b){
        return a + b;
    };
   ```
**OJO: TODA FUNCION ANÓNIMA ES UNA FUNCTION EXPRESION, PERO TODA FUNCTION EXPRESSION NO TIENE QUE SER UNA FUNCION ANONIMA**

##  Function SCOPE
> **Nota :** *Buscar los scope de bloque*

Como curiosidad: cuando llamamos a una variable que se declarará mas tarde, estará como definida, ya que JS hace dos lecturas al compilar. La primera de las declaraciones y la segunda ejecuta las definiciones.

una function statment si la llamas antes de definirla, la ejecutará entera.

**JS NO TIENE SCOPE DE BLOQUE**
*Let* y *Const* nos dan SCOPE de bloque. No se puede volver a declarar una misma variable.

**HOISTING** LAS DECLARACIONES VAN PRIMERO
Node al compilar cada archivo te pone dentro de una funcion, el browser no lo hace, te añade el fichero al global scope

**Ejemplazo**

```js
var a  = 3;
 
function foo ()
{
    console.log(a);
    var a = 5;
}

foo();

console.log(a);

foo(a);
```

> *resultado* : undefined, 3, undefined

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


## Recursividad
### Definición
Es una técnica utilizada en programación que nos permite que un bloque de instrucciones se ejecute un cierto numero de veces(el que nosotros determinemos).
Una función recursiva se llama a si misma para ser capaz de llegar a una solución.
### Partes de una función recursiva
1. **Caso base o fin de la recursión** Es el caso donde el problema puede resolverse sin tener que hacer uso de una nueva llamada a si misma. Esto evita la continuacion indefinida de la/s parte/s recursiva/s.
2. **Parte Recursiva** Relaciona el resultado del algoritmo con resultados más simples. Se hacen nuevas llamadas a la propia función, pero están más próximas al caso base.

### Tipos de recursividad:
* **Recursión indirecta o cruzada** Son algoritmos donde una función provoca una llamada a si misma de forma indirecta a traves de otras funciones.
* **Recursión simple** Aquella en que la definición sólo aparece una llamada recrusiva. Se puede cambiar por una función con ciclo iteractivo.
* **Recursión múltiple** Se da cuando hay mas de una llamada a sí misma dentro del cuerpo de la funcioon.
* **Recursión anidada** En algunos de los argumentos de la llamada recursiva hay una llamada a sí mísma.

### Ejercicos planteados en clase:
* Ejercicio de factoriales sin usar recursividad
* Ejercicio de cálculo de factoriales usando la recursividad
* Ejercicio de pintar los numeros del 1 al 10 usando unicamente una función recursiva.


## Arguments
**Ejercicio :** Hacer una funcion sum, que acepte una cantidad indefinida de numeros y los sume.

si no se define en la funcion no hay limite de parametros de entrada.
**arguments :**es una palabra reservada: ejempo en arguments.js.

## Call,Apply 
Todas las funciones tienen metodos, algunos de esos metodos son el Call y el Apply
Son dos maneras alternativas para ejecutar las funciones.
### Call
numero indererminado de paramentros, el primero empezamos con null, el primer argumento es para cambiar el this(thisArg)
mientras que solo sepamos usarlo con null es como si llamamos a la funcion por su nombre(), por lo tanto no nos servira de mucho mientras usemos el primer parametro como null.
### Apply
solo dos parametros, y con el primero empezaremos con un null, el primer argumento es para cambiar el this(thisArg)
Aqui no nos pasa como el Call, el primer argumento puede ser null y aun asi nos interesa su funcionamiento.
con el primer argumento que se le pasa a null, y en la segunda se pone un array, lo que pasara si llamas a 
nombre_function.apply(null, array_de_argumentos).

## Mundo browser
A la carpeta le llamaremos globalscope
creamos un index.html, e usamos el ``` npm install http-server ```
hay que añadirlo a el package.json dentro de scripts

   ```js
    "scripts": {
    "test": "mocha --colors test/**/*.spec.js",
    "http-server": "http-server src/globalscopebrowser"
   }
   ```
para levantar el servidor ``` npm run http-server ```