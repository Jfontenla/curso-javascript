var filter = require('../src/arrayMethod/arrayMethods.js');
var expect = require('expect.js');
var stub = require('../test/arrrayMethods.stub.js');
describe.only('Filter By Age', function(){
    describe('filterByElderForEach',function(){
        it('should be a function', function(){
            expect(typeof filter.filterByElderForEach).to.be('function');
        });

        it('should be return with persons that are older than 30', function(){
            expect(filter.filterByElderForEach(stub.persons,30)).to.eql(stub.resultTest1);
        });
        it('should be return with persons that are older than 20', function(){
            expect(filter.filterByElderForEach(stub.persons,20)).to.eql(stub.resultTestMinAge20);
        });
        it('should be return number of persons',function(){
            expect(filter.filterByElderForEach(stub.persons,30).length).to.be(4);

        });
    });
    describe('get name',function(){
        it('should be a function',function(){
            expect(typeof filter.getNames).to.be('function');
        });
        it('should to be return only names',function(){
            expect(filter.getNames(stub.persons)).to.eql(stub.resultTestMinAge20);
        });
    });
    describe('filtersElders',function(){
        it('should to be return a function',function(){
            expect(typeof filter.filterElders).to.be('function');
        });
        it('should be return with persons that are older than 30', function(){
            expect(filter.filterElders(stub.persons,30)).to.eql(stub.filterElders);
        });
    });
});