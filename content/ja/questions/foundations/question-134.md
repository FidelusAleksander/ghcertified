---
title: "質問 134"  
question: "GitHub Secret Scanningを最もよく表している説明はどれですか？"  
draft: false  
---

> **詳細**: [About secret scanning](https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning)

1. [ ] 未検証の認証情報をIssueからスキャンして自動削除する機能。  
  > Secret Scanningは何も自動削除せず、漏洩の可能性があるSecretを検出する。  
1. [ ] Repository SecretをGitHubにPushする前に暗号化する機能。  
  > GitHub ActionsのEncrypted Secretsが暗号化を行うが、これはSecret Scanningとは異なる。  
1. [ ] コード上でサードパーティ製パスワードマネージャーを実行し、Secretを安全に保管する機能。  
1. [x] 既知のSecret形式をRepository内で検索し、機密データの誤露出を防ぐ機能。  
  > **正解**。Secret Scanningはトークンやキーなどの認証情報を検出し、漏洩防止を支援する。