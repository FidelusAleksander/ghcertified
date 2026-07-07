---
question: "カスタムGitHub Actionsを作成する際、すべてのアクション`metadata`をどのファイルに定義する必要がありますか？"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax"
---

Metadataの例：name、description、outputsまたはrequired inputs
- [x] アクションリポジトリ内の`action.yml`または`action.yaml`ファイル
- [ ] リポジトリの`README`ファイル内
> それを行うのは推奨されていますが、アクションが動作するための必須条件ではありません
- [ ] 公開して共有する際にGitHub Marketplace UIで編集される
- [ ] アクションリポジトリ内の`action.yml`または`action.yaml`ファイル、ただし公開して一般に使用されることを意図していない場合は必須ではありません
> すべてのアクションにはmetadataファイルが必要です。
