# TabNews
Plataforma que permite compartilhar conteúdos de valor, tirar dúvidas e realizar interações por meio de publicações e comentários.

## Tecnologias:

- Node JS - 18.20.4
- NVM
- Next JS - 13.1.6

## Comandos 

- Node - Executar código JavaScript fora do navegador. 
```
node -v

```

- NVM - Node Version Manager.
```
nvm -v
```
List - Versões atuais do node disponíveis.
```
nvm ls 
```
Instalar uma versão específica do Node
nvm install < nome da versão > (listada com nvm ls).
```
nvm install lts/hydrogen
```

Definir uma versão padrão para ser utilizada em um Shell.
```
nvm alias default lts/hydrogen
```

### Arquivos

- .nvmrc - É um arquivo que especifica a versão do Node.js a ser usada com o Node Version Manager (nvm) em um projeto.

Run Commands - Instruções de inicialização.

Ao executar o comando ele vai verificar a existência do arquivo .nvmrc e vai utilizar as configurações especificadas.
```
nvm install
```

- package.json - Gerencia as dependências do projeto, scripts, versões e outras informações importantes. Ele define os módulos do projeto, scripts personalizados para tarefas comuns (como testes e builds), além de metadados sobre o projeto, como nome, versão e autor.
```
npm init
```

Para projetos prontos.
```
npm install
```

Para instalar dependências do projeto. com "@" é possível definir uma versão especifica do pacote.
```
nvm install <nome do pacote>
```
Exemplos:
```
nvm install next@13.1.6
```

```
nvm install react@18.2.0
```

```
nvm install react-dom@18.2.0
```

## CodeSpaces
- Limpar o terminal -> Ctrl + L

### Executar o Projeto no CodeSpaces

- Ao executar o projeto:
```
npm run dev
```

- Clique na antena (Canto inferior esquerdo).

- Em "Visibilidade da Porta" altere para público para visualizar em outro dispositivo.


## Git

Estados dos arquivos no Git.
- Untracked -> Arquivos que ainda não foram registrados no controle de versão (Não rastreado).

- Modified -> Arquivos que foram modificados, mas ainda não foram preparados para o commit.

- Staged -> Arquivos que foram preparados e estão prontos para serem adicionados no próximo commit.

- Committed -> Arquivos que já fazem parte de uma versão do projeto.

<br>

Apresenta todos os Commits do projeto.
```
git log
```

Mostra de forma resumida os commits
```
git log --stat
```

Mostra os commits em um formato reduzido em uma linha.
```
git log --oneline
```

Compara o que tem no diretório .git desde o último commit com o estado atual dos arquivos do projeto.
```
git status
```

Mudo o status do arquivo de modified para staged.
```
git add <nome do arquivo>
```

Cria um commit do arquivo com status staged.
```
git commit
```
Para definir a mensagem direto no comando
```
git commit -m "Mensagem"
```

Calcular a diferença entre o arquivo anterior que o git possui com o arquivo atual do projeto.
```
git diff
```

Cria um commit, porém incorpora as alterações em arquivos que já estão presentes em um commit anterior, como se esta modificação tivesse sido feita no commit anterior.
```
git commit --amend
```

visualizar as branch (ramificações).
Cada branch é uma linha do tempo do projeto.
```
git branch
```

Empurra os arquivos com status staged para a branch main (origin) ou outro linha do tempo que esteja selecionada.
```
git push
```

Quando ocorrer a necessidade de usar o "git commit --amend" após ter enviado para o repositório do GitHub use
```
git push --force
```
ou
```
git push --f
```
OBS: Caso esteja trabalhando em grupo para não perder trabalhos pois o commit será substituído.

<br>

Faz o download dos arquivos do repositório.
```
git pull
```

<br>

### Descrição dos Commits
O uso de identificadores no início das mensagens de commit é uma prática que ajuda a categorizar as mudanças feitas no projeto. Aqui está uma lista de identificadores comuns e seu significado:

- feat: Adição de uma nova funcionalidade (feature).

- fix: Correção de um bug.

- docs: Alterações na documentação.

- style: Mudanças que não afetam o significado do código (espaços em branco, formatação, etc).

- refactor: Alteração de código que não corrige bugs nem adiciona funcionalidades.

- perf: Mudança no código que melhora o desempenho.

- test: Adição ou correção de testes.

- chore: Atualizações de tarefas e alterações de configuração que não impactam o código fonte ou os testes (ex. mudanças na configuração do build, geração de documentação, etc).

- ci: Mudanças na configuração de integração contínua.

- build: Mudanças que afetam o sistema de build ou dependências externas (ex. Gulp, Gradle, npm).


## Linux
Mostrar arquivos e pastas de um diretório.
```
ls 
```
Lista os arquivos na Horizontal.
```
ls -l
```
Mostra todos os arquivos, incluindo os ocultos.
```
ls -la
```