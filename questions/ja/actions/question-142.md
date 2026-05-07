---
question: "次の回答のうち、インストールアクセス・トークンに関して正しい内容はどれですか？"
documentation: "https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-as-a-github-app-installation#using-an-installation-access-token-to-authenticate-as-an-app-installation"
---

- [x] インストールアクセス・トークンは自動化作業に適した短期間有効なトークンですが、GitHub Appの設定が必要です。
- [x] `GITHUB_TOKEN`はインストールアクセス・トークンの一種です。
> `GITHUB_TOKEN`は、各ワークフロー実行時に自動生成されるGitHub Appインストールアクセス・トークンです。詳細は[ドキュメント](https://docs.github.com/en/actions/concepts/security/github_token)をご覧ください。
- [x] `actions/create-github-app-token`はワークフロー内で呼び出すことができ、すぐに使用可能なインストールアクセス・トークンを作成します。
- [ ] `actions/create-github-app-token`はワークフロー内で呼び出すことができ、インストールアクセス・トークンを作成しますが、そのトークンはワークフローの将来の実行でのみ使用できます。
> 作成されたインストールアクセス・トークンはすぐに使用可能です。このアクションの公式ページ（[こちら](https://github.com/actions/create-github-app-token)）で詳細をご確認ください。
- [ ] インストールアクセス・トークンは、関連付けられたGitHub Appに代わって動作するように設定することはできません。
> インストールアクセス・トークンは、多くの場合、関連付けられたGitHub Appに代わって動作するように設定されます。これは自動化された活動の監査に役立つことがあります。
