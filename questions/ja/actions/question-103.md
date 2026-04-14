---
question: "GitHub Actionsで、branchesフィルターとpathsフィルターの両方を定義した場合、ワークフローの実行にどのような影響がありますか？"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore"
---

- [x] ワークフローは`branches`と`paths`の両方が満たされた場合にのみ実行されます
- [ ] ワークフローは`branches`または`paths`のいずれかが満たされた場合に実行されますが、一致するフィルターのみに適用されます
- [ ] ワークフローは`branches`または`paths`のいずれかが満たされた場合に実行されます
- [ ] ワークフローは`branches`と`paths`の両方が満たされた場合には実行されません
