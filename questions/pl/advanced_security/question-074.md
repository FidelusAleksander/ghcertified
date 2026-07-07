---
question: "Które z poniższych stwierdzeń dotyczących włączania domyślnej konfiguracji skanowania CodeQL są prawdziwe?"
documentation: "https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/configure-code-scanning/configure-code-scanning"
---

- [x] Możesz włączyć domyślną konfigurację dla wszystkich kwalifikujących się repozytoriów w organizacji jednocześnie w ustawieniach organizacji
- [x] GitHub Actions musi być włączony jako warunek wstępny
- [x] Możesz włączyć domyślną konfigurację w dowolnym repozytorium, niezależnie od jego zawartości
- [ ] Możesz włączyć domyślną konfigurację tylko w repozytoriach, które zawierają przynajmniej jeden język obsługiwany przez CodeQL
> Jeśli włączysz domyślną konfigurację w repozytorium, które nie zawiera żadnych języków obsługiwanych przez CodeQL, domyślna konfiguracja nie przeprowadzi żadnych skanów
- [ ] Domyślna konfiguracja będzie skanować repozytorium według harmonogramu, który możesz skonfigurować. Aby przeprowadzić skanowanie oparte na zdarzeniach, musisz skonfigurować workflow GitHub Action
> Domyślna konfiguracja obejmuje skanowanie zgodne z harmonogramem oraz skanowanie pull requestów/pushy na domyślnych i chronionych gałęziach
- [ ] Możesz używać tylko domyślnego zestawu zapytań z domyślną konfiguracją skanowania CodeQL
