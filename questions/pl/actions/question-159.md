---
question: "Które z poniższych stwierdzeń są prawdziwe przy porównywaniu zdarzeń pull_request i pull_request_target?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#pull_request"
---

- [x] Zdarzenie `pull_request` działa w kontekście commitu scalającego (merge commit), podczas gdy `pull_request_target` działa w kontekście domyślnej gałęzi bazowego repozytorium.
> Więcej informacji o commitach scalających znajdziesz w [dokumentacji](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges) GitHub. 
- [x] Workflows nie będą uruchamiane na aktywności `pull_request`, jeśli występują konflikty scalania (merge conflicts).
- [x] Zdarzenia `pull_request` i `pull_request_target` mają domyślne typy aktywności: `opened`, `synchronize` i `reopened`.
- [ ] `pull_request` powinien być używany ostrożnie, ponieważ PR-y pochodzące z forków umożliwią workflowowi dostęp do wszystkich sekretów w repozytorium, ponieważ są powiązane z domyślną gałęzią.
> To dotyczy `pull_request_target`; `pull_request` nie jest powiązane z domyślną gałęzią i dlatego, gdy zostanie wywołane przez PR-y z forków, workflow będzie miał ograniczony dostęp do sekretów. Zobacz powyżej podlinkowaną dokumentację, szczególnie sekcję "pull_request_target", aby uzyskać więcej informacji.
- [ ] Workflows nie będą uruchamiane na aktywności `pull_request_target`, jeśli występują konflikty scalania (merge conflicts).
- [ ] Zdarzenie `pull_request_target` powinno być używane, gdy chcesz uruchomić kod zawarty w zmienionych plikach PR, aby na przykład przeprowadzić testy ciągłej integracji (CI) lub uruchomić zestawy testów.
> `pull_request_target` działa w kontekście domyślnej gałęzi repozytorium, co może prowadzić do sprawdzania i wykonywania niezaufanego kodu przez aktywności takie jak testy ciągłej integracji (CI). Więcej informacji znajdziesz w [dokumentacji](https://docs.github.com/en/enterprise-cloud@latest/actions/reference/security/secure-use#mitigating-the-risks-of-untrusted-code-checkout). 
