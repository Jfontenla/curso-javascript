# PARTICIPANTES

*	Alice : adacostac@gmail.com
*	Renata: rmonteal14@gmail.com
*	Pau ( PROFE) : pfraces@gmail.com
*	Salva: puglisisalva@gmail.com
*	Jose: jfontenla.glez@gmail.com
# OBSERVERS 
*	David : loscabezonesdavid@gmail.com
*   Javi : javidevictoria@gmail.com

# ENLACES DEL CURSO
*	**Repositorio**: https://github.com/pfraces-wip/curso-javascript
*	 **Foro**: http://cursojavascript.foroactivo.com/
*	 **Chat**:  https://cursojavascriptsede.slack.com
*	**Drive** : https://drive.google.com/drive/folders/1T3kmj2KNmG0FHyDhbSieRyT7zWF8uBzb?usp=sharing_eip&ts=5bb7910c

* **Quitar los proxis en la carpeta de usuario :**
> npm config set proxy  http://10.110.8.42:8080
>npm config set https-proxy  >http://10.110.8.42:8080
>npm config rm proxy
>npm config rm https-proxy
>npm config edit
>git config --global http.proxy >http://10.110.8.42:8080
>git config --global --unset http.proxy


# EXPLICACIONES FUTURAS

*	TDD(TEST-DRIVER-DEVELOPER)
*	UNIT-TEST
*	MARKDOWN
*	NODEJS
*	SEMVER(version semantica)
*	JSON
*	Package-lock.json
*	Git
*	BDD
*   REPL *interprete de node*
*   Codigos de powershell
*   Mocha
*   Expect.js
*   CODE SMELL -> ESTUDIAR SUS REFACTORS

## Package.json 
*te dice las dependencias del proyecto.*
### ¿Que es el package.json? 
**Lo podemos considerar como un manifiesto de nuestro proyecto**
**Npm** es una herramienta de Node para administrar los paquetes. Se suele instalar junto con Node y tiene dos roles fundamentales:
* **Manejar la publicación de un proyecto al regístro público de npm** (para que otros puedan descargarlo y utilizarlo como dependencia de sus proyectos)
* **Administrar las dependencias del proyecto**

Dentro de este archivo se definen y maneja características como:
* Nombre
* Versión
* Dependencias
* Autores
* Licencia
* Y mas…

_(**yarn ->** administracion de paquetes para Node creado por FACEBOOK)_

Con el Package.json podemos asegurar que quienes tengan una copia del mismo, podrán acceder a las mísmas propiedades y sincronizar entre múltiples partes de cada vez que decidan hacer un cambio. _Por esto podemos considerarel manifiesto de nuestro proyecto_

**npm init : Para crear un package.json automáticamente.**

