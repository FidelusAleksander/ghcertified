---
question: "Piszesz wielokrotnego użytku workflow, który ma `branch-name` jako dane wejściowe. Jak warunkowo uruchomić krok w tym workflow, jeśli nazwa branchu zaczyna się od 'smoke-test'?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/expressions#startswith"
---

- [x] Użyj wbudowanej metody `startsWith` w połączeniu z `jobs.<job_id>.steps[*].if`
```yaml
    if: startsWith(inputs.branch-name, 'smoke-test')
```

- [ ] Użyj wbudowanej metody `startsWith` w połączeniu z `jobs.<job_id>.steps[*].if`
```yaml
    if: inputs.branch-name.startsWith('smoke-test')
``` 
> Nie można używać łańcuchowego wywoływania metod z wbudowanymi metodami GitHub Actions. Prawie wszystkie wbudowane metody są pisane w stylu `methodName(arg1,arg2,...)` 
- [ ] Użyj filtra `branches` w sekcji `workflow_call`
```yaml
on:
  workflow_call:
    branches:
        - 'smoke-test/**'
```
> Filtr `branches` nie jest dostępny dla wyzwalacza zdarzenia `workflow_call`. Ponadto wyzwalacze zdarzeń workflow nie mogą być używane do kontrolowania, czy krok jest uruchamiany, czy nie.

- [ ] Użyj warunków shellowych w połączeniu z `jobs.<job_id>.steps[*].if`
```yaml
    if: [[ "${{inputs.branch-name}}" == "smoke-test"* ]]
```
> W warunkach `jobs.<job_id>.steps[*].if` można używać wyłącznie obsługiwanych kontekstów i wyrażeń GitHub Actions.
