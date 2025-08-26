import { sumar, multiplicar } from "./calculadora";

describe("Calculadora", () => {
  it("deberia sumar dos numeros", () => {
    expect(sumar(3, 2)).toEqual(5);
  });
  it("deberia multiplicar dos numeros", () => {
    expect(multiplicar(3, 2)).toEqual(6);
  });
  it("deberia multiplicar dos numeros", () => {
    expect(multiplicar(13, 2)).toEqual(26);
  });
});


