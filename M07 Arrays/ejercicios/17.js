function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  var multiplicadorX6=[];
  var producto=0;
  for(var i=0; i<=10;i++){
    multiplicadorX6.push(producto);
    producto+=6;
  }
  return multiplicadorX6;
}

module.exports = tablaDelSeis;
