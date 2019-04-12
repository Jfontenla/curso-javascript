// const objectHTML = {
//     tag: 'ul',
//     children: [
//         { tag: 'li', children: ['bar'] },
//         { tag: 'li', children: ['foo'] },
//         { tag: 'li', children: [
//             'qux',
//             {tag:'li',children:['qux']},
//             { tag: 'li', children: ['bar'] },
//         ]}
//     ]
//  }
 
const objectHTML = {
    tag: 'ul',
    children: [
        { tag: 'li', children: ['bar'] },
        { tag: 'li', children: ['foo'] },
        { tag: 'li', children: [
            'qux',
            {tag:'ol',children :[
            {tag:'li',children:['hola']},
            { tag: 'li', children: ['bar'] },
            ]
            }
        ]}
    ]
 }


 function isString(arg) {
    return (typeof arg === 'string');
 }

 function pintaApertura(object){
     return '<' + object.tag + '>';
}

 function pintaCierre(object){
     return '</' + object.tag + '>';
 }
 
 function pintaNodo(tagNode) {
    var elementHTML = '';
    elementHTML = elementHTML + pintaApertura(tagNode);
    tagNode.children.forEach(item => {
        if(isString(item)){
            elementHTML = elementHTML + item;
        }else{
            elementHTML = elementHTML + pintaNodo(item);
        }
        
    });
    elementHTML = elementHTML + pintaCierre(tagNode);
    return elementHTML;
 }
 
//  console.log(createElementUl(objectHTML));

console.log(pintaNodo(objectHTML));
