---
question: "Secret `MY_SECRET` が設定されている場合にのみ `step` を実行するにはどうしますか？"
title: "質問 068"
---

> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#example-using-secrets
1. [x] Secret `MY_SECRET` をJobレベルの環境変数として設定し、その環境変数を参照して条件付きでStepを実行する
```yaml
  my-job:
    runs-on: ubuntu-latest
    env:
      my_secret: ${{ secrets.MY_SECRET }}
    steps:
      - if: ${{ env.my_secret != '' }}
```
1. [ ] Jobレベルで次の条件を作成する
```yaml
  my-job:
    runs-on: ubuntu-latest
    if: ${{ secrets.MY_SECRET == '' }}
```
> secretsは`if:`条件式で直接参照できない
1. [ ] Stepレベルで次の条件を作成する
```yaml
  my-job:
    runs-on: ubuntu-latest
    steps:
      - if: ${{ secrets.MY_SECRET == '' }}
```
> secretsは`if:`条件式で直接参照できない
1. [ ] Stepレベルで次の条件を作成する
```yaml
  my-job:
    runs-on: ubuntu-latest
    steps:
      - if: ${{ secrets.MY_SECRET }}
```
> secretsは`if:`条件式で直接参照できない