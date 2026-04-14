---
question: "GitHub認証において、標準的なユーザー名とパスワードの代わりにPersonal Access Token (PAT) を使用する主な利点の1つは何ですか？"
documentation: "https://learn.microsoft.com/en-us/training/modules/github-introduction-administration/3-how-github-authentication-works"
---

- [ ] PATは、OrganizationやEnterpriseによって管理することができる。
> PATはその名の通り個人的なものであり、OrganizationやEnterpriseは、LDAP、SAML、SSHキーなどの他の認証形式を管理することができます。
- [ ] PATは、ウェブサイトやアプリにログインする際に使用する追加のセキュリティ層です。PATを使用すると、ユーザーはユーザー名とパスワードでサインインしたうえで、さらに自身しかアクセスできない認証手段を提供する必要があります。
> これは多要素認証または二要素認証の説明です。
- [x] PATは、GitHub APIやコマンドラインを使用したGitHubの認証に使用できます。ユーザーはGitHubの設定オプションからトークンを生成し、RepositoryまたはOrganizationにトークンの権限を関連付けます。
- [ ] PATを使用すると、既存のアカウントに対してGitHub Enterprise Serverを認証し、Repositoryのアクセスを集中管理できます。
> これはLDAPのGitHubにおける利点についての説明であり、PATに関するものではありません。
