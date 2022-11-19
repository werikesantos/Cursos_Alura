let livros = [];

const GET_LIVROS_ENDPOINT =
  "https://guilhermeonrails.github.io/casadocodigo/livros.json";

const elementoHtmlParaInserirLivros = document.getElementById("livros");
const valorTotalLivrosDisponiveis = document.getElementById(
  "valor_total_livros_disponiveis"
);

const getBuscarLivros = async () => {
  const res = await fetch(GET_LIVROS_ENDPOINT); //PRECISA DO AWAIT PORQUES ESTA AGUARDANDO A RESPOSTA COMPLETA.
  livros = await res.json(); //AQUI PRECISA DO AWAIT, PORQUE ESTA RECEBENDO A RESPOSTA E MONTANDO O JSON.
  let livrosDesconto = aplicarDesconto(livros);
  exibirLivrosNaTela(livrosDesconto);
};

getBuscarLivros();

const aplicarDesconto = (listaDeLivros) => {
  //FUNCAO QUE APLICA 30% DE DESCONTO NOS LIVROS
  const desconto = 0.3;

  let livrosComDesconto = listaDeLivros.map((i) => {
    return { ...i, preco: (i.preco - i.preco * desconto).toFixed(2) };
    //{...i} => FAZ UMA COPIA DO OBJETO.
    //{ ...i, preco: novoValor} => preco-> NESTE CASO, ESTOU ALTERANDO O VALOR DE UM ATIBUTO QUE PERTENCE AO OBJETO.
  });

  return livrosComDesconto;
};

const exibirLivrosNaTela = (listaDeLivros) => {
  elementoHtmlParaInserirLivros.innerHTML = "";
  valorTotalLivrosDisponiveis.innerHTML = "";

  listaDeLivros.map((i) => {
    //OPERADOR TERNARIO = ESTA VERIFICANDO SE O ATRIBUTO {quantidade} É MAIOR QUE ZERO {0}
    //SE FOR MAIOR ELE RETORNA OS PARAMETROS DA CLASS DA TAG {<img>} NORMALMENTE.
    //SE NAO FOR, ELE ATRIBUI UM PARAMETRO CHAMADO {indisponivel} QUE DEIXA COM A COR BRANCA TRANSPARENTE NA IMAGEM.
    //TRAZENDO A IDEIA DE LIVRO INDISPONIVEL
    let indisponivel =
      i.quantidade > 0 ? "livro__imagens" : "livro__imagens indisponivel";

    elementoHtmlParaInserirLivros.innerHTML += `
    <div class="livro">
      <img
        class="${indisponivel}"
        src=${i.imagem}
        alt=${i.alt}
      />
      <h2 class="livro__titulo">
        ${i.titulo}
      </h2>
      <p class="livro__descricao">${i.autor}</p>
      <p class="livro__preco" id="preco">${i.preco}</p>
      <div class="tags">
        <span class="tag">${i.categoria}</span>
      </div>
    </div>
    `;
  });
};
