//FORMA NÃO EFICIENTE PARA CRIAÇÃO DE VÁRIAS VARIÁVEIS:
const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio De Janeiro`;

//FORMA MAIS EFICIENTE PARA LIDAR COM A CRIAÇÃO DE VÁRIAS VARIÁVEIS:
const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio De Janeiro`);
console.log(listaDeDestinos);

//ADICIONANDO MAIS ITENS A MINHA LISTA {listaDeDestinos}:
listaDeDestinos.push(`Curitiba`);
console.log(listaDeDestinos);
