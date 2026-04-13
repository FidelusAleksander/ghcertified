---
question: "Qual é o efeito de adicionar a palavra-chave `paths-ignore` ao seu fluxo de trabalho de GitHub Actions para varredura de código?"
documentation: "https://docs.github.com/pt/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#avoiding-unnecessary-scans-of-pull-requests"
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
- [x] Evitar análises desnecessárias quando arquivos que não são relevantes para a análise forem alterados.
- [ ] Isso diz ao CodeQL para omitir todos os arquivos `*.txt` e `*.md` da análise. 
- [ ] Impedir que a análise do CodeQL seja executada em pull requests que alterem arquivos com as extensões especificadas.
- [ ] As verificações de pull request ignorarão quaisquer vulnerabilidades do CodeQL encontradas em arquivos `*.txt` e `*.md`.
