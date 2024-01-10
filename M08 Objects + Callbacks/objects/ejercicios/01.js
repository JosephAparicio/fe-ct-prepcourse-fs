const obtenerValorPropiedad = (objeto, propiedad) => {
  // Recibe un objeto y el nombre de una propiedad.
  // Devuelve el valor de esta propiedad.
  // Tu código:
  const propiedades = propiedad.split('.');

  let valor = objeto;

  for (const prop of propiedades) {
    if (valor !== undefined && valor !== null) {
      valor = valor[prop];
    } else {
      return undefined;
    }
  }

  return valor;
};

module.exports = obtenerValorPropiedad;
