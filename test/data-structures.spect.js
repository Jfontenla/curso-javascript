var at  = require('../src/data-structures.js');
var expect = require('expect.js');

describe('data-stuctures.js', function(){
    describe('at', function(){
        var foo= {x:1,y:2};
        it('should be value of x = 1, and y = 2', function(){
            expect(at.at(foo,'x')).to.be(1);
            expect(at.at(foo, 'y')).to.be(2);
        })
    });
    describe('at', function(){
        var foo= {x:'abc',y:2};
        it('should be value of x = abc and y = 2', function(){
            expect(at.at(foo,'x')).to.be('abc');
            expect(at.at(foo, 'y')).to.be(2);
        })
    })
});