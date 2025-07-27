---
question: "Zadanie o nazwie `job2` używa artefaktów utworzonych w `job1`. Dlatego ważne jest, aby upewnić się, że `job1` zakończy się przed rozpoczęciem poszukiwania artefaktów przez `job2`. Jak należy utworzyć tę zależność?"
title: "Pytanie 048"
---


> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idneeds

1. [x] utwórz tę zależność, używając słowa kluczowego `needs` w `job2`
1. [ ] ta zależność jest tworzona automatycznie podczas użycia `actions/download-artifact` do pobrania artefaktu z `job1`
1. [ ] utwórz tę zależność, definiując `job2` po `job1` w definicji workflow `.yaml`
1. [ ] utwórz tę zależność, używając słowa kluczowego `concurrency` w `job2`
