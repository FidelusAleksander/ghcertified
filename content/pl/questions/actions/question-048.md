---
question: "Zadanie o nazwie `job2` wykorzystuje artefakty utworzone w `job1`. W związku z tym ważne jest, aby `job1` zakończyło się przed tym, jak `job2` zacznie szukać artefaktów. Jak należy utworzyć taką zależność?"
title: "Pytanie 048"
---

> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idneeds

1. [x] utwórz tę zależność za pomocą słowa kluczowego `needs` w `job2`
1. [ ] ta zależność jest tworzona automatycznie podczas używania `actions/download-artifact` do pobierania artefaktu z `job1`
1. [ ] utwórz tę zależność, definiując `job2` po `job1` w pliku `.yaml` przepływu pracy
1. [ ] utwórz tę zależność za pomocą słowa kluczowego `concurrency` w `job2`
