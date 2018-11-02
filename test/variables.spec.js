var expect = require('expect.js'); /*exportamos el expect, que es una libreria de 3º*/
describe('copy by value',function()
{
    it('modificar el valor de una variable por valor no modifica el contenido de la variable copiada',function(){
        // Demostracion de que un tipo simple (o escalares) se pasa la copia por valor y no la copia por referencia
        var A = 2;
        var B = A; // copia del VALOR DE A en B
        // b += 1; // esto funciona para sumar
        // b++; // esto tambien funciona
        // b = b + 1;
        A++;
        console.log (A);
        console.log(B);
        return B;

        expect(A).to.be(2);
        expect(B).to.be(3);
            
    });
});
describe('Copy by reference', function(){
    // tipos compuestos object/ array / function
    it('Demostracion de que un tipo compuesto se pasa el valor por referencia y no por valor',function(){
        var A = {};
        var B = A;
        A.x=1;
        // A=A.x=1; // estoy asignandole a A el valor del A.x=1 
        console.log(A);
        console.log(B);
        
        expect(A).to.be(B);// para ver su propiedad -> si x = 1

        B.x=2;
        console.log(A);
        console.log(B);
        var C = {};
        var D = {};
        // return B;

        expect(A === B).to.be(true);
        // expect(B).to.be({x:1});// para ver su propiedad -> si x = 1
        expect(A !== B).to.be(false);
        // EL TRIPE IGUAL === ES IGUAL QUE EL TO.BE() Y EL DISTINTO !== ES IGUAL A NOT.TO.BE
        // Es decir :
        expect (A).to.be(B);
        expect (C).not.to.be(D);

    });
});

