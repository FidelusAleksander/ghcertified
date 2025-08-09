---
question: "`Deploy Prod` というWorkflowが常に同時に1つだけ実行されるようにするにはどうしますか？"
title: "質問 028"
---

> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#concurrency

1. [x] Workflowレベルで `concurrency` を使用する
```yaml
concurrency: ${{ github.workflow }}
```
1. [ ] Workflowレベルで `queue` を使用する
```yaml
queue: ${{ github.workflow }}
```
1. [ ] Workflowレベルで `order` を使用する
```yaml
order: ${{ github.workflow }}
```
1. [ ] Workflowレベルで `parallel` を使用する
```yaml
parallel: ${{ github.workflow }}
```