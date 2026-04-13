---
question: "次のうち、GitHub Enterprise Serverでサポートバンドルを生成する正しい手順はどれですか？"
documentation: "https://docs.github.com/en/enterprise-server@3.15/support/contacting-github-support/providing-data-to-github-support#creating-and-sharing-support-bundles"
---

- [x] GitHub Enterprise Serverインスタンスに移動し、`Site admin`ページを選択してから`Management Console`を選択します。上部ナビゲーションバーで`Support`を選択し、`Download support bundle`をクリックします。
- [x] SSH経由でCLIコマンド`ghe-support-bundle -o > support-bundle.tgz`を使用してサポートバンドルを直接ローカルマシンに生成しダウンロードします。
- [ ] まず、エンタープライズアカウントの`Settings`にアクセスし、`License`をクリックし、`GitHub Enterprise Help`の下で`Upload a support bundle`を選択します。これによりサポートバンドルが自動生成されダウンロードされます。
- [ ] プロフィールをクリックしてから`Enterprises`を選択します。エンタープライズアカウントのサイドバーで`Settings`を選択し、`License`の下で`Generate a support bundle`をクリックします。これによりバンドルが作成され、ダウンロードされます。
