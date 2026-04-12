---
question: "Você definiu um job de matriz `example_matrix`. Como limitar a matriz para executar no máximo 2 jobs ao mesmo tempo?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstrategymax-parallel"
---

```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        version: [10, 12, 14]
        os: [ubuntu-latest, windows-latest]
```
- [x] Defina `jobs.example_matrix.strategy.max-parallel` como 2
- [ ] Defina `jobs.example_matrix.strategy.concurrency` como 2
- [ ] Use a REST API do GitHub para verificar se a contagem de jobs é menor que 2
- [ ] Não é possível, uma matriz sempre executará todos os jobs em paralelo, se houver runners disponíveis
