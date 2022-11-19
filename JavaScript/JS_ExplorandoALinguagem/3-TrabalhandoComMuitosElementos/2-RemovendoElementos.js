const listaDeDestinos = new Array(
  `Salvador`,
  `São Paulo`,
  `Rio De Janeiro`,
  `Curitiba`
);
console.log(`Lista antiga: ${listaDeDestinos}`);

//COMANDO ABAIXO SERVE PARA REMOVER UM OU MAIS ITENS DA LISTA:
//{splice()} => ESSA FUNÇÃO RECEBE DOIS PARAMETROS, SENDO ELES:
//1-A POSIÇÃO DO ITEM QUE EU QUERO DELETAR.
//2-A QUANTIDADE DE ITENS APÓS A SUA POSIÇÃO QUE EU QUERO DELETAR.
//NESTE EXEMPLO, VOU DELETAR {São Paulo}
//ATENÇÃO: TODA LISTA A SUA CONTAGEM COMEÇA DO ZERO{0}
listaDeDestinos.splice(1, 1);
console.log(`Lista nova: ${listaDeDestinos}`);

//EXIBINDO UM UNICO ELEMENTO DA LISTA:
//NESTE EXEMPLO QUERO QUE EXIBA SOMENTE O NOME {Rio De Janeiro}
console.log(`1 elemento da lista: ${listaDeDestinos[1]}`);
