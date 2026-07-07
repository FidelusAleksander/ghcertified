---
question: "W jaki sposób zależne zadanie powinno odwoływać się do wartości `output1` wygenerowanej przez zadanie o nazwie `job1` wcześniej w tym samym workflow?"
documentation: "https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/pass-job-outputs"
---

- [x] `${{needs.job1.outputs.output1}}`
- [ ] `${{job1.outputs.output1}}`
- [ ] `${{needs.job1.output1}}`
- [ ] `${{depends.job1.output1}}`

