---
question: "Como você pode ignorar a execução do fluxo de trabalho ao realizar um commit ou criar um PR?"
documentation: "https://docs.github.com/en/actions/managing-workflow-runs/skipping-workflow-runs"
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

- [x] Incluindo qualquer uma das palavras-chave a seguir na mensagem de commit ou no título do pull-request
```yaml
[skip ci]
[ci skip]
[no ci]
[skip actions]
[actions skip]
```

- [ ] Fornecendo `SKIP_WORKFLOW` na mensagem de commit
- [ ] O fluxo de trabalho acima será executado em todos os eventos de push ou pull request em todos os casos
