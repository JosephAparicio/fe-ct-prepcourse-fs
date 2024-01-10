function verificarPropiedad(objeto, propiedad) {
  // Verifica si el objeto posee la propiedad recibida.
  // Retorna true si la tiene, sino retorna false.
  // PISTA: Puedes usar el método hasOwnProperty() y Object.getOwnPropertyDescriptor().
  
  // Verifica si la propiedad existe directamente en el objeto y es enumerable
  if (objeto.hasOwnProperty(propiedad) &&
      Object.getOwnPropertyDescriptor(objeto, propiedad).enumerable) {
    return true;
  }

  // Si la propiedad no está presente directamente, recorre la cadena de prototipo
  let prototipo = Object.getPrototypeOf(objeto);
  while (prototipo !== null) {
    if (Object.prototype.hasOwnProperty.call(prototipo, propiedad) &&
        Object.getOwnPropertyDescriptor(prototipo, propiedad).enumerable) {
      return true;
    }
    prototipo = Object.getPrototypeOf(prototipo);
  }

  // Si la propiedad no se encuentra en el objeto ni en su cadena de prototipo, retorna false
  return false;
}




module.exports = verificarPropiedad;
