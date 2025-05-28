mostraPosicaoValor(valor){
  let encontrou = false;
  let posicao = 0;
  let aux = this.#inicio;

  while(aux != null){
    posicao++;
    if(aux.dado === valor){
      encontrou = true;
      alert("Valor está na Fila! Posição: "+ posicao);
      break;
    }
    aux = aux.proximo;
  }
  if(encontrou === false)
      alert("Valor não encontrado na fila!");
}
