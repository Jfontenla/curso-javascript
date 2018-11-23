function pyramid (num)
{
    var forever = true;
    var iteraciones = 0;
    while(forever){
        if(iteraciones  >=  num){
        break;
        }
        console.log(repeatnumber(iteraciones + 1));
        iteraciones = iteraciones + 1;
    }
}
//  pyramid(5);


function repeatnumber(num)
{
    var forever = true;
    var iteracion = 0;
    var strnum = '';
    while(forever)
    {
        if (iteracion >= num){
            break;
        }
        strnum = strnum + num;
        iteracion = iteracion + 1;
    }
    return strnum;
}
// console.log(repeatnumber(5));


function reversePyramid (num)
{
    var forever = true;
    var iteraciones = 0;
    while(forever){
        if(iteraciones  >=  num){
        break;
        }
        console.log(repeatnumber(num-iteraciones));
        iteraciones = iteraciones + 1;
    }
}
reversePyramid (30);

