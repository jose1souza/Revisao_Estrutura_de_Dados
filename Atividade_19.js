function estaCrescente(inicio){
if(inicio === null || inicio.proximo === null){
  return true;
}
  let atual = inicio;
while(atual.proximo != null){
  if(atual.dado > atual.proximo.dado){
    return false;
  }
  atual = atual.proximo;
}
  return true;
}
