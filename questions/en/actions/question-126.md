---
question: "How should a dependent job reference the `output1` value produced by a job named `job1` earlier in the same workflow?"
documentation: "https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/pass-job-outputs"
---

- [x] `${{needs.job1.outputs.output1}}`
- [ ] `${{job1.outputs.output1}}`
- [ ] `${{needs.job1.output1}}`
- [ ] `${{depends.job1.output1}}`
