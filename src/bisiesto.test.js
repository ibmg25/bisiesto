import bisiesto from "./bisiesto.js";

describe("Bisiesto", () => {
  it("Anio bisiesto si es divisible por 400", () => {
    expect(bisiesto(1600)).toEqual(true);
  });
});