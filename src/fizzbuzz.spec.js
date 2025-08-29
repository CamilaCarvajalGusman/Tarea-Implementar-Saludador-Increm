import convertirFizzBuzz from "./fizzbuzz";

describe("FizzBuzz", () => {
    it("debería convertir un número que no es múltiplo de 3 ni 5", () =>{
        expect(convertirFizzBuzz(1)).toEqual("1");
    });
    it("debería retornar fizz cuando es multiplo de 3", () => {
        expect(convertirFizzBuzz(9)).toEqual("fizz");
    });
});
