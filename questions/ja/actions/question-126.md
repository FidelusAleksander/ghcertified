---
title: "質問 126"
question: "同じWorkflow内で先に実行された`job1`というジョブが生成した`output1`値を依存ジョブが参照するにはどうすればよいですか？"
---

> https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/passing-information-between-jobs

1. [x] `${{needs.job1.outputs.output1}}`
1. [ ] `${{job1.outputs.output1}}`
1. [ ] `${{needs.job1.output1}}`
1. [ ] `${{depends.job1.output1}}`