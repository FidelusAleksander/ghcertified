---
title: "Pregunta 126"
question: "¿Cómo debe un trabajo dependiente hacer referencia al valor `output1` producido por un trabajo llamado `job1` anteriormente en el mismo workflow?"
---

> https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/passing-information-between-jobs

1. [x] `${{needs.job1.outputs.output1}}`
1. [ ] `${{job1.outputs.output1}}`
1. [ ] `${{needs.job1.output1}}`
1. [ ] `${{depends.job1.output1}}`
