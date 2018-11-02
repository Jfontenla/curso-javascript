var expect = require('expect.js') /*exportamos el expect, que es una libreria de 3º*/
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

