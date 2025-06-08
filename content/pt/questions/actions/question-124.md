---
question: "Dada a seguinte configuração, quantos jobs o GitHub Actions executará quando essa matriz for avaliada?"
title: "Pergunta 124"
---

```yaml
strategy:
  matrix:
    os: [ubuntu-latest, windows-latest]
    node: [14, 16]
    include:
      - os: macos-latest
        node: 18
      - os: ubuntu-latest
        node: 14
```

> https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/running-variations-of-jobs-in-a-workflow#expanding-or-adding-matrix-configurations

1. [ ] 4 jobs  
1. [x] 5 jobs  
1. [ ] 6 jobs  
1. [ ] 7 jobs  
1. [ ] Nenhum job será executado porque a sintaxe é inválida.  
