---
question: "Jak można używać zewnętrznych sejfów do zarządzania sekretami w GitHub Actions?"
title: "Pytanie 091"
---

> https://developer.hashicorp.com/vault/docs/platform/github-actions  
> https://bitwarden.com/help/github-actions-integration/  
> https://docs.keeper.io/en/keeperpam/secrets-manager/integrations/github-actions  
1. [x] Przechowuj sekrety w zewnętrznym sejfie i użyj kroku odszyfrowania w swoim workflow, z kluczem deszyfrującym przechowywanym jako sekret w GitHub Actions.  
1. [ ] Bezpośrednia integracja z zewnętrznymi sejfami jest natywnie obsługiwana w GitHub Actions bez potrzeby jakiejkolwiek dodatkowej konfiguracji.  
1. [ ] Zewnętrzne sejfy powinny być dostępne poprzez osadzanie ich kluczy API w plikach workflow i używanie API lub CLI danego dostawcy.  
1. [ ] GitHub Actions nie obsługuje używania zewnętrznych sejfów do zarządzania sekretami; wszystkie sekrety muszą być przechowywane w GitHub.  
