---
question: "Como você pode pular a execução do workflow a seguir quando você faz um commit ou cria um PR?"
archetype: "questions"
title: "Questão 118"
---

```yaml
name: Build
on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    name: Extract artifact version
...
```

>https://docs.github.com/en/actions/managing-workflow-runs/skipping-workflow-runs

1. [x] Incluindo qualquer uma das seguintes palavras-chave na mensagem do commit ou no título do pull request
```yaml
[skip ci]
[ci skip]
[no ci]
[skip actions]
[actions skip]
```

1. [ ] Fornecendo `SKIP_WORKFLOW` na mensagem do commit
1. [ ] O workflow acima será executado em todos os eventos de push ou pull request em todos os casos
