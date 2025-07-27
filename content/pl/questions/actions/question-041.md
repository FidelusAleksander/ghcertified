---
question: "Kiedy powinieneś używać `caching`?"
title: "Pytanie 041"
---



> https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#comparing-artifacts-and-dependency-caching

1. [x] Gdy chcesz ponownie użyć plików, które nie zmieniają się często pomiędzy zadaniami lub uruchomieniami workflow, takich jak zależności budowania z systemu zarządzania pakietami.
1. [ ] Gdy chcesz ponownie użyć plików, które zmieniają się często pomiędzy zadaniami lub uruchomieniami workflow, takich jak zależności budowania z systemu zarządzania pakietami.
1. [ ] Gdy chcesz zapisać pliki wygenerowane przez zadanie, aby móc je zobaczyć po zakończeniu uruchomienia workflow, takie jak zbudowane pliki binarne lub dzienniki budowania.
> Do tego celu należy używać artefaktów https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts
1. [ ] Gdy chcesz zapisać pliki binarne wygenerowane przez zadanie budowania, aby użyć ich w kolejnym zadaniu wdrożeniowym do wdrożenia nowej wersji aplikacji.
> Do tego celu należy używać artefaktów https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts
