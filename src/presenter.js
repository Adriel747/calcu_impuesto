import multiplicar from "./multiplicador.js";

const first = document.querySelector("#total");
const second = document.querySelector("#precio");
//const form = document.querySelector("#totalizar-form");
const div = document.querySelector("#resultado-div");
const button1 = document.querySelector("#totalizar");



button1.addEventListener("click", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + "el precio neto es: " + firstNumber + "*" +secondNumber + " = " + multiplicar(firstNumber,secondNumber) +  "</p>";
});
