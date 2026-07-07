---
question: "Kiedy powinieneś używać `caching`?"
documentation: "https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#comparing-artifacts-and-dependency-caching"
---

- [x] Kiedy chcesz ponownie użyć plików, które nie zmieniają się często między zadaniami lub uruchomieniami przepływu pracy, takich jak zależności kompilacji z systemu zarządzania pakietami.
- [ ] Kiedy chcesz ponownie użyć plików, które zmieniają się często między zadaniami lub uruchomieniami przepływu pracy, takich jak zależności kompilacji z systemu zarządzania pakietami.
- [ ] Kiedy chcesz zapisać pliki wygenerowane przez zadanie, aby je przejrzeć po zakończeniu uruchomienia przepływu pracy, takie jak skompilowane pliki binarne lub logi z kompilacji.
> Do tego należy używać artifacts https://docs.github.com/en/actions/tutorials/store-and-share-data
- [ ] Kiedy chcesz zapisać pliki binarne wygenerowane przez zadanie kompilacji, aby użyć ich w kolejnym zadaniu wdrażania do wdrożenia nowej wersji aplikacji.
> Do tego należy używać artifacts https://docs.github.com/en/actions/tutorials/store-and-share-data
