function buscarElemento(){
    const elemento = document.getElementById("localdoElemento").value;
    for(let item of minhaFila){
        if(elemento === item.elemento){
            alert("O elemento está na fila circular");
        }
    }
}
