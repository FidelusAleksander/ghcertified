---
question: "**defaults** を使用する有効なユースケースはどれですか？（2つ選択）"
title: "質問 027"
---

> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#defaults

- [x] Workflowレベルでdefaults.runを使用して、Workflow全体のデフォルトシェル（例: bash）を設定する
- [x] Jobレベルでdefaults.runを使用して、そのJob内のすべてのステップのデフォルト作業ディレクトリを設定する
- [ ] Stepレベルでdefaults.runを使用して、そのステップのみのデフォルトシェル（例: bash）を設定する  
> defaults.runはWorkflowまたはJobレベルでのみ設定可能
- [ ] Workflowレベルでdefaults.envを使用して、Workflow全体のデフォルト環境変数を設定する  
> defaults.envは存在しない
- [ ] Jobレベルでdefaults.envを使用して、そのJob内のすべてのステップのデフォルト環境変数を設定する  
> defaults.envは存在しない