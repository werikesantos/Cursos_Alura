function calcularValorTotalDeLivrosDisponiveis(data) {
  //acc => ARRAY ACUMULADO
  //i => ARRAY ATUAL
  //0 => INICIO
  return data.reduce((acc, i) => acc + i.preco, 0).toFixed(2);
}
