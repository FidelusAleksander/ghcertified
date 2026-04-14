---
question: "次の例では、`workflow A` が `inherit` キーワードを使用してすべてのシークレットを`workflow B`に渡しています。その後、`workflow B` が `workflow C` を呼び出します。この例における `secrets` に関する記述のうち、正しいものはどれですか？"
documentation: "https://docs.github.com/en/actions/using-workflows/reusing-workflows#passing-secrets-to-nested-workflows"
---

```yaml
jobs:
  workflowA-calls-workflowB:
    uses: octo-org/example-repo/.github/workflows/B.yml@main
    secrets: inherit
```

```yaml
jobs:
  workflowB-calls-workflowC:
    uses: different-org/example-repo/.github/workflows/C.yml@main
```
- [x] `workflow A` に利用可能なすべてのシークレットは `workflow B` にも利用可能になりますが、`workflow C` には利用可能になりません。
- [ ] `octo-org` 組織および `octo-org/example-repo` リポジトリのすべてのシークレットは `workflow B` に利用可能になりますが、`workflow C` には利用可能になりません。
> `octo-org` 組織のすべてのシークレットが`octo-org/example-repo` に利用可能である必要はありません。
- [ ] `workflow A` に利用可能なすべてのシークレットは、`workflow B` および `workflow C` にも利用可能になります。
> `workflow B` が `workflow C` を呼び出す際に `secrets: inherit` を追加する必要があります。
- [ ] リポジトリおよび環境のシークレットのみが `workflow A` に利用可能で、`workflow B` にも利用可能になりますが、`workflow C` には利用可能になりません。組織スコープのシークレットは継承できません。
