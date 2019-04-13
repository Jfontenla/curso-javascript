# DEBUG
**IMPORTENTE:** 
copiamos el siguiente json

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Current File",
            "program": "${file}"
        }
    ]
}
```

Entramos en donde el bicho tachado a la izquierda, se hace click en la parte la ruedita como de configuracion, lo abrimos y lo pegamos cambiando lo que hay en el archivo.

Creamos una carpeta dentro de src y se crea una carpeta llamada debugger, creamos un fichero que llamaremos foo.js

vamos al package.json y dentro de "scripts" metemos

```json
    {
    "start": "node src/debugger/main.js"
    }
```
y ponemos en foo.js:

```javascript
    var foo = function(){
        var a = 'foo';
        console.log(a);
    }
module.exports =foo;
```
y creamos en la misma carpeta un fichero main.js con :
```javascript
    var foo = require("./foo.js");
    foo();
```

llamar desde el fichero donde esta configurado el strat
