---
question: "Twoja firma posiada wewnętrzne sekrety, które nie powinny być przesyłane do repozytoriów GitHub. Wzorzec tych sekretów nie jest znany przez GitHub i dlatego nie jest wykrywany przez skanowanie sekretów. Co mogą zrobić firmy, aby chronić swoich programistów przed przypadkowym przesłaniem tych sekretów do repozytoriów w ich organizacji GitHub?"
documentation: "https://docs.github.com/en/enterprise-cloud@latest/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-an-organization"
---

- [x] Zdefiniować wyrażenia regularne dla tych sekretów i włączyć niestandardowe wzorce dla skanowania sekretów w organizacji.
- [ ] Firma powinna dołączyć do programu partnerskiego GitHub, aby wzorzec sekretów firmy został rozpoznany.
> Program partnerski GitHub jest przeznaczony dla dostawców usług, które dystrybuują sekrety poza swoją organizacją (np. dostawców chmury). Nie jest przeznaczony dla wewnętrznych sekretów pojedynczej organizacji.
- [ ] Zdefiniować niestandardowe GitHub Actions workflows dla repozytoriów w organizacji, które będą skanowały te sekrety.
- [ ] W każdym repozytorium umieścić plik `secret_scanning.yml`, który zdefiniuje te niestandardowe sekrety, które powinny być skanowane.
> Plik `secret_scanning.yml` może być używany do wyłączania skanowania sekretów dla konkretnych plików lub katalogów.
