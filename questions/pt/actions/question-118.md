---
question: "Como você pode ignorar a execução do workflow ao realizar um commit ou criar um Pull Request?"
documentation: "https://docs.github.com/en/actions/how-tos/manage-workflow-runs/skip-workflow-runs"
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

- [x] Incluindo qualquer uma das palavras-chave a seguir na mensagem do commit ou no título do Pull Request
```yaml
[skip ci]
[ci skip]
[no ci]
[skip actions]
[actions skip]
```

- [ ] Utilizar `SKIP_WORKFLOW` na mensagem do commit
- [ ] O workflow acima será executado em todos os eventos de push ou pull request em todos os casos
