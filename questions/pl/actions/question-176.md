---
question: "Judith ma przepływ pracy, który powinien być uruchamiany za każdym razem, gdy zostanie wykonany commit w repozytorium. Repozytorium nie zawsze jest aktywne, więc Judith chce, aby przepływ pracy był programowo uruchamiany raz w tygodniu jako zabezpieczenie. Jakiej kombinacji zdarzeń powinna użyć, aby to osiągnąć?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows"
---

- [x] `push` and `schedule`
- [ ] `pull_request` (with `types:[closed]`) and `schedule`
> Pull requests mogą być zamykane bez ich scalania, a commit można wykonać w repozytorium bez pull request.
- [ ] `push` and `workflow_dispatch`
> Słowo „programmatically” w pytaniu oznacza, że przepływ pracy powinien być uruchamiany w sposób automatyczny, a nie ręczny. Wymaganie od użytkowników, aby ręcznie uruchamiali przepływ pracy co tydzień, nie jest niezawodne — można i należy to zautomatyzować za pomocą `schedule`.
- [ ] `push` and `weekly`
> `weekly` nie jest prawidłowym zdarzeniem. Użyj `schedule` z składnią `cron`, aby ustawić przepływ pracy na cotygodniowe uruchamianie.
- [ ] This is not possible: `schedule` cannot be combined with other events