_(yarn init : administración de paquetes Node FACEBOOK)_
/*Se crea con npm init -y nos crea el package.json/*
/*El archivo package-lock.json se borra/*

#### Algunos comandos NPM
##### **Instalación de dependencias :**
Poner el comando "Npm install" continuado de estas dos librerias js
* Mocha.js
* Expect.js

**Npm install [librerias_js] -save o npm install [librerias] -save-dev** te guardan las dependencias en el package.json

Node_modules estarán todas las librerías de las depndencias,/* esta carpeta es bueno /* ignorarla [GIT IGNORE EN LA CARPETA DEL PROYECTO PARA INDICARSELO A GIT]

### COMANDOS DE GIT
* **Git add –all :**
* **Git remove HEAD :**
* **Git commit –m “/*cometarios del commit/* ” :**
* **Git log :**
* **Git status :**
* **Git push :**
* **Git pull :**

# JAVASCRIPT LENGUAJE NO TIPADO
Los lenguajes de programacion se **pueden diferenciar** de diferentes formas.

### **NIVEL DE ABSTACCIÓN**
Una forma de clasificar un lenguaje podría decirse que es la facilidad de comprensión del lenguaje por parte del ser humano o la facilidad de comprensión por parte de la máquina (computadora). A esto se le llama 
1. **Lenguaje Máquina :**  Lenguaje que entiende directamente la máquina.
2. **Lenguaje de programación de bajo nivel :** Son mas fáciles de utilizar que el lenguaje de la máquina o computadora como sucedía con el lenguaje máquina.
3. **Lenguajes de programación de alto nivel :** Son más fáciles de aprender porque se usan palabras o comandos del lenguaje natural, generalmente del ingés. Este es el caso del BASIC, el lenguaje de programación más conocido.

### **Manera de abordar la tarea a realizar**
Otra forma de clasificar un lenguaje de programación es según su filosofía de su creacion o el punto de vista de trabajar con los progrmas.
1. **Lenguaje imperativo :** consisten de plantear una solución como una serie de pasos dispuestos uno después de otro, es como seguir un instructivo paso a paso. Entre ellos tenemos Cobol, Pascal, C y Ada.
2. **Lenguaje declarativo :** son vistos como una serie de definiciones al puro estilo matemático y la solución del problema consiste en usar todas estas definiciones en conjunto para obtener un resultado. Lisp, Prolog,Racket, OCaml. Otros ejemplos de lenguajes declarativos, pero que no son lenguajes de programación, son HTML (para describir páginas web) o SQL (para consultar bases de datos). *Segun el blog que consulte, dice que JavaScript,Python, Ruby son lenguajes híbridos* Dejo el enlace, lo dejo aquí para mirarlo mas adelante. [Programación declarativa](https://medium.com/@manu_msr/el-paradigma-de-programaci%C3%B3n-declarativa-6dcbecc bd173)

### **SEGÚN EL PROPÓSITO**
Segun el proposito del lenguaje,es decir, el tipo de problemasa tratar con ellos. 
1. **Lenguajes de propósito general :** Aptos para todo tipo de tareas. Ejemplo: C.
2. **Lenguajes de propósito específico :** Hechos para un objetivo muy concreto. Ejemplo: Csound (para crear ficheros de audio)
3. **Lenguajes de programación de sistemas :** Diseñados para realizar sistemas operativos o drivers. Ejemplo: C.
4. **Lenguajes de script :**Para realizar tareas de control y auxiliares. Antiguamente eran los llamados lenguajes de procesamiento por lotes(batch) o JCL(_"Job Control Lenguajes"_).

### **Evolución histórica**
Los lenguajes de programacion también se pueden clasificar según su evolución histórica. Con el paso del tiempo el nivel de abstracción, pero en la práctica, los de una generación o terminan de sustituir a los de la anterior:
1. **Primera generación :** Código máquina.
2. **Segunda generación :** Lenguajes ensamblador.
3. **Tercera generación :** La mayoría de lenguajes modernos, diseñados para facilitar la programación a los humanos. Ejemplos : C, Java.
4. **Cuarta genaración :** Diseñados con un propósito concreto, para abordar un tipo conctreto de problemas. Ejemplos : NATURAL, Mathematica.
5. **Quinta generación :** La intención es que el programador establezca el qué problema ha de ser resuelto y las condiciones a reunir, y la máquina lo resuelve. Se usan en inteligencia artifical. Ejemplo : Prolog.

### ***Manera de ejecutarse***
1. **Lenguajes Compilados :** Un programa traductor traduce el código del programa (código fuente) en código máquina (código objeto). Otro programa, el enlazador, unirá de los ficheros de código objeto del programa principal con los de las librerías para producir el programa ejecutable. Ejemplo: C.
2. **Lenguajes Interpretados :** Un programa (interprete), ejecuta las instrucciones del programa de manera directo. Ejemplo: Lisp.
3. **Lenguajes Transpilados :**

También los hay mixtos, como Java, que primero pasan por una fase de compilación en la que el código fuente se transforma en “bytecode”, y este “bytecode” puede ser ejecutado luego (interpretado) en ordenadores con distintas arquitecturas (procesadores) que tengan todos instalados la misma “máquina virtual” Java.

### **Paradigma de programación**
1. **Programación procedural :** Divide el problema en partes más pequeñas, que serán realizadas por subprogramas (subrutinas, funciones, procedimientos), que se llaman unas a otras para ser ejecutadas. Ejemplos: C, Pascal.
2. **Programación orientada a objetos :** Crean un sistema de clases y objetos siguiendo el ejemplo del mundo real, en el que unos objetos realizan acciones y se comunican con otros objetos. Ejemplos: C++, Java.
3. **Programación funcioanl :**  La tarea se realiza evaluando funciones, (como en Matemáticas), de manera recursiva. Ejemplo: Lisp.
4. **Programación lógica :**  La tarea a realizar se expresa empleando lógica formal matemática. Expresa qué computar. Ejemplo: Prolog.

[Más formas de clasificar los lenguajes de programación](https://qbitacora.wordpress.com/2007/09/21/clasificacion-de-lenguajes-de-programacion/)

Los lenguajes también se pueden clasificar en:
1. **Tipado :**
2. **No tipado :**
**(JavaScript es un lenguaje no tipado dinámico)**
##Tipos de datos (Values, Types, and Operators) 
###Tipos simples
* Numeros
* Strings
* Boolean
* Null
* Undefined
**Nota: node(escribirlo en la consola) en cualquier símbolo del sistema te abre un interprete de node**

*"Var :"* se usa para declarar una variable. Sino se define la variable, JavaScript por defecto te lo inicializa a undefined.

Definimos una variable 
var x = 3 
Aquí tendremos que el tipo de la variable x es number.

Los operadores lógicos son EXPRESIONES (por que devuelven un resultado). Todos los valores de tipos son expresiones por que tienen valor.*EXPRESIONES SON CIUDADANOS DE 1º ORDEN*
La SENTENCIA no devuelve valor.
**EJEMPLO:**
**EXPRESION** X=2;
**SENTENCIA** Var x;
**SENTENCIA Y EXPRESION** Var x=2;

**Condicional**
*if(EXPRESION BOOLEANA)*
*{*
    *Statments*
*}*
*Else*
*{*
    *Statments*
*}*

**Operadores**
* Unarios
* Binarios
* Ternarios
## UNIT TEST
Para poder crear unit tests necesitamos dos librerias Mocha y Expect.
describe es con Mocha.
expect lo que voy a testear, el resultado que tienes que hacer.
Los ficheros tiene que tener al final del nombre **.spec.js** el **spec es de specification**

Hay que indicar al proyecto donde tiene los test a ejecutarse. Vamos al package.json y en scripts, tendremos que poner :
test : "mocha ruta_de_los_test/** /*.spect.js".

hay que escribir el module.exports para saber que quieres exportar y poder usarlo en los ficheros donde se haran los unit test.

Dos carpetas al mismo nivel, SRC y TEST -> misma estructura de carpetas y ficheros.

Indicamos que tenemos test para ejecutar. Para ejecutarlos se usa el comando npm run <scripts> (se pone entre <> cuando es una variable….realmente iría sin <>)

## Paso por valor y por referencia
**Paso por valor  por defecto para tipos simples**
**Paso por refecerncia por defecto para los tipos compuestos**
*consultar para c#*
Toda funcion que devuelve un boolean es un predicado. *Los predicados pueden lanzar un throw*