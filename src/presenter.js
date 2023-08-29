import {multiplicar,descuento,impuesto} from "./multiplicador.js";


var estado = document.getElementById("estado");
const impuestoDiv = document.querySelector("#impuesto-div");
const first = document.querySelector("#total");
const second = document.querySelector("#precio");
//const form = document.querySelector("#totalizar-form");
const div = document.querySelector("#resultado-div");
const button1 = document.querySelector("#totalizar");
const des = document.querySelector("#descuento-div");
var estado = document.getElementById("#estado");




button1.addEventListener("click", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);
  let total = multiplicar(firstNumber, secondNumber);
  let porcentajeDescuento  = descuento(total);
  let totalDescuento  = multiplicar(porcentajeDescuento,total);
  

  //div.innerHTML = "<p>" + "el precio neto es: " + firstNumber + "*" +secondNumber + " = " + multiplicar(firstNumber,secondNumber) +  "</p>";
  let imp = impuesto(estado.value);
  let totalimpuesto= multiplicar(imp,total).toFixed(2);

  precioNeto.innerHTML = "<p>El precio neto es: "+firstNumber+ "*"+ secondNumber +" = "+total+ "</p>";
  des.innerHTML = "<p>El descuento es: "+multiplicar(porcentajeDescuento,100).toFixed(2)+"% = "+totalDescuento+"</p>";
  impuestoDiv.innerHTML = "<p>El descuento para "+lugar.value+" es "+ multiplicar(imp,100).toFixed(2)+"%"
  +" = " +totalImpuesto+"</p>"
 des.innerHTML = "<p>" + "el precio neto es: " + firstNumber + "*" +secondNumber + " = " + totalDescuento +  "</p>";
});
