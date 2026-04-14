---
question: "W poniższym przykładzie `workflow A` przekazuje wszystkie swoje sekrety do `workflow B`, używając słowa kluczowego inherit. Następnie `workflow B` wywołuje `workflow C`. Które stwierdzenie dotyczące `secrets` jest prawdziwe dla tego przykładu?"
documentation: "https://docs.github.com/en/actions/using-workflows/reusing-workflows#passing-secrets-to-nested-workflows"
---

```yaml
jobs:
  workflowA-calls-workflowB:
    uses: octo-org/example-repo/.github/workflows/B.yml@main
    secrets: inherit
```

```yaml
jobs:
  workflowB-calls-workflowC:
    uses: different-org/example-repo/.github/workflows/C.yml@main
```
- [x] Wszystkie sekrety dostępne dla `workflow A` będą również dostępne dla `workflow B`, ale nie dla `workflow C`.
- [ ] Wszystkie sekrety z organizacji `octo-org` i repozytorium `octo-org/example-repo` będą dostępne dla `workflow B`, ale nie dla `workflow C`.
> Nie wszystkie sekrety z organizacji `octo-org` muszą być udostępnione dla `octo-org/example-repo`.
- [ ] Wszystkie sekrety dostępne dla `workflow A` będą również dostępne dla `workflow B` i `workflow C`.
> `Workflow B` musiałby użyć `secrets: inherit`, aby przekazać sekrety do `workflow C`.
- [ ] Tylko sekrety repozytorium i środowiska dostępne dla `workflow A` będą dostępne dla `workflow B`, ale nie dla `workflow C`. Sekrety na poziomie organizacji nie mogą być odziedziczone.
