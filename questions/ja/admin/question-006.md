---
question: "以下のうち、GitHub Enterprise Serverでサポートバンドルを生成する正しい手順はどれですか？（2つ選択してください。）"
title: "質問 006"
---

> https://docs.github.com/en/enterprise-server@3.15/support/contacting-github-support/providing-data-to-github-support#creating-and-sharing-support-bundles
- [x] GitHub Enterprise Serverインスタンスに移動し、`Site admin`ページを選択してから、`Management Console`を選択します。トップナビゲーションバーの`Support`を選択し、`Download support bundle`をクリックします。
- [x] SSHを使用して、`ghe-support-bundle -o > support-bundle.tgz` CLIコマンドを使用して、サポートバンドルを直接ローカルマシンに生成してダウンロードします。
- [ ] まず、エンタープライズアカウントの`Settings`にアクセスし、`License`をクリックします。そして、`GitHub Enterprise Help`の下で、`Upload a support bundle`を選択します。これにより、サポートバンドルが自動的に生成およびダウンロードされます。
- [ ] プロフィールをクリックしてから`Enterprises`をクリックします。エンタープライズアカウントのサイドバーで`Settings`を選択し、`License`の下にある`Generate a support bundle`をクリックします。これによりバンドルが生成およびダウンロードされます。
