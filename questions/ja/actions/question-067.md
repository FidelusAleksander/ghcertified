---
question: "構成変数 `MY_VAR` が `MY_VALUE` の値を持つ場合のみジョブをトリガーする正しい方法はどれですか？"
documentation: "https://docs.github.com/en/actions/learn-github-actions/contexts#example-usage-of-the-vars-context"
---

- [x] 次の条件文をジョブレベルで作成する
```yaml
my-job:
  if: ${{ vars.MY_VAR == 'MY_VALUE' }}
```
- [ ] 次の条件文をジョブレベルで作成する
```yaml
my-job:
  if: ${{ vars.MY_VAR }} == 'MY_VALUE'
```
> これは常に True と評価されます
- [ ] 構成変数は `if` 条件で使用できないため不可能です
> これは `secrets` に対しては正しいですが、構成変数ではありません
- [ ] 構成変数はジョブレベルの `if` 条件で使用できないため不可能です
> これは `secrets` に対しては正しいですが、構成変数ではありません
