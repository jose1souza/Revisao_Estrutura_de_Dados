function ultimoElemento(){
  if(this.isEmpty()){
    return null;
  }
    return this.#elementos[this.#fim];
}
