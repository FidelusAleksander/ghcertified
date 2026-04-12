---
question: "¿Cómo debe un trabajo dependiente referenciar el valor `output1` producido por un trabajo llamado `job1` anteriormente en el mismo flujo de trabajo?"
documentation: "https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/passing-information-between-jobs"
---

- [x] `${{needs.job1.outputs.output1}}`
- [ ] `${{job1.outputs.output1}}`
- [ ] `${{needs.job1.output1}}`
- [ ] `${{depends.job1.output1}}`
