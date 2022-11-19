//TRATAMENTO DE CONDICIONAL, ONDE, SE O COMPRADOR FOR MENOR DE IDADE E TIVER ACOMPANHADO, PODE FINALIZAR A COMPRA:

//NESTE EXEMPLO ABAIXO, O COMPRADOR MENOR DE IDADE E ACOMPANHADO, DESEJA VIAJAR PARA RIO DE JANEIRO.

const listaDeDestinos = new Array(
  `Salvador`,
  `São Paulo`,
  `Rio De Janeiro`,
  `Curitiba`
);

//EXEMPLO DE COMPRADOR MENOR DE IDADE E ACOMPANHADO:
const idadeComprador = 17;
const estaAcompanhada = true;

if (idadeComprador >= 18) {
  console.log(
    `Comprador tem ${idadeComprador} anos e pode finalizar a compra para ${listaDeDestinos[2]}!`
  );
} else if (estaAcompanhada) {
  console.log(
    `Comprador tem ${idadeComprador} anos e esta acompanhado(a), podendo finalizar a compra para ${listaDeDestinos[2]}!`
  );
} else {
  console.log(
    `Comprador tem ${idadeComprador} anos e não posso finalizar a compra!`
  );
}
