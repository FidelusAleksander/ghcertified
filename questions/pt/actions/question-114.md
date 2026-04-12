---
question: "Como você pode acessar os valores atuais das variáveis em uma matriz dentro de um trabalho no exemplo abaixo:"
documentation: "https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs#using-a-matrix-strategy"
---

```yaml
jobs:
    example_matrix:
        strategy:
            matrix:
                version: [10, 12, 14]
                os: [ubuntu-latest, windows-latest]
```
- [x] referencie as variáveis através do contexto `matrix` com a sintaxe como `matrix.version` e `matrix.os`
- [ ] usando a sintaxe `matrix.property`
- [ ] usando a palavra-chave `context` na configuração do trabalho
- [ ] acessando as variáveis diretamente com a sintaxe `version` e `os`
