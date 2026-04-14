---
question: "Dada a seguinte configuração, quantos jobs o GitHub Actions executará quando essa matriz for avaliada?"
documentation: "https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/running-variations-of-jobs-in-a-workflow#expanding-or-adding-matrix-configurations"
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

- [ ] 4 jobs
- [x] 5 jobs
- [ ] 6 jobs
- [ ] 7 jobs
- [ ] Nenhum job será executado porque a sintaxe é inválida.
