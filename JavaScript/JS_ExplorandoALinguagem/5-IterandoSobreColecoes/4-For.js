//LAÇO DE REPETIÇÃO WHILE

const listaDeDestinos = new Array(
  `Salvador`,
  `São Paulo`,
  `Rio De Janeiro`,
  `Curitiba`
);

//PERCORRA O ARRAY USANDO A ESTRUTURA DO FOR E ALTERE O VALOR DA VARIAVEL {destinoExiste} PARA {true}
//QUANDO LOCALIZAR {Curitiba}.
const destino = `Curitiba`;
let destinoExiste = false;

for (let i = 0; i < listaDeDestinos.length; i++) {
  if (listaDeDestinos[i] == destino) {
    destinoExiste = true;
  }
}

console.log(destinoExiste);
