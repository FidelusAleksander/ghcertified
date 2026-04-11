---
question: "Jak można pominąć uruchomienie poniższego workflow podczas commitowania lub tworzenia PR?"
title: "Pytanie 118"
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

1. [x] Poprzez dodanie dowolnego z poniższych słów kluczowych w wiadomości commitu lub w tytule pull-requesta
```yaml
[skip ci]
[ci skip]
[no ci]
[skip actions]
[actions skip]
```

1. [ ] Podając `SKIP_WORKFLOW` w wiadomości commitu
1. [ ] Powyższy workflow uruchomi się za każdym razem w przypadku zdarzenia push lub pull request bez wyjątków
