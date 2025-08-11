---
title: "質問 108"
question: "GitHub認証で標準的なユーザー名とパスワードの代わりにPersonal Access Token（PAT）を使用する主な利点の1つは何ですか？"
---


> https://learn.microsoft.com/en-us/training/modules/github-introduction-administration/3-how-github-authentication-works
1. [ ] PATはOrganizationやEnterpriseによって管理できる
> PATはその名の通り個人用。OrganizationやEnterpriseはLDAP、SAML、SSHキーなど他の認証手段を管理できる
1. [ ] PATはWebサイトやアプリにログインする際の追加認証層。ユーザー名とパスワードに加え、ユーザーだけが持つ別の認証を要求する
> これは多要素認証や二要素認証の説明
1. [x] PATはGitHub APIやコマンドラインを使用する際の認証に使える。ユーザーはGitHubの設定からトークンを生成し、その権限をRepositoryやOrganizationに紐付けることができる
1. [ ] PATは既存アカウントでGitHub Enterprise Serverを認証し、Repositoryアクセスを一元管理できる
> これはPATではなくLDAPの利点の説明