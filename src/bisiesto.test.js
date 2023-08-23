import bisiesto from "./bisiesto.js";

describe("Bisiesto", () => {
  it("Anio bisiesto si es divisible por 400", () => {
    expect(bisiesto(1600)).toEqual(true);
  });

  it("Anio NO bisiesto si es divisible por 100 pero no por 400", () => {
    expect(bisiesto(1800)).toEqual(false);
  });

  it("Anio bisiesto si es divisible por 4 pero no por 100", () => {
    expect(bisiesto(2016)).toEqual(true);
  });

  it("Anio NO bisiesto si no es divisible por 4", () => {
    expect(bisiesto(2009)).toEqual(false);
  });
});