---
question: "ワークフロー `Deploy Prod` が常に同時に1つだけ実行されるようにするにはどうすればよいですか?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#concurrency"
---

- [x] ワークフローレベルで `concurrency` を使用する
```yaml
concurrency: ${{ github.workflow }}
```
- [ ] ワークフローレベルで `queue` を使用する
```yaml
queue: ${{ github.workflow }}
```
- [ ] ワークフローレベルで `order` を使用する
```yaml
order: ${{ github.workflow }}
```
- [ ] ワークフローレベルで `parallel` を使用する
```yaml
parallel: ${{ github.workflow }}
```
