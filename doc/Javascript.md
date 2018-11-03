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