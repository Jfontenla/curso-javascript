# ARRAY METHODS


ejemplo :
* 1º iteracion:

    ```javascript
    function getNamesForEach(arr){
        var resultArray=[];
        arr.forEach(
            function(element){
                resultArray.push(getName(element));
            }
        );
        return resultArray;
    } 
    ```
forEach + push -> **CodeSmell** ->return map(transform)
* 2Aº iteracion:

    ```javascript
    function getNamesForMap(arr){
        return arr.map(function(element){
            return element.name;
        });
    }
    ```
* 2Bº iteracion:
    ```javascript
    function getNamesForMap(arr){
        return arr.map(function(element){
            getName(element.name);
        });
    }

    function getName(person){
        return person.name;
    }
    ```
* 3Aº iteracion:

* 3Bº iteracion:
      ```javascript
    function getNamesForMap(arr){
        return arr.map(
            getName(element.name);
        );
    }

    function getName(person){
        return person.name;
    }
    ```

