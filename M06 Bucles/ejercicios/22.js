function diasEnMes(mes) {
  // La función recibe un mes(número) por argumento.
  // Determine cúantos días tiene el mes correspondiente a ese número.
  // PISTA: Usa un bucle do-while para validar que el mes ingresado sea válido.
  // Tu código:
  var cantDias;
  do{
    if(mes<=1 && mes<=12){
      cantDias=new Date(2024,mes,0).getDate();
    }else{
      mes=parseInt(prompt("Ingrese un número de mes: "));
    }
  }while(mes<1 || mes>12);
  return cantDias;
}

module.exports = diasEnMes;
