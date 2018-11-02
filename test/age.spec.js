var age = require('../src/age.js');// OJO MELON CON EL REQUIRE !! NO LA CAGES CON EL NOMBRE DE LA VARIABLE !!
var expect = require('expect.js'); /*exportamos el expect, que es una libreria de 3º*/
describe('age.js',function(){
    describe ('getagetype', function()
    {
        it('should be a function', function(){
            expect(typeof age.getagetype ).to.be('function');
        });
        it('should be your type', function(){
            expect(typeof age.getagetype(1) ).to.be('string');
        });
        it('should be a boy',function(){
            expect(age.getagetype(1)).to.be('BOY');
            expect(age.getagetype(5)).to.be('BOY');
            expect(age.getagetype(12)).to.be('BOY');
            expect(age.getagetype(18)).not.to.be('BOY');
            expect(age.getagetype(20)).not.to.be('BOY');
            
        });
        it('should be a man',function(){
            expect(age.getagetype(20)).to.be('MAN');
            expect(age.getagetype(21)).to.be('MAN');
            expect(age.getagetype(100)).to.be('MAN');
            expect(age.getagetype(18)).to.be('MAN');
            expect(age.getagetype(5)).not.to.be('MAN');
        });
        it('should be throw Exception', function(){
             expect(age.getagetype).withArgs('hola').to.throwException();
        });
    });
    describe ('isBoy', function()
    {
        it('should be a function', function(){// tiene que salir la especificacion del código
            expect(typeof age.isBoy ).to.be('function');
        });
        it('should be your type', function(){
            expect(typeof age.isBoy(1) ).to.be('boolean');
        });
        it('should be a boy',function(){
            expect(age.isBoy(1)).to.be(true);
            expect(age.isBoy(5)).to.be(true);
            expect(age.isBoy(18)).not.to.be(true);
            
        });
        it('should be a man',function(){
            expect(age.isBoy(20)).to.be(false);
            expect(age.isBoy(18)).to.be(false);
            expect(age.isBoy(5)).not.to.be(false);
        });
        // it('your arg is not a number', function(){
        //      expect(age.isBoy('hola')).to.throwException();
        // });
    });
    describe ('isAdult', function(){
        it('should be a function', function(){
            expect(typeof age.isAdult ).to.be('function');
        });
        it('should be your type', function(){
            expect(typeof age.isAdult(1) ).to.be('boolean');
        });
        it('should be a boy',function(){
            expect(age.isAdult(1)).to.be(false);
            expect(age.isAdult(5)).to.be(false);
            expect(age.isAdult(18)).not.to.be(false);
            
        });
        it('should be a man',function(){
            expect(age.isAdult(20)).to.be(true);
            expect(age.isAdult(18)).to.be(true);
            expect(age.isAdult(5)).not.to.be(true);
        });
    });
});