function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:
  if(numeros.length==0)return null;
  var faltante=0;
  for(var i=numeros.length-1; i>0; i--){
    if(numeros[i]!==numeros[i-1]+1){
      faltante=numeros[i-1]+1;
      return faltante;
    }
  }
  return null;
}

module.exports = encontrarNumeroFaltante;