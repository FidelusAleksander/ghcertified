---
question: "¿Cómo puedes omitir la siguiente ejecución del workflow cuando haces un commit o creas un PR?"
title: "Pregunta 118"
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

1. [x] Incluyendo cualquiera de las siguientes palabras clave en el mensaje del commit o en el título del pull-request:
```yaml
[skip ci]
[ci skip]
[no ci]
[skip actions]
[actions skip]
```

1. [ ] Proporcionar `SKIP_WORKFLOW` en el mensaje del commit
1. [ ] El workflow anterior se ejecutará en cada evento de push o pull request en todos los casos
