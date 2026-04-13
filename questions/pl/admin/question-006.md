---
question: "Która z poniższych procedur jest poprawna dla wygenerowania pakietu wsparcia w GitHub Enterprise Server?"
documentation: "https://docs.github.com/en/enterprise-server@3.15/support/contacting-github-support/providing-data-to-github-support#creating-and-sharing-support-bundles"
---

- [x] Przejdź do instancji GitHub Enterprise Server, wybierz stronę `Site admin`, następnie `Management Console`. Wybierz `Support` na górnym pasku nawigacyjnym i kliknij `Download support bundle`.
- [x] Wygeneruj i pobierz pakiet wsparcia bezpośrednio na lokalny komputer za pomocą SSH używając polecenia CLI `ghe-support-bundle -o > support-bundle.tgz`.
- [ ] Najpierw uzyskaj dostęp do `Settings` w swoim koncie Enterprise, kliknij na `License`, a pod `GitHub Enterprise Help` wybierz `Upload a support bundle`. To automatycznie wygeneruje i pobierze pakiet wsparcia.
- [ ] Kliknij swój profil, następnie `Enterprises`. W pasku bocznym konta Enterprise wybierz `Settings`, a pod `License` kliknij `Generate a support bundle`. To stworzy i pobierze pakiet.
