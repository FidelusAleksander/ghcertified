---
question: "Które z poniższych stwierdzeń dotyczących włączania domyślnej konfiguracji skanowania CodeQL są prawdziwe?"
documentation: "https://docs.github.com/en/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning"
---

- [x] Możesz włączyć domyślną konfigurację dla wszystkich kwalifikujących się repozytoriów w organizacji jednocześnie w ustawieniach organizacji
- [x] GitHub Actions muszą być włączone jako warunek wstępny
- [x] Możesz włączyć domyślną konfigurację w dowolnym repozytorium, bez względu na jego zawartość
- [ ] Możesz włączyć domyślną konfigurację tylko w repozytoriach zawierających co najmniej jeden język obsługiwany przez CodeQL
> Jeśli włączysz domyślną konfigurację w repozytorium, które nie zawiera żadnych języków obsługiwanych przez CodeQL, domyślna konfiguracja nie przeprowadzi żadnych skanów
- [ ] Domyślna konfiguracja będzie skanować repozytorium według harmonogramu, który możesz skonfigurować. Aby skonfigurować skanowanie zdarzeń, musisz skonfigurować workflow GitHub Actions
> Domyślna konfiguracja obejmuje skanowanie zaplanowane oraz skanowanie Pull Request / push na domyślnych i chronionych gałęziach
- [ ] Możesz używać tylko domyślnego zestawu zapytań z domyślną konfiguracją skanowania CodeQL
