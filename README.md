# TabNews

Plataforma que permite compartilhar conteúdos de valor, tirar dúvidas e realizar interações por meio de publicações e comentários.

## Tecnologias:

### Dependencies

- **async-retry**: Uma biblioteca para facilitar a implementação de lógica de repetição assíncrona, permitindo a reexecução de operações assíncronas até que sejam bem-sucedidas ou um limite seja atingido.
- **dotenv**: Carrega variáveis de ambiente de um arquivo `.env` para `process.env`, ajudando a manter segredos e configuração fora do código-fonte.
- **dotenv-expand**: Expande variáveis referenciadas em outras variáveis do arquivo `.env`, fornecendo uma extensão para `dotenv`.
- **next**: Um framework React para renderização no lado do servidor (SSR) e geração de sites estáticos.
- **node-pg-migrate**: Uma biblioteca de migração para bancos de dados PostgreSQL, permitindo a criação e aplicação de scripts de migração de maneira programática.
- **pg**: Um cliente PostgreSQL para Node.js, usado para se conectar e interagir com bancos de dados PostgreSQL.
- **react**: Uma biblioteca JavaScript para construção de interfaces de usuário, baseada em componentes.
- **react-dom**: Um pacote que fornece métodos específicos do DOM que podem ser usados no nível superior da aplicação React.

### DevDependencies

- **@commitlint/cli**: Uma ferramenta de CLI para verificar se as mensagens de commit seguem as regras de convenção especificadas.
- **@commitlint/config-conventional**: Um conjunto de regras de convenção de commit que se baseia nas especificações do Angular.
- **commitizen**: Uma ferramenta para fazer commits amigáveis, seguindo convenções específicas.
- **concurrently**: Executa múltiplos comandos simultaneamente, útil para rodar scripts de desenvolvimento.
- **cz-conventional-changelog**: Adaptador para `commitizen`, seguindo o padrão de commit convencional.
- **eslint**: Uma ferramenta de linting para identificar e corrigir problemas em seu código JavaScript.
- **eslint-config-next**: Configurações ESLint específicas para projetos Next.js.
- **eslint-config-prettier**: Desativa regras ESLint que poderiam conflitar com Prettier.
- **eslint-plugin-jest**: Conjunto de regras ESLint para o framework de teste Jest.
- **husky**: Ferramenta para gerenciar ganchos do Git, como pre-commit e pre-push.
- **jest**: Um framework de teste JavaScript para garantir a qualidade do código.
- **prettier**: Um formatador de código que enforces a consistência de estilo de código em toda a base de código.

## Iniciar o projeto

Ao executar o comando ele vai verificar a existência do arquivo .nvmrc e vai utilizar as configurações especificadas.

```
nvm install
```

<br>

Instala as dependências do projeto.

```
npm install
```

<br>

Executar o projeto.

```
npm run dev
```

### Arquivos

- infra - Armazena arquivos de infraestrutura do projeto. Que inclui:

  - Configurações do Servidor
  - Configurações de Banco de Dados
  - Serviços Externos
  - Scripts de Deploy (Automação de builds, scripts CI/CD, configurações de infraestrutura como código, entre outros.)
  - Utilitários: Ferramentas e scripts auxiliares que suportam o desenvolvimento e operação do projeto.

- models - Define e gerencia as estruturas de dados e a lógica de acesso a banco de dados.

- pages - Neste diretório são armazenados os arquivos que definem as rotas da aplicação. Isso simplifica a criação de páginas e a navegação dentro do projeto, tornando o desenvolvimento mais eficiente e organizado.

- tests - Utilizada para armazenar os testes automatizados da aplicação.

  - **Testes Unitários:** Testam partes isoladas do código, como funções e componentes individuais.

  - **Testes de Integração:** Verificam se diferentes partes do sistema funcionam juntas corretamente.

  - **Testes de End-to-End (E2E):** Simulam interações reais do usuário com a aplicação, verificando o fluxo completo.

- .editorconfig - Define regras de configuração de um projeto para garantir que o editor de texto siga consistentemente as preferências de formatação e estilo do autor do código. Este arquivo é utilizado para manter a uniformidade do código-fonte, independentemente de qual editor de texto ou IDE esteja sendo utilizado pelo desenvolvedor.

- .env - Usado para armazenar variáveis de ambiente. Essas variáveis permitem configurar valores que podem variar entre os ambientes de desenvolvimento, teste e produção sem precisar alterar o código fonte.

- .nvmrc - Arquivo que especifica a versão do Node.js a ser usada com o Node Version Manager (nvm) em um projeto. Útil para garantir que todos os desenvolvedores usem a mesma versão do Node.js.

- .prettierignore - Especifica quais arquivos e diretórios devem ser ignorados pelo Prettier durante a formatação do código.

- package.json - Gerencia as dependências do projeto, scripts, versões e outras informações importantes. Define os módulos do projeto, scripts personalizados para tarefas comuns (como testes e builds), além de metadados sobre o projeto, como nome, versão e autor.

- package-lock.json - Arquivo de manifesto que documenta as versões exatas das dependências instaladas no projeto, assim como suas dependências. Garante a consistência das instalações de pacotes entre diferentes ambientes.
