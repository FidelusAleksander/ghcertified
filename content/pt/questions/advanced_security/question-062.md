---
title: "Questão 062"
question: "Qual é o efeito de adicionar a palavra-chave `paths-ignore` ao seu arquivo de workflow do GitHub Actions para análise de código?"
---


```yaml
.github/workflows/codeql-analysis.yml

on:
  pull_request:
    branches: [main]
    paths-ignore:
      - '**/*.md'
      - '**/*.txt'

```
> https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#avoiding-unnecessary-scans-of-pull-requests
1. [x] Evitar análises desnecessárias quando arquivos que não são relevantes para a análise são alterados.
1. [ ] Indica ao CodeQL para omitir todos os arquivos `*.txt` e `*.md` da análise. 
1. [ ] Impede que a análise do CodeQL seja executada em pull requests que alterem arquivos com as extensões especificadas.
1. [ ] Os verificadores de pull requests irão ignorar quaisquer vulnerabilidades do CodeQL encontradas em arquivos `*.txt` e `*.md`.
