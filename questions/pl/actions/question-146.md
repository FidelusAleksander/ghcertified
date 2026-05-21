---
question: "Które stwierdzenia dotyczące `github.ref` są prawdziwe, gdy workflow jest uruchamiany przez zdarzenie `pull_request`?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/contexts#github-context"
---

- [x] W przypadku pull requestów, które nie zostały jeszcze scalone, `github.ref` odnosi się do w pełni uformowanego odniesienia (ref) gałęzi/tagu merge pull requestu.  
> Na przykład, jeśli numer (otwartego) pull requestu wynosił #123, `github.ref` będzie `refs/pull/123/merge`. Więcej informacji o odniesieniach (refs) można znaleźć w oficjalnej [dokumentacji Git](https://git-scm.com/book/en/Git-Internals-Git-References).
- [x] W przypadku pull requestów, które zostały scalone, `github.ref` odnosi się do w pełni uformowanego odniesienia gałęzi, do której merge został wykonany.  
> Na przykład, jeśli coś zostało scalone do gałęzi `main`, `github.ref` będzie `ref/heads/main` po scaleniu pull requestu.
- [ ] W przypadku pull requestów (niezależnie od statusu scalenia), `github.ref` odnosi się do numeru pull requestu.  
> W przypadku zdarzenia `pull_request`, wartość `github.ref` zależy od tego, czy pull request został scalony. Ta wartość zawsze będzie odniesieniem (ref), a nie numerem pull requestu.
- [ ] W przypadku pull requestów (niezależnie od statusu scalenia), `github.ref` jest SHA ostatniego commita merge w gałęzi `GITHUB_REF`.  
> `github.sha` wskazuje na najnowsze SHA w gałęzi merge (np. `refs/pull/PULL_REQUEST_NUMBER/merge`). Zobacz [dokumentację zdarzeń](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#pull_request) po więcej szczegółów (wyszukaj `GITHUB_SHA`).
- [ ] W przypadku pull requestów, które nie zostały jeszcze scalone, `github.ref` jest w pełni uformowanym odniesieniem do tytułu pull requestu.  
> Odniesienia (refs) nie są tworzone na podstawie tytułów pull requestów. `github.event.pull_request.title` zawiera tytuł pull requestu. Zobacz [dokumentację](https://docs.github.com/en/webhooks/webhook-events-and-payloads#pull_request) po więcej szczegółów.
- [ ] W przypadku pull requestów, które zostały scalone, `github.ref` to typ w pełni uformowanego odniesienia, które uruchomiło działanie workflow. Wartość może być `branch`, `tag` lub `null` (jeśli odniesienie nie było w pełni uformowane).  
> `github.ref_type` to wartość określająca typ odniesienia, które uruchomiło działanie workflow. Może zawierać jedynie `branch` lub `tag`; `null` nie jest prawidłową wartością. Odnieś się do linku w dokumencie w tym pytaniu po więcej szczegółów.
