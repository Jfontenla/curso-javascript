var numberToString = require('../src/number-to-string.js');// OJO MELON CON EL REQUIRE !! NO LA CAGES CON EL NOMBRE DE LA VARIABLE !!
var expect = require('expect.js');
describe('number-to-string.js',function(){
    describe('retrunValueStringIfElse',function(){
        it('should be a function', function(){
            expect(typeof numberToString.retrunValueStringIfElse ).to.be('function');
        });

    });
    describe('retrunValueStringSwitchCase',function(){
        it('should be a function', function(){
            expect(typeof numberToString.retrunValueStringSwitchCase ).to.be('function');
        });

    });
    describe('retrunValueStringIfRetrun',function(){
        it('should be a function', function(){
            expect(typeof numberToString.retrunValueStringIfRetrun ).to.be('function');
        });
    });

    describe('numberToStringIfElse',function(){
        it('should be a function', function(){
            expect(typeof numberToString.numberToStringIfElse ).to.be('function');
        });
        it('should be a string with name of number',function(){
            expect(numberToString.numberToStringIfElse(5)).to.be('Five');
            expect(numberToString.numberToStringIfElse(10)).to.be('Ten');
            expect(numberToString.numberToStringIfElse(0)).to.be('Zero');
        });
        it('should be to throw error because the number is smaller than 0',function(){
            expect(numberToString.numberToStringIfElse).withArgs(-1).throwException();
            expect(numberToString.numberToStringIfElse).withArgs(-30).throwException();
            expect(numberToString.numberToStringIfElse).withArgs(-2).throwException();
        });
        it('should be to throw error because the number is greater than 10',function(){
            expect(numberToString.numberToStringIfElse).withArgs(11).throwException();
            expect(numberToString.numberToStringIfElse).withArgs(30).throwException();
            expect(numberToString.numberToStringIfElse).withArgs(21).throwException();
        });
        it('should be to throw error because the arg is not a number', function(){
            expect(numberToString.numberToStringIfElse).withArgs('a').to.throwException();
        });
    });
    describe('numberToStringSwitchCase',function(){
        it('should be a function', function(){
            expect(typeof numberToString.numberToStringSwitchCase ).to.be('function');
        });
        it('should be a string with name of number(range 0 to 10)',function(){
            expect(numberToString.numberToStringSwitchCase(5)).to.be('Five');
            expect(numberToString.numberToStringSwitchCase(10)).to.be('Ten');
            expect(numberToString.numberToStringSwitchCase(0)).to.be('Zero');
        });
        it('should be to throw error because the number is smaller than 0',function(){
            expect(numberToString.numberToStringSwitchCase).withArgs(-1).throwException();
            expect(numberToString.numberToStringSwitchCase).withArgs(-30).throwException();
            expect(numberToString.numberToStringSwitchCase).withArgs(-2).throwException();
        });
        it('should be to throw error because the number is greater than 10',function(){
            expect(numberToString.numberToStringSwitchCase).withArgs(11).throwException();
            expect(numberToString.numberToStringSwitchCase).withArgs(30).throwException();
            expect(numberToString.numberToStringSwitchCase).withArgs(21).throwException();
        });
        it('should be to throw error because the arg is not a number', function(){
            expect(numberToString.numberToStringSwitchCase).withArgs('a').to.throwException();
        });
    });
    describe('numberToStringIfReturn',function(){
        it('should be a function', function(){
            expect(typeof numberToString.numberToStringIfReturn ).to.be('function');
        });
        it('should be a string with name of number(range 0 to 10)',function(){
            expect(numberToString.numberToStringIfReturn(5)).to.be('Five');
            expect(numberToString.numberToStringIfReturn(10)).to.be('Ten');
            expect(numberToString.numberToStringIfReturn(0)).to.be('Zero');
        });
        it('should be to throw error because the number is smaller than 0',function(){
            expect(numberToString.numberToStringIfReturn).withArgs(-1).throwException();
            expect(numberToString.numberToStringIfReturn).withArgs(-30).throwException();
            expect(numberToString.numberToStringIfReturn).withArgs(-2).throwException();
        });
        it('should be to throw error because the number is greater than 10',function(){
            expect(numberToString.numberToStringIfReturn).withArgs(11).throwException();
            expect(numberToString.numberToStringIfReturn).withArgs(30).throwException();
            expect(numberToString.numberToStringIfReturn).withArgs(21).throwException();
        });
        it('should be to throw error because the arg is not a number', function(){
            expect(numberToString.numberToStringIfReturn).withArgs('a').to.throwException();
        });
    });
});