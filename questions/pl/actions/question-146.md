---
question: "Które stwierdzenia są prawdziwe w odniesieniu do `github.ref`, gdy workflow jest uruchamiany przez zdarzenie `pull_request`?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/contexts#github-context"
---

- [x] W pull requestach, które nie zostały zmergowane, `github.ref` odnosi się do w pełni utworzonego odwołania do gałęzi/tagu merge pull requesta 
> Więcej informacji o odwołaniach znajdziesz w oficjalnej [dokumentacji Git](https://git-scm.com/book/en/Git-Internals-Git-References).
- [x] W pull requestach, które zostały zmergowane, `github.ref` odnosi się do w pełni utworzonego odwołania do gałęzi, do której został wykonany merge.
- [ ] W pull requestach (niezależnie od statusu merge), `github.ref` odnosi się do numeru pull requesta 
> Dla zdarzenia `pull_request`, wartość `github.ref` różni się w zależności od tego, czy pull request został zmergowany. Ta wartość zawsze będzie odwołaniem (ref), a nie numerem pull requesta.
- [ ] W pull requestach (niezależnie od statusu merge), `github.ref` to SHA ostatniego commita merge na gałęzi `GITHUB_REF`.
> `github.sha` odnosi się do najnowszego SHA na gałęzi merge (np. `refs/pull/PULL_REQUEST_NUMBER/merge`). Odwołaj się do [dokumentacji zdarzeń](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#pull_request) po więcej szczegółów (szukaj `GITHUB_SHA`).
- [ ] W pull requestach, które nie zostały zmergowane, `github.ref` to w pełni utworzone odwołanie do tytułu pull requesta. 
> Odwołania nie są tworzone na podstawie tytułów pull requestów. `github.event.pull_request.title` to miejsce, w którym znajduje się tytuł pull requesta. Zobacz [dokumentację](https://docs.github.com/en/webhooks/webhook-events-and-payloads#pull_request) po więcej szczegółów.
- [ ] W pull requestach, które zostały zmergowane, `github.ref` to typ w pełni utworzonego odwołania, które uruchomiło wykonanie workflow. Wartość ta będzie albo `branch`, albo `tag`, albo `null` (jeśli odwołanie nie było w pełni utworzone).
> `github.ref_type` to wartość typu odwołania, które uruchomiło wykonanie workflow. Może zawierać tylko `branch` lub `tag`; `null` nie jest prawidłową wartością. Odwołaj się do linku do dokumentu w tym pytaniu po więcej szczegółów.
