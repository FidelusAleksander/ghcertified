---
question: "48 KBを超えるSecretを保存するための推奨方法はどれですか？"
title: "質問 099"
---

> https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#limits-for-secrets
1. [ ] セキュリティのため、大きなSecretの保存は避ける
1. [ ] 48 KBを超えるSecretは保存できない
1. [x] 暗号化してRepositoryに保存し、復号用パスフレーズはSecretとして保持する
1. [ ] 制限回避のため、大きなSecretを直接Repository Secretsに保存する