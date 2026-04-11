---
question: "次の例では、`workflow A` が inherit キーワードを使ってすべてのsecretsを `workflow B` に渡しています。その後、`workflow B` が `workflow C` を呼び出します。この例における `secrets` に関する正しい記述はどれですか？"
title: "質問 040"
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
> https://docs.github.com/en/actions/using-workflows/reusing-workflows#passing-secrets-to-nested-workflows
1. [x] `workflow A` で利用可能なすべてのsecretsは `workflow B` でも利用可能だが、`workflow C` では利用できない
1. [ ] `octo-org` Organizationおよび `octo-org/example-repo` Repositoryのすべてのsecretsは `workflow B` で利用可能だが、`workflow C` では利用できない  
> `octo-org` Organizationのすべてのsecretsを`octo-org/example-repo`に公開する必要はない
1. [ ] `workflow A` で利用可能なすべてのsecretsは `workflow B` および `workflow C` でも利用可能である  
> `workflow B` が `workflow C` を呼び出す際に `secrets: inherit` を追加する必要がある
1. [ ] `workflow A` で利用可能なRepositoryおよびEnvironmentのsecretsのみが `workflow B` で利用可能で、`workflow C` では利用できない。Organizationスコープのsecretsは継承できない