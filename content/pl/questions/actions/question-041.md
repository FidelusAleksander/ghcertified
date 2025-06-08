---
question: "Kiedy powinieneś używać `keszowania`?"
title: "Pytanie 041"
---



> https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#comparing-artifacts-and-dependency-caching

1. [x] Kiedy chcesz ponownie użyć plików, które nie zmieniają się często między zadaniami lub uruchomieniami przepływów pracy, takich jak zależności budowy z systemu zarządzania pakietami.
1. [ ] Kiedy chcesz ponownie użyć plików, które zmieniają się często między zadaniami lub uruchomieniami przepływów pracy, takich jak zależności budowy z systemu zarządzania pakietami.
1. [ ] Kiedy chcesz zapisać pliki wygenerowane przez zadanie, aby obejrzeć je po zakończeniu uruchomienia przepływu pracy, takie jak zbudowane pliki binarne lub dzienniki budowy.
> W tym celu należy używać artefaktów https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts
1. [ ] Kiedy chcesz zapisać pliki binarne wygenerowane przez zadanie budowy, aby użyć ich w kolejnym zadaniu wdrożenia w celu wdrożenia nowej wersji aplikacji.
> W tym celu należy używać artefaktów https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts
