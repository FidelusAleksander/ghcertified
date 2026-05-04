---
question: "Jak uruchomić niestandardowe skrypty JavaScript bezpośrednio w workflow GitHub Actions?"
documentation: "https://github.com/marketplace/actions/github-script"
---

- [x] Za pomocą akcji `actions/github-script`
> `actions/github-script` pozwala pisać i wykorzystywać wewnętrzny kod JavaScript do wykonywania wywołań API i uzyskiwania dostępu do kontekstu workflow. Aby użyć `actions/github-script`, należy ją wywołać jak każdą inną akcję, jak opisano w [dokumentacji](https://github.com/actions/github-script).
- [ ] Włączając konfigurację 'Allow custom JavaScript scripts' w ustawieniach Actions repozytorium
> W ustawieniach Actions repozytorium nie ma konfiguracji 'Allow custom JavaScript scripts'.
- [ ] Włączając konfigurację 'Allow custom JavaScript scripts' w ustawieniach Actions organizacji
> W ustawieniach Actions repozytorium nie ma konfiguracji 'Allow custom JavaScript scripts'. Może być konieczne włączenie ustawień, takich jak 'Allow actions created by Github', w ustawieniach Actions organizacji, aby korzystać z oficjalnych akcji Github, ale nie dotyczy to wyłącznie `actions/github-script`.
- [ ] Zapisując zawartość bloku skryptu w zmiennej środowiskowej `GITHUB_SCRIPT`
> `GITHUB_SCRIPT` nie jest domyślną zmienną środowiskową w GitHub Actions. Listę domyślnych zmiennych środowiskowych można znaleźć w [dokumentacji](https://docs.github.com/en/actions/reference/workflows-and-actions/variables).
- [ ] W akcji JavaScript ustawiając klucz `using` na `'github-script'`
> Akcje JavaScript muszą mieć klucz `using` ustawiony na `node*`, gdzie * to obsługiwana wersja Node.js. Ogólnie rzecz biorąc, akcje JavaScript nie wymagają użycia `actions/github-script`.
