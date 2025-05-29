function converteDecimal(numeroUm,base){
  let pilha = [];
  while(numeroUm > 0){
    pilha.push(numeroUm % base);
    numeroUm = Math.floor(numeroUm / base);
}
  while(pilha.length > 0){
    console.log(pilha.pop());
}
  }
