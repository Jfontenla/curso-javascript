var sum = require('../src/sum.js');
var expect = require('expect.js') /*exportamos el expect, que es una libreria de 3º*/
describe ('sum', function()
{
   
    it('should be a function', function(){
        expect(typeof sum ).to.be('function');
    });

    it('should sum two positive numbers',function(){
        expect(sum(2,3)).to.be(5);
        expect(sum(3.3,3)).to.be(6.3);
        expect(sum(0,5)).to.be(5);
        expect(sum(0,0)).to.be(0);
        expect(sum(5,0)).to.be(5);
    });

    it('should sum two numbers, one positive and other one negative',function()
    {
        expect(sum(-2,2)).to.be(0);
        expect(sum(2,-2)).to.be(0);
        expect(sum(-1,0)).to.be(-1);
        expect(sum(0,-1)).to.be(-1);
        expect(sum(-2.12, 1)).to.be(-1.12);
    });

    it ('should throw an exception with params non numeric params',function(){
        expect(sum).withArgs(3,'a').to.throwException();//con parentesis invocan a la funcion y sin parentesis es la REFERENCIA
    });

});