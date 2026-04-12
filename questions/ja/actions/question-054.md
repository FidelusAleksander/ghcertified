---
question: "カスタムGitHub Actionsを作成する際、すべてのアクション`metadata`を定義する必要があるファイルはどれですか？"
documentation: "https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions"
---

メタデータの例: name、description、outputs、または必須のinputs
- [x] アクションリポジトリ内の`action.yml`または`action.yaml`ファイル
- [ ] リポジトリの`README`ファイル
> それを行うことは良い習慣ですが、アクションが機能するための要件ではありません
- [ ] 公開して共有する際にGitHub Marketplace UIで編集
- [ ] アクションリポジトリ内の`action.yml`または`action.yaml`ファイル。ただし、アクションが公開されて一般に使用されることを目的としていない場合は不要です
> すべてのアクションにはメタデータファイルが必要です。
