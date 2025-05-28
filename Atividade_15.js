function mostraPosicaoValor(){
  const valor = document.getElementById("txtnovoValor").value;
  let encontrou = false;
  let posicao = 0;
  for(const item of minhaFila){
    posicao++;
    if(item.valor === valor){
      encontrou = true;
      alert("Valor está na Fila! Posição: "+ posicao);
      break;
    }
  }
  if(encontrou === false)
      alert("Valor não encontrado na fila!");
}
