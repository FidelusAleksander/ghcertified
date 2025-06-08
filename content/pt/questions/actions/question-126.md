---
title: "Pergunta 126"
question: "Como um job dependente deve referenciar o valor `output1` produzido por um job chamado `job1` anteriormente no mesmo workflow?"
---

> https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/passing-information-between-jobs

1. [x] `${{needs.job1.outputs.output1}}`
1. [ ] `${{job1.outputs.output1}}`
1. [ ] `${{needs.job1.output1}}`
1. [ ] `${{depends.job1.output1}}`
