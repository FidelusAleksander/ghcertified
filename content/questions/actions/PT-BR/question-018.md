---
question: "Este workflow será executado em todos os pull requests onde:"
archetype: "questions"
title: "Questão 018"
---

```yaml
on:
  pull_request:
    branches:
      - 'release/**'
      - '!release/**-alpha'
```
> https://docs.github.com/en/actions/using-workflows/triggering-a-workflow#example-including-and-excluding-branches
1. [x] o nome da branch de destino começa com `release` mas não termina com `-alpha`
1. [ ] o nome da branch de destino começa com `release`
1. [ ] o nome da branch de origem começa com `release` mas não termina com `-alpha`
1. [ ] o nome da branch de origem começa com `release`
