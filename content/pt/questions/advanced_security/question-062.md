---
title: "Pergunta 062"
question: "Qual é o efeito de adicionar a palavra-chave `paths-ignore` ao seu fluxo de trabalho do GitHub Actions de varredura de código?"
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
> https://docs.github.com/pt/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#avoiding-unnecessary-scans-of-pull-requests
1. [x] Evitar varreduras desnecessárias quando arquivos que não são relevantes para a análise são alterados.
1. [ ] Informa ao CodeQL para omitir todos os arquivos `*.txt` e `*.md` da análise. 
1. [ ] Impedir que a análise do CodeQL seja executada em pull requests que alterem arquivos com as extensões especificadas.
1. [ ] As verificações de pull request ignorarão quaisquer vulnerabilidades do CodeQL encontradas em arquivos `*.txt` e `*.md`.
