---
question: "Como um trabalho dependente deve referenciar o valor `output1` produzido por um trabalho chamado `job1` anteriormente no mesmo workflow?"
documentation: "https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/passing-information-between-jobs"
---

- [x] `${{needs.job1.outputs.output1}}`
- [ ] `${{job1.outputs.output1}}`
- [ ] `${{needs.job1.output1}}`
- [ ] `${{depends.job1.output1}}`

