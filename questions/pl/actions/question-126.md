---
question: "Jak powinna zależna praca odwoływać się do wartości `output1`, wygenerowanej przez pracę o nazwie `job1` wcześniej w tym samym workflow?"
documentation: "https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/passing-information-between-jobs"
---

- [x] `${{needs.job1.outputs.output1}}`
- [ ] `${{job1.outputs.output1}}`
- [ ] `${{needs.job1.output1}}`
- [ ] `${{depends.job1.output1}}`
