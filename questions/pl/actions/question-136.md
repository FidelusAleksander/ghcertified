---
question: "Masz workflow, który wykorzystuje poniższą macierz. Jeśli zadanie w macierzy zakończy się niepowodzeniem, jak możesz upewnić się, że inne zadania w toku i w kolejce w macierzy nie zostaną anulowane?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#jobsjob_idstrategyfail-fast"
---

```yaml
jobs:
  deploy:
    strategy:
      matrix:
        version: ["1", "1.2", "1.3"]
        os: [ubuntu-latest, windows-latest]
```

- [x] Ustaw `jobs.<job_id>.strategy.fail-fast` na `false`
> Domyślnie `jobs.<job_id>.strategy.fail-fast` jest ustawione na `true`, co oznacza, że jeśli jedno z zadań macierzy zakończy się niepowodzeniem, pozostałe zadania w toku i w kolejce w tej macierzy zostaną anulowane. Aby uniknąć takiego zachowania, musisz jawnie ustawić `fail-fast` na `false`.
- [ ] Nic nie trzeba robić, ponieważ domyślne ustawienie `jobs.<job_id>.strategy.fail-fast` to `false`
> Domyślnie `jobs.<job_id>.strategy.fail-fast` jest ustawione na `true`.
- [ ] Ustaw `jobs.<job_id>.strategy.matrix.fail-fast` na `false`
> To jest niepoprawne, `fail-fast` jest na poziomie `strategy`, a nie na poziomie `matrix`. Jeśli ustawisz `fail-fast` na poziomie `matrix`, będzie to część [konfiguracji zadania](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/run-job-variations#adding-a-matrix-strategy-to-your-workflow-job) i nie wpłynie na anulowanie/kontynuację innych zadań w macierzy.
- [ ] Nic nie trzeba robić, ponieważ domyślne ustawienie `jobs.<job_id>.strategy.matrix.fail-fast` to `false`
> To jest niepoprawne, `fail-fast` jest na poziomie `strategy`, a nie na poziomie `matrix`.
- [ ] Nie ma sposobu na wymuszenie takiego zachowania, nie można tego obejść.
