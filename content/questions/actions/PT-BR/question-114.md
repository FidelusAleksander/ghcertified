---
question: "Como você pode acessar os valores atuais das variáveis em uma matriz dentro de um job no exemplo abaixo:"
archetype: "questions"
title: "Questão 114"
---

```yaml
jobs:
    example_matrix:
        strategy:
            matrix:
                version: [10, 12, 14]
                os: [ubuntu-latest, windows-latest]
```
> https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs#using-a-matrix-strategy
1. [x] referenciar variáveis através do contexto `matrix` com sintaxe como `matrix.version` e `matrix.os`
1. [ ] usando a sintaxe `matrix.property`
1. [ ] usando a palavra-chave `context` dentro da configuração do job
1. [ ] acessando as variáveis diretamente com a sintaxe `version` e `os`
