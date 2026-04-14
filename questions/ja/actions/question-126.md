---
question: "依存ジョブは同じワークフロー内で以前に `job1` という名前のジョブによって生成された `output1` 値をどのように参照すべきですか？"
documentation: "https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/passing-information-between-jobs"
---

- [x] `${{needs.job1.outputs.output1}}`
- [ ] `${{job1.outputs.output1}}`
- [ ] `${{needs.job1.output1}}`
- [ ] `${{depends.job1.output1}}`
