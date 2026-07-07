---
question: "¿Cómo debería un trabajo dependiente referenciar el valor `output1` producido por un trabajo llamado `job1` anteriormente en el mismo flujo de trabajo?"
documentation: "https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/pass-job-outputs"
---

- [x] `${{needs.job1.outputs.output1}}`
- [ ] `${{job1.outputs.output1}}`
- [ ] `${{needs.job1.output1}}`
- [ ] `${{depends.job1.output1}}`
