---
question: "Wielokrotnie używany workflow o nazwie `build` tworzy artefakty w postaci plików zip. Jak przekazać lokalizację pliku zip do workflow wywołującego, który wywołuje workflow `build`?"
documentation: "https://docs.github.com/en/actions/using-workflows/reusing-workflows#using-outputs-from-a-reusable-workflow"
---

- [x] Definiujesz dane wyjściowe na poziomie workflow w workflow `build`
- [x] Definiujesz dane wyjściowe na poziomie job w workflow `build`
- [x] W workflow `build` zapisujesz dane wyjściowe do `$GITHUB_OUTPUT` w jednym z kroków
- [ ] Wszystkie dane wyjściowe są automatycznie przekazywane do workflow wywołujących
