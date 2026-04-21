---
question: "ジョブをトリガーする際、設定変数 `MY_VAR` が値 `MY_VALUE` を持つ場合のみ実行されるようにする正しい方法はどれですか？"
documentation: "https://docs.github.com/en/actions/learn-github-actions/contexts#example-usage-of-the-vars-context"
---

- [x] 以下の条件をジョブレベルに作成する
```yaml
my-job:
  if: ${{ vars.MY_VAR == 'MY_VALUE' }}
```
- [ ] 以下の条件をジョブレベルに作成する
```yaml
my-job:
  if: ${{ vars.MY_VAR }} == 'MY_VALUE'
```
> 不正解です。`${{ }}`内では `vars.MY_VAR` のみが評価されます。これにより、`some_value == 'MY_VALUE'` のようなテキストが生成され、GitHub はこの非空文字列を真として処理し、比較を実行しません。
> 詳細は https://docs.github.com/en/actions/reference/workflows-and-actions/expressions#literals を参照してください。
- [ ] 設定変数は `if` 条件式で使用できないため、不可能です。
> これは `secrets` に当てはまりますが、設定変数には当てはまりません。
- [ ] 設定変数はジョブレベルの `if` 条件式で使用できないため、不可能です。
> これは `secrets` に当てはまりますが、設定変数には当てはまりません。
