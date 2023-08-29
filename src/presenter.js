import {multiplicar,descuento} from "./multiplicador.js";

const first = document.querySelector("#total");
const second = document.querySelector("#precio");
//const form = document.querySelector("#totalizar-form");
const div = document.querySelector("#resultado-div");
const button1 = document.querySelector("#totalizar");
const des = document.querySelector("#descuento-div");



button1.addEventListener("click", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);
  let total = multiplicar(firstNumber, secondNumber);
  let porcentajeDescuento  = descuento(total);
  let totalDescuento  = multiplicar(porcentajeDescuento,total);

  div.innerHTML = "<p>" + "el precio neto es: " + firstNumber + "*" +secondNumber + " = " + multiplicar(firstNumber,secondNumber) +  "</p>";
  des.innerHTML = "<p>" + "el precio neto es: " + firstNumber + "*" +secondNumber + " = " + totalDescuento +  "</p>";
});
