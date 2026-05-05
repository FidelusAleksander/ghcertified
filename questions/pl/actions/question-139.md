---
question: "W jaki sposób można włączyć diagnostyczne logowanie runnera?"
documentation: "https://docs.github.com/en/actions/how-tos/monitor-workflows/enable-debug-logging#enabling-runner-diagnostic-logging"
---

- [x] Ustawiając sekret lub zmienną o nazwie `ACTIONS_RUNNER_DEBUG` na `true`
> Uwaga: `ACTIONS_RUNNER_DEBUG` można ustawić jako sekret lub zmienną na poziomie organizacji lub repozytorium.
- [x] Ponownie uruchamiając workflow z włączonym `Enable debug logging`
- [ ] Dodając folder najwyższego poziomu `ACTIONS_RUNNER_DEBUG` do repozytorium workflow
- [ ] Dodając podfolder `runner-diagnostic-logs` do katalogu `_diag` używanego runnera hostowanego we własnym zakresie
> `runner-diagnostic-logs` to nazwa folderu generowanego przez GitHub, gdy włączony jest `ACTIONS_RUNNER_DEBUG`. Aby uniknąć potencjalnych nieporozumień, folder o tej nazwie nie powinien być tworzony w żadnym innym miejscu.
- [ ] Zmieniając nazwę katalogu `_diag` hostowanego we własnym zakresie runnera na `runner-diagnostic-logs`
> Zmiana nazwy katalogu `_diag` nigdy nie powinna być wykonywana, ponieważ może to potencjalnie wpłynąć na działania związane z logowaniem.
