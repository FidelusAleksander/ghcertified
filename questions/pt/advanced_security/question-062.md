---
question: "Qual é o efeito de adicionar a palavra-chave `paths-ignore` ao seu workflow de GitHub Actions para varredura de código?"
documentation: "https://docs.github.com/en/code-security/reference/code-scanning/workflow-configuration-options#avoiding-unnecessary-scans-of-pull-requests"
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
- [x] Evitar escaneamentos desnecessários quando arquivos que não são relevantes para a análise forem alterados.
- [ ] Indica ao CodeQL para omitir todos os arquivos `*.txt` e `*.md` da análise.
- [ ] Impedir que a análise do CodeQL seja executada em pull requests que alterem arquivos com as extensões especificadas.
- [ ] As verificações de pull request irão ignorar quaisquer vulnerabilidades encontradas pelo CodeQL em arquivos `*.txt` e `*.md`.
