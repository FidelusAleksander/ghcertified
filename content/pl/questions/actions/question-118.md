---
question: "Jak pominąć uruchomienie kolejnego przepływu pracy podczas commitowania lub tworzenia PR?"
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

1. [x] Poprzez umieszczenie dowolnego z następujących słów kluczowych w wiadomości commita lub w tytule pull requesta:
```yaml
[skip ci]
[ci skip]
[no ci]
[skip actions]
[actions skip]
```

1. [ ] Podając `SKIP_WORKFLOW` w wiadomości commita
1. [ ] Powyższy przepływ pracy będzie uruchamiany w każdym przypadku zdarzenia push lub pull requesta
