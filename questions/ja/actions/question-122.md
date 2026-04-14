---
question: "ワークフロー内のカスタム変数に定義されたスコープは何ですか？"
documentation: "https://docs.github.com/en/actions/learn-github-actions/variables#defining-environment-variables-for-a-single-workflow"
---

- [x] ワークフロー全体 （ワークフローファイルのトップレベルで `env` を使用）
- [x] ワークフロー内のジョブの内容 （`jobs.<job_id>.env` を使用）
- [x] ジョブ内の特定のステップ （`jobs.<job_id>.steps[*].env` を使用）
- [ ] ワークフロー内のすべてのジョブ （`jobs.env` を使用）
- [ ] ワークフロー全体 （ワークフローファイルのトップレベルで `custom.env` を使用）
- [ ] リポジトリ内の特定の環境 （ワークフローファイルのトップレベルで `environment.<environment_id>.env` を使用）
