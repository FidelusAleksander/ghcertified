---
question: "Como pular a execução do workflow seguinte ao cometer ou criar um PR?"
title: "Pergunta 118"
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

1. [ ] Fornecer `SKIP_WORKFLOW` na mensagem do commit
1. [ ] O workflow acima será executado em todos os eventos de push ou pull request em qualquer caso
