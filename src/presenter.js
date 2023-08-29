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
  

  des.innerHTML= "<p>"+ "precio neto es"+firstNumber+"*"+secondNumber+"="+multiplicar(firstNumber,secondNumber)  +"</p>";
  //des.innerHTML = "<p>" + "el descuento neto es: " + firstNumber + "*" +secondNumber + " = " + totalDescuento +  "</p>";
 // des.innerHTML = "<p>El descuento es: "+porcentajeDescuento+"% = "+totalDescuento+"</p>";
 des.innerHTML="<p>el descuento es de:"+
 multiplicar(porcentajeDescuento,100)+"% =" + totalDescuento+"</p>";
});
