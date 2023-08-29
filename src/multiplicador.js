function multiplicar(a, b) {
  return a * b;
}
function descuento(des) {
  let descuento=0;
  if (des >= 1000){
    descuento=0.3
  }
  return descuento;
}

export {multiplicar,descuento};
