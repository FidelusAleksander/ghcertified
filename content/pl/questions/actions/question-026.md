---
question: "Wielokrotnie używany przepływ pracy o nazwie `build` tworzy artefakty w postaci plików zip. Jak przekazać lokalizację pliku zip do wywołującego przepływu pracy, który wywołuje przepływ `build`? (Wybierz trzy.)"
title: "Pytanie 026"
---

> https://docs.github.com/en/actions/using-workflows/reusing-workflows#using-outputs-from-a-reusable-workflow

- [x] Definiujesz wynik na poziomie przepływu pracy w przepływie `build`
- [x] Definiujesz wynik na poziomie zadania w przepływie `build`
- [x] W przepływie `build` zapisujesz wynik do `$GITHUB_OUTPUT` w jednym z kroków
- [ ] Wszystkie wyniki są automatycznie przekazywane do wywołujących przepływów pracy
