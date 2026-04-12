---
question: "Qual configuração é apropriada para acionar um workflow em eventos de webhook relacionados a ações check_run?"
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
