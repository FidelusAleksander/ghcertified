---
question: "再利用可能なワークフローを作成しており、その入力として `branch-name` を使用しています。このワークフロー内で、ブランチ名が 'smoke-test' で始まる場合にステップを条件付きで実行するにはどうすればよいですか？"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/expressions#startswith"
---

- [x] 組み込みの `startsWith` メソッドを `jobs.<job_id>.steps[*].if` と組み合わせて使用する
```yaml
    if: startsWith(inputs.branch-name, 'smoke-test')
```

- [ ] 組み込みの `startsWith` メソッドを `jobs.<job_id>.steps[*].if` と組み合わせて使用する
```yaml
    if: inputs.branch-name.startsWith('smoke-test')
``` 
> GitHub Actions の組み込みメソッドではメソッドチェーンを使用することはできません。ほとんどすべての組み込みメソッドは `methodName(arg1,arg2,...)` の形式で記述されます。
- [ ] `workflow_call` の下で `branches` フィルタを使用する
```yaml
on:
  workflow_call:
    branches:
        - 'smoke-test/**'
```
> `workflow_call` イベントトリガーには `branches` フィルタは使用できません。さらに、ワークフローイベントトリガーを使用してステップの実行を制御することはできません。

- [ ] `jobs.<job_id>.steps[*].if` と組み合わせてシェル条件を使用する
```yaml
    if: [[ "${{inputs.branch-name}}" == "smoke-test"* ]]
```
> `jobs.<job_id>.steps[*].if` 条件式では、サポートされている GitHub Actions コンテキストと式しか使用できません。
