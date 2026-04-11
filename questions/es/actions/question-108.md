---
question: "¿Qué configuración es adecuada para desencadenar un workflow que se ejecute en eventos de webhook relacionados con acciones de check_run?"
title: "Pregunta 108"
---


> https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#check_run

1. [x] 
```yaml
on:
    check_run:
        types: [rerequested, completed]
```

1. [ ] 
```yaml
on:
    check_run:
        types: [started]
```

1. [ ] 
```yaml
on:
    check_run:
        type: [closed]
```

1. [ ] 
```yaml
on:
    check_run:
        filter: [requested]
```
