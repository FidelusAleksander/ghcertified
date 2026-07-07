---
question: "Jak możesz pominąć uruchomienie tego workflowa podczas zatwierdzania zmian lub tworzenia PR?"
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

- [x] Poprzez dodanie dowolnego z poniższych słów kluczowych w wiadomości zatwierdzenia lub w tytule pull requesta
```yaml
[skip ci]
[ci skip]
[no ci]
[skip actions]
[actions skip]
```

- [ ] Umieszczając `SKIP_WORKFLOW` w wiadomości zatwierdzenia
- [ ] Powyższy workflow uruchomi się przy każdym zdarzeniu push lub pull request w każdym przypadku
