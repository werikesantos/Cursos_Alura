//LAÇO DE REPETIÇÃO WHILE

const listaDeDestinos = new Array(
  `Salvador`,
  `São Paulo`,
  `Rio De Janeiro`,
  `Curitiba`
);

//PERCORRA O ARRAY ACIMA E IMPRIMA {`O Destino Existe`}, QUANDO LOCALIZAR {Rio de Janeiro}.
let contador = 0;
const destino = `Rio De Janeiro`;

while (contador < listaDeDestinos.length) {
  if (listaDeDestinos[contador] == destino) {
    console.log(`O Destino Existe`);
  } else {
    console.log(`O Destino Não Existe`);
  }
  contador += 1;
}
