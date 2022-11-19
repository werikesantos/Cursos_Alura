//TRATAMENTO DE CONDICIONAL, ONDE, SE O COMPRADOR FOR MAIOR DE IDADE OU TIVER ACOMPANHADO, PODE FINALIZAR A COMPRA:

//NESTE EXEMPLO ABAIXO, O COMPRADOR SO PODE COMPRAR SE FOR MAIOR OU TIVER ACOMPANHADO.

const listaDeDestinos = new Array(
  `Salvador`,
  `São Paulo`,
  `Rio De Janeiro`,
  `Curitiba`
);

const idadeComprador = 17;
const estaAcompanhada = true;

if (idadeComprador >= 18 || estaAcompanhada) {
  console.log(`Boa viagem para ${listaDeDestinos[2]}!`);
} else {
  console.log(
    `Comprador tem ${idadeComprador} anos e não posso finalizar a compra!`
  );
}
