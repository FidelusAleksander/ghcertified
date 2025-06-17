---
question: "Como você pode pular a execução do fluxo de trabalho seguinte quando fizer um commit ou criar um PR?"
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

1. [x] Incluindo qualquer uma das seguintes palavras-chave na mensagem de commit ou no título do pull-request
```yaml
[skip ci]
[ci skip]
[no ci]
[skip actions]
[actions skip]
```

1. [ ] Fornecer `SKIP_WORKFLOW` na mensagem de commit
1. [ ] O fluxo de trabalho acima será executado em todo evento de push ou pull request em todos os casos

