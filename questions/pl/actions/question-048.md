---
question: "Praca o nazwie `job2` korzysta z artefaktów stworzonych w `job1`. Dlatego ważne jest, aby upewnić się, że `job1` kończy się zanim `job2` zacznie szukać artefaktów. Jak należy stworzyć tę zależność?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idneeds"
---

- [x] utwórz tę zależność za pomocą słowa kluczowego `needs` w `job2`
- [ ] ta zależność jest tworzona domyślnie podczas używania `actions/download-artifact` do pobierania artefaktów z `job1`
- [ ] utwórz tę zależność, definiując `job2` po `job1` w definicji pliku `.yaml` workflow
- [ ] utwórz tę zależność za pomocą słowa kluczowego `concurrency` w `job2`
