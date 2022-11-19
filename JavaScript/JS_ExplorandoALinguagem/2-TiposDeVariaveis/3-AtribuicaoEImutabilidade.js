//TRABALHANDO COM ATRIBUIÇÃO DE VARIÁVEIS

const idade = 28;
const nome = "Werike";
const sobrenome = "Santos";

console.log(idade, nome, sobrenome);

//TEMPLATE LITERALS
//NESSE EXEMPLO ABAIXO É POSSÍVEL UTILIZAR TEXTOS JUNTO COM VARIÁVEIS:
console.log(`idade: ${idade}\nnome: ${nome}\nsobrenome: ${sobrenome}`);

//SOBRESCREVENDO UMA VARIÁVEL:
// nome = nome + sobrenome; //ESSA LINHA CONTEM UM CÓDIGO ERRADO, QUE SERVE COMO EXEMPLO!
//SAÍDA: {TypeError: Assignment to constant variable.}
//ATENÇÃO: NÃO FOI POSSÍVEL SOBRESCREVER PORQUE A VARIÁVEL FOI DECLARADA COMO {const}.
//OU SEJA, SEU VALOR NUNCA SERÁ ALTERADO.
//PARA CONSEGUIR SOBRESCREVER OS VALORES DE UMA VARIÁVEL, BASTA ALTERAR DE {const} PARA {let}

//SEGUE EXEMPLO ABAIXO DE COMO SOBRESCREVER OS VALORES DE UMA VARIÁVEL:
const newIdade = 28;
let newNome = "Werike"; //VEJA, ESTOU ALTERANDO PARA LET A DECLARAÇÃO DA VARIÁVEL!
const newSobrenome = "Santos";

newNome = newNome + " " + newSobrenome;
console.log(newNome);
