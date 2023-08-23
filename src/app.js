import bisiesto from "./bisiesto.js";

const anio = document.querySelector("#anio");
const form = document.querySelector("#bisiesto-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const anioAVerificar = Number.parseInt(anio.value);

  if (bisiesto(anioAVerificar))
    div.innerHTML = "<p>" + "Anio Bisiesto" + "</p>";
  else
  div.innerHTML = "<p>" + "Anio NO Bisiesto" + "</p>";
});