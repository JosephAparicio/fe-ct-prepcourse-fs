function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:
  var resultado=[];
  var palabra;
  for(var i=0; i<arrayOfStrings.length; i ++){
    palabra = arrayOfStrings[i];
    if(palabra.charAt(0)==='a'){
      resultado.push(palabra);
    }
  }
  return resultado;
}

module.exports = filter;
