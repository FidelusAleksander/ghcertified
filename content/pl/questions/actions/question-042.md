---
question: "Kiedy powinieneś używać `artifacts`? (Wybierz dwie.)"
title: "Pytanie 042"
---



> https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts#about-workflow-artifacts

- [x] Użyj artifacts, aby zapisać pliki wygenerowane przez zadanie, które można obejrzeć po zakończeniu działania workflow, takie jak wyniki testów lub logi kompilacji.
- [x] Użyj artifacts, aby zapisać pliki binarne wygenerowane przez zadanie kompilacji, które będą wykorzystane w kolejnym zadaniu wdrożeniowym w celu wdrożenia nowej wersji aplikacji.
- [ ] Użyj artifacts, aby ponownie wykorzystywać pliki, które nie zmieniają się często pomiędzy zadaniami lub uruchomieniami workflow, takie jak zależności kompilacji z systemu zarządzania pakietami.
> Do tego celu powinno być używane caching https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#comparing-artifacts-and-dependency-caching
- [ ] Użyj artifacts, aby tworzyć nowe wersje swojej aplikacji wraz z release notes, wzmianek i/lub współtwórców.
> To jest przypadek użycia dla releases, a nie artifacts.
