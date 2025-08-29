import fizzbuzz from "./fizzbuzz";

describe("Fizzbuzz", () => {
    // it("debería retornar el mismo número en una cadena cuando no es multiplo ni de 3 ni de 5", () => {
    //     expect(fizzbuzz(19)).toEqual("19");
    // });
    // it("debería retornar fizz cuando es multiplo de 3", () => {
    //     expect(fizzbuzz(9)).toEqual("fizz");
    // });
    // it("debería retornar buzz cuando es multiplo de 5", () => {
    //     expect(fizzbuzz(95)).toEqual("buzz");
    // });
    // it("debería retornar fizzbuzz cuando es multiplo de 5 y de 3", () => {
    //     expect(fizzbuzz(15)).toEqual("fizzbuzz");
    // });
    it("debería imprimir la secuencia de números hasta el número ingresado por el usuario", () => {
        expect(fizzbuzz(10)).toEqual("1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz");
    });
    it("debería imprimir la secuencia de números hasta el número ingresado por el usuario", () => {
        expect(fizzbuzz(20)).toEqual("1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz, 16, 17, fizz, 19, buzz");
    });
});
