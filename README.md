# TabNews

Plataforma que permite compartilhar conteúdos de valor, tirar dúvidas e realizar interações por meio de publicações e comentários.

## Tecnologias:

- Node JS - 18.20.4
- NVM
- Next JS - 13.1.6
- Jest - 20.6.2
- Docker
- PostgreSQL

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

- .nvmrc - Arquivo que especifica a versão do Node.js a ser usada com o Node Version Manager (nvm) em um projeto. Útil para garantir que todos os desenvolvedores usem a mesma versão do Node.js.

- .prettierignore - Especifica quais arquivos e diretórios devem ser ignorados pelo Prettier durante a formatação do código.

- package.json - Gerencia as dependências do projeto, scripts, versões e outras informações importantes. Define os módulos do projeto, scripts personalizados para tarefas comuns (como testes e builds), além de metadados sobre o projeto, como nome, versão e autor.

- package-lock.json - Arquivo de manifesto que documenta as versões exatas das dependências instaladas no projeto, assim como suas dependências. Garante a consistência das instalações de pacotes entre diferentes ambientes.
