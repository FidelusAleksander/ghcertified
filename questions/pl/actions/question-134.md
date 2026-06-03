---
question: "Jak uruchomić niestandardowe skrypty JavaScript bezpośrednio w przepływie pracy GitHub Actions?"
documentation: "https://github.com/marketplace/actions/github-script"
---

- [x] Za pomocą akcji `actions/github-script`
> `actions/github-script` pozwala na pisanie i używanie wbudowanego kodu JavaScript w celu wykonywania wywołań API i uzyskiwania dostępu do kontekstu przepływu pracy. Aby użyć `actions/github-script`, należy wywołać ją jak każdą inną akcję, jak opisano w [dokumentacji](https://github.com/actions/github-script) 
- [ ] Poprzez włączenie konfiguracji 'Allow custom JavaScript scripts' w ustawieniach Actions dla repozytorium
> Nie istnieje konfiguracja 'Allow custom JavaScript scripts' w ustawieniach Actions dla repozytorium.
- [ ] Poprzez włączenie konfiguracji 'Allow custom JavaScript scripts' w ustawieniach Actions dla organizacji
> Nie istnieje konfiguracja 'Allow custom JavaScript scripts' w ustawieniach Actions dla repozytorium. Chociaż może być konieczne włączenie ustawień takich jak 'Allow actions created by Github' w ustawieniach Actions organizacji, aby korzystać z oficjalnych akcji Github, nie dotyczy to tylko `actions/github-script`. 
- [ ] Poprzez zapisanie zawartości bloku skryptu w zmiennej środowiskowej `GITHUB_SCRIPT`
> `GITHUB_SCRIPT` nie jest domyślną zmienną środowiskową w GitHub Actions. Lista domyślnych zmiennych środowiskowych znajduje się w [dokumentacji](https://docs.github.com/en/actions/reference/workflows-and-actions/variables)
- [ ] W akcji JavaScript ustawienie klucza `using` na `'github-script'`
> Akcje JavaScript muszą mieć ustawiony klucz `using` na `node*`, gdzie `*` to obsługiwana wersja Node.js. Generalnie, akcje JavaScript nie wymagają użycia `actions/github-script`.
