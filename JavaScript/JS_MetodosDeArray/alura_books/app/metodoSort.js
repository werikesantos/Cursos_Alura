const btnOrdenarPorPreco = document.getElementById("btnOrdenarPorPreco");

btnOrdenarPorPreco.addEventListener("click", ordenarLivrosPorPreco);

function ordenarLivrosPorPreco() {
  //METODO {sort((a,b)=> a -b)} QUE SERVE PARA ORDENAR DO MAIOR PARA O MENOR, OU DO MENOR PARA O MAIOR!
  let data = livros.sort((a, b) => a.preco - b.preco);
  exibirLivrosNaTela(data);
}
