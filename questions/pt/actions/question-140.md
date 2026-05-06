---
question: "Você está criando um workflow reutilizável que tem `branch-name` como entrada. Como você pode executar condicionalmente uma etapa nesse workflow se o nome da branch começar com 'smoke-test'?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/expressions#startswith"
---

- [x] Use o método embutido `startsWith` em combinação com `jobs.<job_id>.steps[*].if`
```yaml
    if: startsWith(inputs.branch-name, 'smoke-test')
```

- [ ] Use o método embutido `startsWith` em combinação com `jobs.<job_id>.steps[*].if`
```yaml
    if: inputs.branch-name.startsWith('smoke-test')
``` 
> Você não pode usar encadeamento de métodos com métodos embutidos do GitHub Actions. Quase todos os métodos embutidos são escritos no estilo `methodName(arg1,arg2,...)` 
- [ ] Use o filtro `branches` em `workflow_call`
```yaml
on:
  workflow_call:
    branches:
        - 'smoke-test/**'
```
> O filtro `branches` não está disponível para o acionador de evento `workflow_call`. Além disso, os acionadores de eventos de workflow não podem ser usados para controlar se uma etapa será executada ou não

- [ ] Use condicionais shell em combinação com `jobs.<job_id>.steps[*].if`
```yaml
    if: [[ "${{inputs.branch-name}}" == "smoke-test"* ]]
```
> Apenas contextos e expressões suportados pelo GitHub Actions podem ser usados em condicionais de `jobs.<job_id>.steps[*].if`. 
