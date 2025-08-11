---
title: "質問 015"
question: "GitHubのPersonal Access Tokenを誤ってパブリックリポジトリにコミットしてしまいました。アカウントの乗っ取りを防ぐために取るべき行動は？"
---


> https://docs.github.com/en/code-security/secret-scanning/managing-alerts-from-secret-scanning#securing-compromised-secrets
1. [x] トークンは漏洩したと見なし、即座に削除する
1. [ ] トークンの権限を読み取り専用に変更する
1. [ ] トークンを覆い隠すためにgit履歴を書き換える
1. [ ] そのトークンが使用されているアプリケーションがあれば確認して削除する