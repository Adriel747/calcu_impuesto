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
function impuesto(estado)
{
  let impuesto = 0;
  switch(estado)
  {
    case 'CA':
    impuesto=0.0825;
    break;
    default:
      break;
    case 'TX':
      impuesto=0.0625;
      break;
    case 'AL':
      impuesto=0.04;
      break;
  }
  return impuesto;
}
export {multiplicar,descuento,impuesto};
