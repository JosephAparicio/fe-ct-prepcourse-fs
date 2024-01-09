function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  var meses=["Enero","Marzo","Noviembre"];
  var mesesNuevos=[];
  for(var i=0; i<array.length; i++){
    if(meses.includes(array[i])){
      mesesNuevos.push(array[i]);
    }
  }
  if(mesesNuevos.length===meses.length){
    return mesesNuevos;
  }else{
    return "No se encontraron los meses pedidos";
  }
}

module.exports = mesesDelAño;
