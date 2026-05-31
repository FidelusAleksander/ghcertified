---
question: "Hilda potrzebuje dostępu do artefaktu wygenerowanego przez ostatnio wykonany workflow, ale sam plik workflow został już usunięty. Czy nadal będzie mogła odzyskać artefakt?"
documentation: "https://docs.github.com/en/actions/how-tos/manage-workflow-runs/remove-workflow-artifacts#artifacts-from-deleted-workflow-runs"
---

- [x] Tak, ponieważ usunięcie workflow nie powoduje automatycznego usunięcia jego uruchomień i wygenerowanych artefaktów
> Uruchomienia workflow i ich wygenerowane artefakty nie są usuwane automatycznie wraz z usunięciem odpowiedniego workflow. Aby usunąć artefakty, należy usunąć samo uruchomienie.
- [ ] Nie, ponieważ usunięcie workflow automatycznie usuwa jego uruchomienia i wygenerowane artefakty
- [ ] Tak, ale tylko jeśli ma uprawnienia administratora
- [ ] Nie, ponieważ mimo że uruchomienia workflow pozostaną po jego usunięciu, wygenerowane artefakty stają się uszkodzone
