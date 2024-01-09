function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  if(array.length===0)return 0;
  if(array.length===1)return 0;
  var mayor=-9999;
  var indiceMayor=0;
  for(var i=0; i<array.length; i++){
    if(array[i]>mayor){
      mayor=array[i];
      indiceMayor=i;
    }
  }
  return indiceMayor;
}

module.exports = encontrarIndiceMayor;
