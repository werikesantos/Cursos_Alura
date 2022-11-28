# Adicionando um arquivo alterado ou todos arquivos:

> Adicionando somente um arquivo alterado:
>
> > `git add nomeDoArquivo.js`
>
> Adicionando todos os arquivos alterados:
>
> > `git add .`

# Depois de adicionados os arquivos, precisa criar uma mensagem:

`git commit -m "aquiVaiMensagem"`

# Consultando o histórico das alteracões realizadas:

> Verificando o histórico:
>
> > `git log`
>
> Visualização simplificada do histórico:
>
> > `git log --oneline`
>
> Visualização simplificada dos dados alterados:
>
> > `git log -p`

# Ignorando alguns arquivos que não desejo comitar:

## Crie um arquivo chamado de ".gitignore" e adicione com o "git add ." e commite com "git commit - m "aquiVaiMensagem"".

## Dentro do arquivo criado ".gitignore", coloque o nome de todos os aquivos que não desejo comitar.

# git pull

## Serve para baixar as alterações realizadas por outra pessoa.

# git push

## Depois de comitar o código e deseja mandar as atualizações para o repositório remoto no GitHub, digite o comando abaixo:

> `git push origin master`

## Fonte:

### https://devhints.io/git-log
