---
question: "Dorothea rozwiązuje problem z workflow, który jest uruchamiany przez zdarzenie push, i jest zainteresowana zobaczeniem szczegółów dotyczących webhooka. W jaki sposób może zobaczyć cały ładunek webhooka, który uruchomił workflow?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/contexts#github-context"
---

- [x] Wydrukowanie zawartości obiektu `github.event` w kroku
> `github.event` pokaże pełny ładunek zdarzenia webhook. Ten ładunek różni się w zależności od rodzaju zdarzenia. Zobacz [Webhook events and payloads](https://docs.github.com/en/webhooks/webhook-events-and-payloads) aby uzyskać więcej informacji.
- [ ] Zaznaczenie pola wyboru "Show event webhook payload" w opcjach uruchamiania workflow.
- [ ] Ustawienie sekretu lub zmiennej o nazwie `SHOW_EVENT_PAYLOAD` na `true`
- [ ] Przejście do sekcji "Webhooks" w ustawieniach repository
> Sekcja "Webhooks" w ustawieniach repository pokaże szczegóły tylko dla niestandardowych webhooków, a nie standardowych zdarzeń webhook, takich jak `push`.
