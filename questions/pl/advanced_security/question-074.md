---
title: "Pytanie 074"
question: "Które z poniższych stwierdzeń dotyczących włączania domyślnej konfiguracji skanowania CodeQL są prawdziwe? (Wybierz trzy.)"
---

> https://docs.github.com/en/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning
- [x] Możesz włączyć domyślną konfigurację dla wszystkich kwalifikujących się repozytoriów w organizacji naraz w ustawieniach organizacji
- [x] GitHub Actions musi być włączony jako warunek wstępny
- [x] Możesz włączyć domyślną konfigurację w dowolnym repozytorium, niezależnie od jego zawartości
- [ ] Możesz włączyć domyślną konfigurację tylko w repozytoriach, które zawierają co najmniej jeden język obsługiwany przez CodeQL
> Jeśli włączysz domyślną konfigurację w repozytorium, które nie zawiera żadnego języka obsługiwanego przez CodeQL, domyślna konfiguracja nie wykona żadnych skanowań
- [ ] Domyślna konfiguracja będzie skanować repozytorium zgodnie z harmonogramem, który możesz skonfigurować. Dla skanowania zdarzeniowego musisz skonfigurować przepływ pracy GitHub Action
> Domyślna konfiguracja obejmuje skanowanie harmonogramowe oraz skanowanie pull requestów/push na domyślnych i chronionych gałęziach
- [ ] Możesz korzystać tylko z domyślnego zestawu zapytań z domyślną konfiguracją skanowania CodeQL
