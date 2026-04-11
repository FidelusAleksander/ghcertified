---
title: "Question 126"
question: "How should a dependent job reference the `output1` value produced by a job named `job1` earlier in the same workflow?"
---

> https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/passing-information-between-jobs

- [x] `${{needs.job1.outputs.output1}}`
- [ ] `${{job1.outputs.output1}}`
- [ ] `${{needs.job1.output1}}`
- [ ] `${{depends.job1.output1}}`
