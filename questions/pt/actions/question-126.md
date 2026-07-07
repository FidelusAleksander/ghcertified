---
question: "Como um trabalho dependente deve referenciar o valor `output1` produzido por um trabalho chamado `job1` anteriormente no mesmo workflow?"
documentation: "https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/pass-job-outputs"
---

- [x] `${{needs.job1.outputs.output1}}`
- [ ] `${{job1.outputs.output1}}`
- [ ] `${{needs.job1.output1}}`
- [ ] `${{depends.job1.output1}}`
