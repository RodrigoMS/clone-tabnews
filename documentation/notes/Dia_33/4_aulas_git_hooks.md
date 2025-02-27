.git/hooks
git branch - ver a branch
remover
pull
criar branch hooks
npm install --save-dev husky@9.1.4
npx husky init
cat .git/config
delete pre-commit em .husky/\_
novo arquivo commit-msg - Vai executar este arquivo toda vez antes de criar um commit.

dentro de commit-msg adicionar:

```
npx commitlint --edit $1
```

OBS: o --edit $1 adiciona o caminho do diretório que contém a mensagem adicionada ao commit.

git add -A
git status
testar se está funcionando:
git commit -m 'teste de mensagem no formato errado'
git commit -m 'ci: add `Husky` and `commit-msg` hook'
npm i -D commitizen@4.3.0
npx commitizen init cz-conventional-changelog --save-dev --save-exact

Em package.json adicione o seguinte script:
"commit": "cz"

git add -A
npm run commit
Escolha ci
enter
Mensagem do commit -> add `Commitzen` and `commit` npm script
enter
No
No

git push -u origin hooks
No pull request do Github colocr o titulo -> Ass `Husky` and `Commitizen`
Botao -> Create pull request
Botao -> Merge pull request
Botao -> Dele branch
Fechar a Issues -> Linter de Commits
Botao -> Close issue

OBS: Para pular a verificação do commit-lint e adicionar uma mensagem qualquer use:

```
git commit --no-verify
```

ou

```
git commit -n
```

Isso vai fazer o git pular os scripts definidos no hooks, fazendo o commit de qualquer forma.

- Quando for criar um nova branch para um futuro pull request.
  Obs: Estes comandos garante que o trabalho está ocorendo na versão mais recente da branch principal antes de criar uma nova branch para um pull request.

Muda para a branch principal (main).

```
git checkout main
```

Deleta a branch local especificada (certifique-se de que a branch não tenha mudanças não commitadas ou que já tenha sido mergeada).

```
git branch -d <nome da branch>
```

Atualiza a branch principal (main) com as últimas mudanças do repositório remoto.

```
git pull
```

Opcional: exibe o histórico de commits. Útil para verificar as mudanças recentes.

```
git log
```

Cria uma nova branch a partir da branch principal (main) e muda para ela.

```
git checkout -b <nome da nova branch>

```
