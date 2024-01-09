function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  var cantResultados=resultadosTest.length;
  var suma=0;
  for(var i=0; i<cantResultados; i++){
    suma+=resultadosTest[i];
  }
  var promedio=suma/cantResultados;
  return promedio;
}

module.exports = promedioResultadosTest;
