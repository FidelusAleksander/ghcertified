---
question: "W poniższym przykładzie `workflow A` przekazuje wszystkie swoje sekrety do `workflow B`, używając słowa kluczowego inherit. Następnie `workflow B` wywołuje `workflow C`. Które stwierdzenie dotyczące `secrets` jest prawdziwe dla tego przykładu?"
title: "Pytanie 040"
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
> https://docs.github.com/en/actions/using-workflows/reusing-workflows#passing-secrets-to-nested-workflows
1. [x] Wszystkie sekrety dostępne dla `workflow A` będą również dostępne dla `workflow B`, ale nie dla `workflow C`
1. [ ] Wszystkie sekrety organizacji `octo-org` i repozytorium `octo-org/example-repo` będą dostępne dla `workflow B`, ale nie dla `workflow C`
> Nie wszystkie sekrety organizacji `octo-org` muszą być dostępne dla `octo-org/example-repo`.
1. [ ] Wszystkie sekrety dostępne dla `workflow A` będą również dostępne dla `workflow B` i `workflow C`
> `Workflow B` musiałby dodać `secrets: inherit`, aby przekazać sekrety do `workflow C`
1. [ ] Tylko sekrety repozytorium i środowiska dostępne dla `workflow A` będą dostępne dla `workflow B`, ale nie dla `workflow C`. Sekrety na poziomie organizacji nie mogą być dziedziczone
