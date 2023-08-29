function multiplicar(a, b) {
  return a * b;
}
function descuento(des) {
  let descuento=0;
  if (des >= 1000){
    descuento=0.3
  }
  if (des >= 1000 && des <= 3000)
  descuento=0.03;
  if(des >= 3000 && des <= 7000)
  descuento=0.05;
  if(des >7000 && des<=10000)
  descuento= 0.07;
  if(des>=30000)
  descuento=0.15;
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
    case 'NV':
      impuesto=0.08;
      break;
  }
  return impuesto;
}
function calcularPrecioTotal(precioNeto, descuento, impuesto) {
  let tot = impuesto - descuento;
  tot = tot + precioNeto;
  return tot;
}


export {multiplicar,descuento,impuesto,calcularPrecioTotal};
