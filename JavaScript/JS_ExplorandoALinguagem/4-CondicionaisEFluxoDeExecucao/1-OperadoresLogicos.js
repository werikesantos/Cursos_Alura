//TRATAMENTO DE CONDICIONAL, ONDE O COMPRADOR DEVE SER MAIOR DE IDADE PARA FINALIZAR A COMPRA:

//NESTE EXEMPLO ABAIXO, O COMPRADOR DESEJA VIAJAR PARA CURITIBA,
//E ANTES DE FINALIZAR A COMPRA, VERIFIQUE SUA IDADE!

const listaDeDestinos = new Array(
  `Salvador`,
  `São Paulo`,
  `Rio De Janeiro`,
  `Curitiba`
);

//EXEMPLO DE COMPRADOR MAIOR DE IDADE
console.log(`EXEMPLO DE COMPRADOR MAIOR DE IDADE:`);
const idadeCompradorMaior = 21;
if (idadeCompradorMaior >= 18) {
  console.log(
    `Comprador tem ${idadeCompradorMaior} anos e pode finalizar a compra para ${listaDeDestinos[3]}!`
  );
} else {
  console.log(
    `Comprador tem ${idadeCompradorMaior} anos e não posso finalizar a compra!`
  );
}

//EXEMPLO DE COMPRADOR MENOR DE IDADE
console.log(`EXEMPLO DE COMPRADOR MENOR DE IDADE:`);
const idadeCompradorMenor = 17;
if (idadeCompradorMenor >= 18) {
  console.log(
    `Comprador tem ${idadeCompradorMenor} anos e pode finalizar a compra para ${listaDeDestinos[3]}!`
  );
} else {
  console.log(
    `Comprador tem ${idadeCompradorMenor} anos e não posso finalizar a compra!`
  );
}

//OPERADORES LOGICOS:
console.log(`OPERADORES LOGICOS:`);
console.log(idadeCompradorMaior > 18);
console.log(idadeCompradorMaior < 18);
console.log(idadeCompradorMaior >= 18);
console.log(idadeCompradorMaior <= 18);
console.log(idadeCompradorMaior == 18);
console.log(idadeCompradorMaior != 18);
