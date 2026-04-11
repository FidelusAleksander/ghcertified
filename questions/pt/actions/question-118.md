---
question: "Como você pode pular a execução do seguinte workflow ao fazer um commit ou criar um Pull Request?"
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

1. [x] Incluindo qualquer uma das seguintes palavras-chave na mensagem do commit ou no título do Pull Request
```yaml
[skip ci]
[ci skip]
[no ci]
[skip actions]
[actions skip]
```

1. [ ] Fornecendo `SKIP_WORKFLOW` na mensagem do commit
1. [ ] O workflow acima será executado em todo evento de push ou pull request em todos os casos
