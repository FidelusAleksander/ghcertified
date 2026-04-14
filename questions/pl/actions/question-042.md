---
question: "Kiedy należy używać `artifacts`?"
documentation: "https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts#about-workflow-artifacts"
---

- [x] Używaj artifacts, aby zapisać pliki wygenerowane przez zadanie do przeglądania po zakończeniu uruchamiania workflow, takie jak wyniki testów lub logi budowy.
- [x] Używaj artifacts, aby zapisać binaria wygenerowane przez zadanie budowy do wykorzystania w kolejnym zadaniu wdrożeniowym w celu wdrożenia nowej wersji aplikacji.
- [ ] Używaj artifacts, aby ponownie używać plików, które nie zmieniają się często między zadaniami lub uruchomieniami workflow, takich jak zależności budowy z systemu zarządzania pakietami.
> Do tego celu należy używać caching https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#comparing-artifacts-and-dependency-caching
- [ ] Używaj artifacts, aby tworzyć nowe wersje aplikacji razem z notatkami wydawniczymi, wzmiankami i/lub współtwórcami.
> Jest to przypadek użycia dla releases, a nie artifacts
