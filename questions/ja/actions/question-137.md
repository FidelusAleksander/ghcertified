---
question: "以下のマトリックスでは、いくつのジョブが実行されますか？"
documentation: "https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/run-job-variations#expanding-or-adding-matrix-configurations"
---

```yaml
jobs:
  test_deploy:
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest]
        version: [1, 2]
        include:
            - comment-color: "green"
            - error-color: "red"
            - os: "ubuntu-latest"
              comment-color: "blue"
            - os: "macos-latest"
              comment-color: "yellow"
```

- [x] 5
> このマトリックスでは、以下のマトリックスの組み合わせにより5つのジョブが作成されます:

> `os:ubuntu-latest,version:1,comment-color:blue,error-color:red` 

> `os:ubuntu-latest,version:2,comment-color:blue,error-color:red` 

> `os:windows-latest,version:1,comment-color:green,error-color:red` 

> `os:windows-latest,version:2,comment-color:green,error-color:red` 

> `os:macos-latest,comment-color:yellow` 

> `strategy.matrix` で定義されていない `include` キーは、既存の構成を上書きしない限りジョブ構成に追加できます。 `strategy.matrix` にすでに存在する `include` キーは、新しい値を持つ場合、新しいジョブを生成します。

- [ ] 6
- [ ] 7
- [ ] 10
