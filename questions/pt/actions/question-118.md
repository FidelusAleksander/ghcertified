---
pergunta: "Como você pode pular a execução do workflow ao fazer um commit ou criar um PR?"
documentação: "https://docs.github.com/en/actions/managing-workflow-runs/skipping-workflow-runs"
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

- [x] Incluindo qualquer uma das seguintes palavras-chave na mensagem de commit ou no título do pull-request
```yaml
[skip ci]
[ci skip]
[no ci]
[skip actions]
[actions skip]
```

- [ ] Forneça `SKIP_WORKFLOW` na mensagem de commit
- [ ] O workflow acima será executado em todo evento de push ou pull request em todos os casos
