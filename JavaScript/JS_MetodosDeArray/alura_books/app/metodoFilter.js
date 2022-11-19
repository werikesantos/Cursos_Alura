let botoes = document.querySelectorAll(".btn"); //RETORNA UM ARRAY DE TODAS AS CLASSES COM O NOME DE {btn}
botoes.forEach((i) => i.addEventListener("click", filtrarLivros));

function filtrarLivros(e) {
  //POR SER UM EVENTO, E POSSIVEL PEGAR AS INFORMACOES QUE RETORNAM DESSE EVENTO
  //ATRAVEZ DO {e} PASSADO COMO PARAMETRO NA FUNCAO
  //const opcaoSelecionada = e.srcElement.value;

  //OU
  //USANDO ESSA FUNCAO {document.getElementById(this.id)}=> PARA PEGAR O BOTAO SELECIONADO PELO SEU {id} SOMENTE!
  const opcaoSelecionada = document.getElementById(this.id).value;
  let data = livros.filter((i) =>
    opcaoSelecionada == "disponivel"
      ? filtrarPorDisponibilidade(i)
      : filtarPorCategoria(i, opcaoSelecionada)
  );

  exibirLivrosNaTela(data);

  if (opcaoSelecionada == "disponivel") {
    const valorTotal = calcularValorTotalDeLivrosDisponiveis(data);
    valorTotalLivrosDisponiveis.innerHTML = `
      <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
      </div>
    `;
  }
}
function filtarPorCategoria(i, opcaoSelecionada) {
  return i.categoria == opcaoSelecionada;
}

function filtrarPorDisponibilidade(i) {
  return i.quantidade > 0;
}
