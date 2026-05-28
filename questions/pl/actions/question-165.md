---
question: "W jaki sposób `repository_dispatch` umożliwia systemom spoza GitHub uruchamianie workflow?"
documentation: "https://docs.github.com/en/rest/repos/repos?apiVersion=2026-03-10#create-a-repository-dispatch-event"
---

- [x] Zewnętrzny system wykonuje żądanie POST do GitHub API w celu utworzenia zdarzenia repository dispatch.
- [x] Workflow jest uruchamiany przez utworzenie zdarzenia repository dispatch 
> Wynikiem operacji "Create a repository dispatch event" jest nowe zdarzenie `repository_dispatch` (webhook), którego oczekuje `on.repository_dispatch`.
- [x] Klucz workflow `on.repository_dispatch.types` odpowiada parametrowi `event_type` w treści żądania, ograniczając uruchamianie workflow jedynie do odpowiednich zdarzeń zewnętrznych 
> `on.repository_dispatch.types` pozwala zdefiniować niestandardowe typy aktywności. Zobacz [dokumentację](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#repository_dispatch), aby zobaczyć przykłady, jak `on.repository_dispatch.types` i `event_type` są ze sobą powiązane.
- [ ] Zewnętrzny system wykonuje żądanie PUT do GitHub API w celu utworzenia zdarzenia repository dispatch
> Właściwą metodą HTTP dla operacji "Create a repository dispatch event" jest POST.
- [ ] Workflow jest uruchamiany przez żądanie POST do workflow za pomocą następującego endpointu `/repos/OWNER/REPO/actions/workflows/<WORKFLOW_ID>/dispatches` 
> Ten endpoint odpowiada tworzeniu zdarzenia workflow dispatch, a nie repository dispatch. Ponadto żądania związane z Actions powinny być kierowane do GitHub API—nie można wykonywać żądań API bezpośrednio do workflow.
- [ ] Klucz workflow `on.repository_dispatch.event_types` odpowiada parametrowi `event_type` w treści żądania, ograniczając uruchamianie workflow jedynie do odpowiednich zdarzeń zewnętrznych
> Nie istnieje klucz `on.repository_dispatch.event_types`. Używany jest klucz `on.repository_dispatch.types`, zgodnie z zasadą, że inne zdarzenia używają `on.<event_name>.types` do filtrowania na podstawie aktywności.
