var filterByElderFor = function(arr,ageMin ){
var resultArray=[]
    for (var index = 0; index < arr.length; index++) {
        if (arr[index].age>= ageMin){
            resultArray.push(arr[index].name)
        }
        
    }
    return resultArray;
}

var filterByElderForEach = function(arr,ageMin ){
    var resultArray=[]
    arr.forEach(element => {
        if (element.age>= ageMin){
            resultArray.push(element.name)
        }
    });
    return resultArray;
}

var filterByElderForEachWithCallback = function(arr,ageMin ){
    var resultArray=[]
    arr.forEach(function(element){
        if (element.age>= ageMin){
            resultArray.push(element.name)
        }
    });
    return resultArray;
}

function getNamesForEach(arr){
    var resultArray=[];
    arr.forEach(
        element =>{
            resultArray.push(getName(element));
        }
    );
    return resultArray;
} 
function getName(person){
    return person.name;
}

function getNamesForMap(arr){
    return arr.map(function(element){
        return element.name;
    });
}

function filterElders (arr,minAge)
{
    var resultArray=[];
    arr.forEach(
        element=>{
            if(element.age>=minAge){
                resultArray.push(element);
            }
        }
    ) 
    return resultArray;
}
module.exports = {
    filterByElderForEach,
    getNames: getNamesForMap,
    filterElders
};