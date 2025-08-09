---
title: "質問 122"
question: "Workflowで定義されたカスタム変数のスコープはどれですか？（3つ選択してください）"
---

> https://docs.github.com/en/actions/learn-github-actions/variables#defining-environment-variables-for-a-single-workflow
- [x] Workflowファイルのトップレベルで`env`を使用してWorkflow全体
- [x] Workflow内のジョブ内容で`jobs.<job_id>.env`を使用
- [x] ジョブ内の特定のステップで`jobs.<job_id>.steps[*].env`を使用
- [ ] Workflow内のすべてのジョブで`jobs.env`を使用
- [ ] Workflowファイルのトップレベルで`custom.env`を使用してWorkflow全体
- [ ] Workflowファイルのトップレベルで`environment.<environment_id>.env`を使用してRepository内の特定の環境