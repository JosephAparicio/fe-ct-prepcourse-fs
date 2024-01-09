function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  var filtrado=[];
  for (var i=0; i<array.length; i++) {
    if(array[i]%2==0){
      filtrado.push(array[i]);
    } 
  }
  return filtrado;
}

module.exports = filtrarNumerosPares;
