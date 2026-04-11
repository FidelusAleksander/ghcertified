---
question: "構成変数(Configuration Variables)  `MY_VAR` が `MY_VALUE` の値を持つ場合のみJobをトリガーする正しい方法はどれですか？"
title: "質問 067"
---

> https://docs.github.com/en/actions/learn-github-actions/contexts#example-usage-of-the-vars-context
1. [x] Jobレベルで次の条件を作成する
```yaml
  my-job:
    if: ${{ vars.MY_VAR == 'MY_VALUE' }}
```
1. [ ] Jobレベルで次の条件を作成する
```yaml
  my-job:
    if: ${{ vars.MY_VAR }} == 'MY_VALUE'
```
> これは常にTrueと評価される
1. [ ] 構成変数は`if`条件式で使用できないため不可能  
> これは`secrets`に関しては正しいが、構成変数には当てはまらない
1. [ ] 構成変数はJobレベルの`if`条件式で使用できないため不可能  
> これは`secrets`に関しては正しいが、構成変数には当てはまらない