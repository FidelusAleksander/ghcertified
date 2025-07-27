---
question: "Podległy workflow o nazwie `build` tworzy artefakty zip. Jak przekazać lokalizację pliku zip do workflow wywołującego, który uruchamia workflow `build`? (Wybierz trzy.)"
title: "Pytanie 026"
---

> https://docs.github.com/en/actions/using-workflows/reusing-workflows#using-outputs-from-a-reusable-workflow

- [x] Definiujesz output na poziomie workflow w workflow `build`
- [x] Definiujesz output na poziomie zadania (job) w workflow `build`
- [x] W workflow `build` zapisujesz output do `$GITHUB_OUTPUT` w jednym z kroków
- [ ] Wszystkie outputy są automatycznie przekazywane do workflow wywołujących
