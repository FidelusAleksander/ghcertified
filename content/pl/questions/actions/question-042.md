---
question: "Kiedy powinno się używać `artifacts`? (Wybierz dwie odpowiedzi.)"
title: "Pytanie 042"
---



> https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts#about-workflow-artifacts

- [x] Używaj artifacts, aby zapisać pliki wygenerowane przez zadanie do przeglądania po zakończeniu działania workflow, takie jak wyniki testów lub logi budowy.
- [x] Używaj artifacts, aby zapisać binaria wygenerowane przez zadanie budowy w celu użycia w kolejnym zadaniu wdrażania nowej wersji aplikacji.
- [ ] Używaj artifacts, aby ponownie wykorzystać pliki, które nie zmieniają się często między zadaniami lub uruchomieniami workflow, takie jak zależności budowy z systemu zarządzania pakietami.
> W tym celu należy użyć cache https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#comparing-artifacts-and-dependency-caching
- [ ] Używaj artifacts, aby tworzyć nowe wersje swojej aplikacji wraz z notatkami o wersji, wzmiankami i/lub współtwórcami.
> To jest zastosowanie dla releases, a nie artifacts.
