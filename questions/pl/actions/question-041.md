---
question: "Kiedy należy używać `caching`?"
documentation: "https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#comparing-artifacts-and-dependency-caching"
---

- [x] Gdy chcesz ponownie użyć plików, które nie zmieniają się często między zadaniami lub uruchomieniami przepływów pracy, takich jak zależności kompilacji z systemu zarządzania pakietami.
- [ ] Gdy chcesz ponownie użyć plików, które często zmieniają się między zadaniami lub uruchomieniami przepływów pracy, takich jak zależności kompilacji z systemu zarządzania pakietami.
- [ ] Gdy chcesz zapisać pliki wytworzone przez zadanie do obejrzenia po zakończeniu przepływu pracy, takie jak skompilowane binaria lub logi kompilacji.
> W tym celu należy używać Artifacts https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts
- [ ] Gdy chcesz zapisać binaria wytworzone przez zadanie kompilacji do użycia w następnym zadaniu wdrożeniowym, aby wdrożyć nową wersję aplikacji.
> W tym celu należy używać Artifacts https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts
