const objectHTML = {
    type: 'ul',
    value: [
        { type: 'li', value: 'bar' },
        { type: 'li', value: 'foo' },
        { type: 'ol', value: [
            {type:'li',value:'qux'},
            { type: 'li', value: 'bar' },
        ]}
    ]
 }
 
 function isString(arg) {
    return (typeof arg === 'string');
 }

 function pintaApertura(object){
     return '<' + object.type + '>';
}

 function pintaCierre(object){
     return '</' + object.type + '>';
 }
 
 function createElementUl(object) {
    var html = '';
    if (isString(object.value)) {
        html = createElementLi(object);
    } else {
        html = pintaApertura(object)+'\n' + pintaNodo(object.value) + pintaCierre(object)+'\n';
    }
    return html;
 }

 function createElementLi(object) {
    return pintaApertura(object)  + object.value + pintaCierre(object)+'\n' ;
 }
 
 function pintaNodo(array) {
    var elementHTML = '';
    array.forEach(item => {
        if(isString(item.value)){
        elementHTML = elementHTML + createElementLi(item);
        }else{
            elementHTML = elementHTML + pintaApertura(item)+'\n'+  pintaNodo(item.value) + pintaCierre(item)+'\n';
        }
    });
    return elementHTML;
 }
 
 console.log(createElementUl(objectHTML));