function colors(color) {
  // La función recibe un color. Retorna el string correspondiente:
  // En caso que el color recibido sea "blue"   --> "This is blue".
  // En caso que el color recibido sea "red"    --> "This is red".
  // En caso que el color recibido sea "green"  --> "This is green".
  // En caso que el color recibido sea "orange" --> "This is orange".
  // Si no es ninguno de esos colores           --> "Color not found".
  // PISTA: utilizar el statement SWITCH.
  // Tu código:
  var mensaje;
  switch (color){
    case "blue":
      mensaje = "This is blue";
      break;
    case "red":
      mensaje = "This is red";
      break;
    case "green":
      mensaje = "This is green";
      break;
    case "orange":
      mensaje = "This is orange";
      break;
    default:
      mensaje = "Color not found";
  }
  console.log(mensaje);
}

module.exports = colors;
