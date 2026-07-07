---
question: "依存ジョブは、同じワークフロー内で前に実行された`job1`によって生成された`output1`値をどのように参照するべきですか？"
documentation: "https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/pass-job-outputs"
---

- [x] `${{needs.job1.outputs.output1}}`
- [ ] `${{job1.outputs.output1}}`
- [ ] `${{needs.job1.output1}}`
- [ ] `${{depends.job1.output1}}`

