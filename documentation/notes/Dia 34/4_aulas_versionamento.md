## Semantic Versioning

- [ ].[ ].[ ]
  major . minor . patch

Ex: 1.0.0

- Patch - Quando a alterações más que não trazem nenhuma mudança na aplicação, algo foi melhorado ou alterado mas não muda nada na usabilidade do sistema.
- Minor - Quando há a implementação de novas funcionalidades no sistema.
- Major - Quando algo mudou, o recurso que antes retornava um valor x agora retorna um valor y. O que pode quebrar algo na aplicação.

### Criar nova Branch

```
git checkout main

```

```
git pull

```

```
git branch -d <branch a ser deletada>

```

```
git checkout -b < nome nova branch>

```

Verificar quais dependências estão desatualizadas

```
npm outdated
```

- Verificar brechas de segurança das dependências (Auditoria)

```
npm audit
```

- Remover os " ^ " de todas as dependências e atualizar o package-lock.json com:

```
npm i
```

ou

```
npm install
```

Verificas as alterações do package.json

```
git diff package.json
```

- Verificas usando os casos de teste implementados para verificar se nada quebrou

```
npm test
```

```
git status
```

```
git add -A
```

```
npm run commit
```

- Usar `build`, enter, enter, mensagem - lock dependencies versions

- Biblioteca para atualizar dependências desatualizadas
  OBS: Desmarque todas antes de começar - pressionando "a"

```
npx npm-check-updates -i
```

- **Descrição**: Redefine o ponteiro `HEAD` para o commit especificado e também redefine o índice e a árvore de trabalho para corresponder ao commit especificado.
- **Uso Principal**: Reverter o repositório inteiro para um estado anterior, desfazendo mudanças não commitadas e commitadas desde aquele ponto.

```
git reset --hard <commit-hash>
```

- **Descrição**: Pode ser usado para restaurar arquivos no índice (staging area) ou na árvore de trabalho.
- **Uso Principal**: Desfazer mudanças em arquivos específicos, seja no índice ou na árvore de trabalho.
- **Exemplo de Uso**: `git restore <file>` para desfazer mudanças em um arquivo específico.

```
git restore
```

- **Descrição**: Atualiza arquivos na árvore de trabalho para coincidir com a versão no índice ou na branch atual. O `--` indica que o que vem depois são arquivos.
- **Uso Principal**: Descartar todas as mudanças não commitadas na árvore de trabalho.
- **Exemplo de Uso**: `git checkout -- <file>` para desfazer mudanças em um arquivo específico, ou `git checkout -- .` para desfazer todas as mudanças na árvore de trabalho.

```
git checkout -- .
```

Resolver problema de peer dependencies
Pode-se verificar a versão necessária e instala-la:
Ex:

```
npm i -D @typescript-eslint/parse@8.1.0
```

ou

Remover o arquivo package-lock e a pasta node_modules
OBS: Força de modo recursivo os arquivos.

```
rm -rf package-lock.json node_modules/
```

Depois reinstala as dependências

```
npm i
```

### Redefinir a versão do node para a definida no nvm do projeto

Verificar a versão

```
node -v
```

voltar a usar o node na versão 18 definida no arquivo .nvmrc

```
nvm i
```

```
git add -A && git commit --amend --no-edit
```

Remover o cache de módulos do projeto que não estão sendo usados mais.

```
npm cache clean --force
```

Força o envio dos arquivos para a branch.

```
git push --force
```

Verificar a formatação com o prettier

```
npx prettier --write infra/scripts/dev-runner.js
```

Checar se está tudo correto

Para um arquivo

```
npx prettier --check infra/scripts/dev-runner.js
```

Para todos os arquivos do projeto

```
npx prettier --check "**/*.{js,ts}"
```
