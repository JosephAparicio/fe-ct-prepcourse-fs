function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  var temp=0;
  for (var i = 0; i < array.length;i++) {
    for(var j = i+1; j < array.length;j++) {
      if(array[i]>array[j]){
        temp=array[i];
        array[i]=array[j];
        array[j]=temp;
      }
    }
  }
  return array;
}

module.exports = ordenarArray;
