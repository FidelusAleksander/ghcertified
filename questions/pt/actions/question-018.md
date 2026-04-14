---
question: "Este workflow será executado em todos os pull requests onde:"
documentation: "https://docs.github.com/en/actions/using-workflows/triggering-a-workflow#example-including-and-excluding-branches"
---

```yaml
on:
  pull_request:
    branches:
      - 'release/**'
      - '!release/**-alpha'
```
- [x] o nome da branch de destino começa com `release`, mas não termina com `-alpha`
- [ ] o nome da branch de destino começa com `release`
- [ ] o nome da branch de origem começa com `release`, mas não termina com `-alpha`
- [ ] o nome da branch de origem começa com `release`
