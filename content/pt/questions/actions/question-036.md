---
question: "Você definiu um job de matriz `example_matrix`. Como limitar a matriz para executar um máximo de 2 jobs por vez?"
title: "Pergunta 036"
---


```yaml
  jobs:
    example_matrix:
      strategy:
        matrix:
          version: [10, 12, 14]
          os: [ubuntu-latest, windows-latest]
```
> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstrategymax-parallel
1. [x] Definir `jobs.example_matrix.strategy.max-parallel` como 2
1. [ ] Definir `jobs.example_matrix.strategy.concurrency` como 2
1. [ ] Usar a API REST do GitHub para verificar se a quantidade de jobs é menor que 2
1. [ ] Não é possível, uma matriz sempre executará todos os jobs em paralelo se houver runners disponíveis
