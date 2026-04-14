---
question: "Este workflow se ejecutará en todos los pull requests donde:"
documentation: "https://docs.github.com/en/actions/using-workflows/triggering-a-workflow#example-including-and-excluding-branches"
---

```yaml
on:
  pull_request:
    branches:
      - 'release/**'
      - '!release/**-alpha'
```
- [x] el nombre de la rama objetivo comienza con `release` pero no termina con `-alpha`
- [ ] el nombre de la rama objetivo comienza con `release`
- [ ] el nombre de la rama de origen comienza con `release` pero no termina con `-alpha`
- [ ] el nombre de la rama de origen comienza con `release`
