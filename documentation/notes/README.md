# TabNews curl

Plataforma que permite compartilhar conteúdos de valor, tirar dúvidas e realizar interações por meio de publicações e comentários.

## Tecnologias:

- Node JS - 18.20.4
- NVM
- Next JS - 13.1.6
- Jest - 20.6.2
- Docker
- PostgreSQL
- PG
- Node PG Migrate - 6.2.2

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

- permite expandir variáveis em arquivos .env. Ele processa variáveis de ambiente que fazem referência a outras variáveis de ambiente definidas no mesmo arquivo .env.

```
npm install dotenv-expand@11.0.6
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

Rodar a bateria de testes:

```
npm run test
```

ou com tempo de execução

```
time npm run test
```

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

ou

```
git log --graph
```

Que adiciona um gráfico ao lado dos commits.

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

Para definir a mensagem direto no comando.

```
git commit -m "Mensagem"
```

Adicionar e aplicar o commit ao mesmo tempo.

```
git commit -am "Mensagem"
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

Lista a branch que estou no momento.

```
git branch
```

Criar uma nova branch

```
git branch <Nome da nova Branch>
```

Trocar de branch

```
git checkout <Nome da Branch>
```

ou

```
git switch <Nome da Branch>
```

Criar uma Branch e mudar para ele

```
git checkout -b <Nome da nova Branch>
```

OBS: Será necessário no commit

```
git push --set-upstream origin <Nome branch>
```

Remover uma branch

```
git branch -d <nome da branch>
```

Remover uma branch (Ser antes realizar MERGE)

```
git branch -D <nome da branch>
```

Recuperar branch apagadas por engano.
(Será necessário ter a HASH do commit)
Caso não tenha a HASH, diferente do "git log" que registra os commits de uma branch, use:

```
git reflog
```

Que registra tudo o que aconteceu no repositório do Git (Todas as referências).

Empurra os arquivos com status staged para a branch main (origin) ou outro linha do tempo que esteja selecionada.

```
git push
```

Execute em seguida o comando para fichar a branch de volta na HASH

```
git checkout -b <Nome da Branch> <Hash do commit>
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
Também serve para atualizar os arquivos no ambiente de desenvolvimento depois de um pull request.

```
git pull
```

<br>

Renomear arquivos (Mover um arquivo para outro com o novo nome)

```
git mv <nome do arquivo> <Novo Nome do arquivo>
```

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

Fazer requisições pelo terminal

```
curl localhost:3000/api/status --verbose
```

ou

```
curl localhost:3000/api/status --v
```

Adicionar opções ao servidor

```
curl https://76.76.21.21 --insecure --verbose --header 'Host: fintab.com.br'
```

Parâmetros adicionais como o método HTTP

```
curl -X POST https://tabnews-gules.vercel.app
```

Saída formatada com Python3

```
curl -s -X <Método> <Endereço URL> | python3 -m json.tool
```

Ou saída formatada com jq.

```
curl -s -X <Método> <Endereço URL> | jq
```

Observar e reexecutar o comando a cada 2s.

```
watch 'curl -s -X <Método> <Endereço URL> | jq'
```

Observar e reexecutar o comando em um intervalo de tempo específico.

```
watch -n <número em segundos> 'curl -s -X <Método> <Endereço URL> | jq'
```

Listar os processos que estão estão por traz de um ambiente (Environment)

```
env
```

Exibir ultimo exit code

```
echo $?
```

## Prettier

Prettier formata automaticamente o código, garantindo um estilo consistente e melhorando a legibilidade.

- Instalação como dependência de desenvolvimento.

```
npm install prettier -D
```

- Configurar no package.json na parte de scripts.

```
"lint:check": "prettier --check ."

```

```
"lint:fix": "prettier --write ."

```

- Verificar se há algo a ser formatado.

```
npm run lint:check
```

- Verificar se há algo a ser formatado e aplica a formatação.

```
npm run lint:fix
```

### Configurar no VSCode

- Instalar a extensão Prettier.

- Nas configurações, entre em Preferências.

- Pesquise por "formatter".

- Em Editor: Default Formatter, selecione Prettier - Code formatter.

- Pesquise por "format on save".

- Em Editor: Format On Save, marque a check-box.

Para alterar o auto save do VSCode, pesquise por auto save e busque por "Files: Auto Save".

## Exemplos de testes

### Exemplo de teste unitário

```
const calculadora = require("../models/calculadora.js");

test("somar 2 + 2  deveria retornar 4", () => {
  const resultado = calculadora.somar(2, 2);

  // Espera que algo vindo do sistema no final tenha o seguinte valor.
  expect(resultado).toBe(4);
});
```

## Exemplo de teste de integração

```
test("GEt to /api/v1/status", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");

  // Espera que algo vindo do sistema no final tenha o seguinte valor.
  expect(response.status).toBe(200);
});
```

## Docker Compose

- Apagar todas as imagens do Docker que estão no sistema

```
docker system prune -a
```

- Verificar versões

```
docker --version

```

```
docker-compose --version
```

- Colocar o container em execução

```
docker-compose up
```

- Colocar o container em execução de um arquivo de configuração (yaml) em um local específico. (O local padrão é na raiz do projeto)

```
docker-compose --file infra/compose.yaml up
```

ou

```
docker-compose -f infra/compose.yaml up
```

- Colocar o container em execução porém deixando o terminal livre.

```
docker-compose up -detach
```

ou

```
docker-compose up -d
```

- Recria o container (Encerra o container e o coloca em execução novamente)

```
docker-compose up -d --force-recreate
```

- Encerar um container

```
docker-compose down
```

- Exibir os containers que estão executando

```
docker ps
```

- Exibir todos os containers, em execução ou não

```
docker ps -a
```

ou

```
docker ps -all
```

- Exibir todos os logs do container

```
docker logs <nome do container>
```

- Finalizar o processo em uma porta que o docker teima em usar.

```
sudo kill -9 $(sudo lsof -t -i:<port>)
```

## psql

```
sudo apt install postgresql-client
```

```
psql --host=localhost --username=postgres --port=5432
```

- Para sair do cliente postgres

```
\q
```

## Node PG Migrate

- Criar uma nova migração dentro da pasta infra.

```
node-pg-migrate --migration-dir infra/migrations create
```

ou

```
node-pg-migrate --m infra/migrations create
```

- Usar o .env com o Node PG Migrate

```
npm install dotenv@16.4.4
```

- Existe duas formas de rodar migrações:

  - Dry Run - Que apenas mostra como as alteração vão afetar o banco de dados;
  - Wet Run - Ná pratica, modificando realmente o banco de dados.

## Testes

- Em vez de rodar todos os arquivos de testes, executar um em específico.

```
npm run test:watch -- migrations
```

- Caso tenha mais casos de teste e queira executar a penas 1.

```
npm run test:watch -- migrations.post
```

- Rodar o Jest em modo serial
  Altere em package.json

```
test: "jest --runInBand"
```
