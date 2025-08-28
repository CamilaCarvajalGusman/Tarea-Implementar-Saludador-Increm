import { sumar, multiplicar, dividir } from "./calculadora";

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
  it("deberia dividir dos numeros", () => {
    expect(dividir(14, 2)).toEqual(7);
  });
  it("deberia dividir dos numeros", () => {
    expect(dividir(11, 2)).toEqual(5.5);
  });
});


