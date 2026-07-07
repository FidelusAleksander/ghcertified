---
question: "次のうち、GitHub secret scanning を最もよく説明しているのはどれですか？"  
draft: false  
documentation: "https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning"
---

- [ ] 検証されていない認証情報の Issue をスキャンし、自動的に削除する機能。  
> Secret scanning は何も自動的に削除しませんが、漏洩の可能性があるシークレットを検出します。  
- [ ] リポジトリのシークレットを GitHub にプッシュする前に暗号化する機能。  
> GitHub Actions Encrypted Secrets は暗号化を取り扱いますが、これは secret scanning とは異なります。  
- [ ] コード上でサードパーティのパスワードマネージャーを実行してシークレットを安全に保存する機能。  
- [x] 機密データの偶発的な露出を防ぐために、既知のシークレット形式をリポジトリ内で検索する機能。  
> **正解**。Secret scanning はトークン、キー、その他の認証情報を検出し、漏洩を防ぐのに役立ちます。  
