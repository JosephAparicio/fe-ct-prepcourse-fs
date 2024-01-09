function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  var cont=0;
  var suma=num;
  do{
    sum+=5;
    cont++;
  }while(cont<=8);
  return sum;
}

module.exports = doWhile;