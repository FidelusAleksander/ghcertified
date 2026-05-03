---
question: "Chcesz utworzyć workflow `Post-Deploy`, który wykonuje czynności związane z post-deploy. Jakiego wyzwalacza zdarzeń powinien użyć workflow `Post-Deploy`, aby uruchomił się automatycznie po zakończeniu określonego workflow?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#workflow_run"
---

- [x] `workflow_run`
> `workflow_run` pozwala na uruchomienie workflow po zakończeniu innych określonych workflow (niezależnie od ich powodzenia). Należy zauważyć, że chociaż to pytanie odnosi się konkretnie do zakończonych workflow, `workflow_run` może również zostać skonfigurowany tak, aby uruchamiał workflow, gdy inne określone workflow zostały wyzwolone lub rozpoczęły przetwarzanie na runnerze.
- [ ] `workflow_trigger`
> Nie ma takiego wyzwalacza zdarzeń.
- [ ] `workflow_dispatch`
> `workflow_dispatch` jest używany do ręcznego uruchamiania workflow. Więcej informacji znajdziesz w [dokumentacji](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#workflow_dispatch).
- [ ] `workflow_call`
> `workflow_call` jest używany, aby workflow mógł być wywoływany z innych workflow lub akcji. Więcej informacji znajdziesz w [dokumentacji](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#workflow_call).
