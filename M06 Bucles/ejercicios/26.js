function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:
  if(str1.length!=str2.length)return false;
  var anagrama=false;
  for(var i=0; i<str1.length; i++){
    for(var j=0; j<str2.length; j++){
      if(str1[i]==str2[j]){
        anagrama=true;
        break;
      }
    }
  }
  return anagrama;
}

module.exports = esAnagrama;
