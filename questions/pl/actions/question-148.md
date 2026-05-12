---
question: "Które stwierdzenie jest prawdziwe w odniesieniu do `github.ref`, gdy workflow jest uruchamiany przez zdarzenie push?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/contexts#github-context"
---

- [x] W przypadku zdarzeń push, `github.ref` to w pełni uformowany odnośnik gałęzi lub tag, który został wypchnięty. 
> Więcej informacji na temat odnośników znajdziesz w oficjalnej [dokumentacji Git](https://git-scm.com/book/en/Git-Internals-Git-References).
- [ ] W przypadku zdarzeń push, `github.ref` to wiadomość commitu, który uruchomił workflow.
>  `github.event.head_commit.message` zawiera wiadomość ostatniego commitu. Zobacz [dokumentację](https://docs.github.com/en/webhooks/webhook-events-and-payloads#push), aby uzyskać więcej szczegółów.
- [ ] W przypadku zdarzeń push, `github.ref` to SHA commitu, który uruchomił workflow.
> `github.sha` wskazuje na SHA commitu. Sprawdź [dokumentację zdarzeń](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows) oraz link do dokumentu w tym pytaniu, aby uzyskać więcej szczegółów.
- [ ] W przypadku zdarzeń push, `github.ref` to opis commitu, który uruchomił workflow.
- [ ] W przypadku zdarzeń push, `github.ref` to typ w pełni uformowanego odnośnika, który uruchomił workflow. Wartość będzie `branch`, `tag` lub `null` (jeśli odnośnik nie był w pełni uformowany).
> `github.ref_type` to wartość typu odnośnika, który uruchomił workflow. Może zawierać tylko `branch` lub `tag`; `null` nie jest prawidłową wartością. Zobacz link do dokumentu w tym pytaniu, aby uzyskać więcej szczegółów.
