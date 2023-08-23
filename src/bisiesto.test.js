import bisiesto from "./bisiesto.js";

describe("Bisiesto", () => {
  it("Anio bisiesto si es divisible por 400", () => {
    expect(bisiesto(1600)).toEqual(true);
  });

  it("Anio bisiesto si es divisible por 100 pero no por 400", () => {
    expect(bisiesto(1800)).toEqual(false);
  });
});