var expect = require('expect.js');
describe('javascript', function()
{
    describe('typeof',function(){
        it('SHOULD RETURN THE typeof AN EXPRESION',function(){
            expect(typeof 5).to.be('number');//ojo con el de abajo, la sintaxis es distinta
            expect(3).to.be.a('number');
            expect(true).to.be.a('boolean');
            expect(false).to.be.a('boolean');
            expect('estoy en un curso de js').to.be.a('string');
            expect(typeof function(){} ).to.be('function');
        });
    });
    
})