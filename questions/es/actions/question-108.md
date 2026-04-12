---
question: "¿Qué configuración es adecuada para activar un workflow que se ejecute en eventos de webhook relacionados con acciones de check_run?"
documentation: "https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#check_run"
---

- [x] 
```yaml
on:
    check_run:
        types: [rerequested, completed]
```

- [ ] 
```yaml
on:
    check_run:
        types: [started]
```

- [ ] 
```yaml
on:
    check_run:
        type: [closed]
```

- [ ] 
```yaml
on:
    check_run:
        filter: [requested]
```
