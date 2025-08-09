---
question: "GitHub Enterprise Serverでサポートバンドルを生成する正しい手順はどれですか？（2つ選択してください）"
title: "質問 006"
---

> https://docs.github.com/en/enterprise-server@3.15/support/contacting-github-support/providing-data-to-github-support#creating-and-sharing-support-bundles
- [x] GitHub Enterprise Serverインスタンスにアクセスし、`Site admin` ページから `Management Console` を選択。上部ナビゲーションバーの `Support` を選び、`Download support bundle` をクリックする
- [x] SSH経由で`ghe-support-bundle -o > support-bundle.tgz` CLIコマンドを使い、ローカルマシンにサポートバンドルを生成・ダウンロードする
- [ ] Enterpriseアカウントの`Settings`で`License`をクリックし、`GitHub Enterprise Help`の下で`Upload a support bundle`を選択して自動生成・ダウンロードする
- [ ] プロフィールから`Your enterprises`を選び、エンタープライズアカウントのサイドバーで`Settings`→`License`→`Generate a support bundle`をクリックしてバンドルを作成・ダウンロードする