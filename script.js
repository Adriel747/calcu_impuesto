//document.getElementById("calcularBtn").addEventListener("click", calcularTotal);
document.getElementById("calcularBtn").addEventListener("click", calcularTotal);
document.getElementById("descuentosBtn").addEventListener("click", mostrarDescuentos);
document.getElementById("impuestosBtn").addEventListener("click", mostrarImpuestos);

function calcularTotal() {
  const cantidad = parseInt(document.getElementById("cantidad").value);
  const precio = parseFloat(document.getElementById("precio").value);
  const estado = document.getElementById("estado").value.toUpperCase();
  
  const totalSinDescuento = cantidad * precio;
  
  let descuento = 0;
  if (totalSinDescuento >= 30000) {
    descuento = 0.15;
  } else if (totalSinDescuento >= 10000) {
    descuento = 0.10;
  } else if (totalSinDescuento >= 7000) {
    descuento = 0.07;
  } else if (totalSinDescuento >= 3000) {
    descuento = 0.05;
  } else if (totalSinDescuento >= 1000) {
    descuento = 0.03;
  }
  
  const totalConDescuento = totalSinDescuento * (1 - descuento);
  
  let impuesto = 0;
  switch (estado) {
    case "UT":
      impuesto = 0.0665;
      break;
    case "NV":
      impuesto = 0.08;
      break;
    case "TX":
      impuesto = 0.0625;
      break;
    case "AL":
      impuesto = 0.04;
      break;
    case "CA":
      impuesto = 0.0825;
      break;
  }
  
  const totalConImpuesto = totalConDescuento * (1 + impuesto);
  
  document.getElementById("resultado").innerHTML = `Precio Total: $${totalConImpuesto.toFixed(2)}`;
}
function mostrarDescuentos() {
    const descuentos = [
      { total: 1000, tasa: "3%" },
      { total: 3000, tasa: "5%" },
      { total: 7000, tasa: "7%" },
      { total: 10000, tasa: "10%" },
      { total: 30000, tasa: "15%" }
    ];
  
    const descuentosContainer = document.getElementById("descuentosContainer");
    descuentosContainer.innerHTML = "<h1>Descuentos:</h1>";
  
    const grid = document.createElement("div");
    grid.classList.add("grid-container");
  
    for (const descuento of descuentos) {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
      gridItem.textContent = `Total de la orden: $${descuento.total} - Tasa descuento: ${descuento.tasa}`;
      grid.appendChild(gridItem);
    }
  
    descuentosContainer.appendChild(grid);
  }
  
  function mostrarImpuestos() {
    const impuestos = [
      { estado: "UT", tasa: "6.65%" },
      { estado: "NV", tasa: "8.00%" },
      { estado: "TX", tasa: "6.25%" },
      { estado: "AL", tasa: "4.00%" },
      { estado: "CA", tasa: "8.25%" }
    ];
  
    const impuestosContainer = document.getElementById("impuestosContainer");
    impuestosContainer.innerHTML = "<h1>Impuestos por estado:</h1>";
  
    const grid = document.createElement("div");
    grid.classList.add("grid-container");
  
    for (const impuesto of impuestos) {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
      gridItem.textContent = `Estado: ${impuesto.estado} - Tasa de Impuesto: ${impuesto.tasa}`;
      grid.appendChild(gridItem);
    }
  
    impuestosContainer.appendChild(grid);
  }
