//CONFIGURANDO O DEBUGGER JS

//NO MENU LADO ESQUERDO EXISTE UM ICONE CHAMDO {Run And Debug}
//CLICANDO NELE, VAI APARECER ALGUMAS OPÇÕES, ONDE É NECESSÁRIO CLICAR NA OPÇÃO DE {launch.json Node.js}

//POSSO CRIAR VÁRIAS CONFIGURAÇÕES COMO ESSA ABAIXO PARA CADA ARQUIVO QUE DESEJO DEBUGAR:
// {
//   "type": "node",
//   "request": "launch",
//   "name": "Launch Program", //AQUI POSSO COLOCAR QUALQUER NOME
//   "skipFiles": [
//     "<node_internals>/**"
//   ],
//   "program": "${workspaceFolder}/JS_ExplorandoALinguagem/5-IterandoSobreColecoes/2-BreakEDebbuger.js"
// NA LINHA DE CIMA E APÓS OS COLCHETES {}/ => DEVE COLOCAR O CAMINHO DO ARQUIVO QUE DESEJO DEBUGAR
// }

//AGORA ADICIONAR O BREAKPOINT NO ARQUIVO INFORMADO NO CAMINHO ""program": "${workspaceFolder}/" E DAR O PLAY NO DEBBUGER.
