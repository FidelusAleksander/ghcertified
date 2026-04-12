---
question: "48KBを超える秘密情報を保存するための推奨されるアプローチは何ですか？"
documentation: "https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#limits-for-secrets"
---

- [ ] セキュリティを確保するために大きな秘密情報を完全に保存しない
- [ ] 48KBを超える秘密情報は保存できない
- [x] 秘密情報をリポジトリ内で暗号化して保存し、復号化のパスフレーズを秘密として保持する
- [ ] 制限を回避するため、大きな秘密情報をリポジトリのシークレットとして直接保存する
