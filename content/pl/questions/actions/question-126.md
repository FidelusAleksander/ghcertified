---
title: "Pytanie 126"
question: "W jaki sposób zależne zadanie powinno odwoływać się do wartości `output1` wygenerowanej przez zadanie o nazwie `job1` wcześniej w tym samym przebiegu działania?"
---

> https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/passing-information-between-jobs

1. [x] `${{needs.job1.outputs.output1}}`
1. [ ] `${{job1.outputs.output1}}`
1. [ ] `${{needs.job1.output1}}`
1. [ ] `${{depends.job1.output1}}`
