 buscarElemento(dado){
    pos = this.inicio;
     for(let i = 0;i < this.qtd;i++){
         if(this.elementos[pos] === dado)
             return pos;
    if(pos < elementos[i] - 1)
        pos++;
    else
        pos = 0;
     }
     return -1;
}
