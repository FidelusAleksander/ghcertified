---
question: "`GITHUB_TOKEN` は任意のリポジトリをチェックアウトするために使用できます。"
documentation: "https://docs.github.com/en/actions/concepts/security/github_token#about-the-github_token"
---

- [ ] 正しい
- [ ] 権限を昇格させた場合のみ
- [x] 誤り
> `GITHUB_TOKEN` の権限は、トリガーされたWorkflowを含むリポジトリにスコープされています。  
> 他のリポジトリをチェックアウトするには、個人アクセストークン（PAT）やインストールアクセストークンなどの他のトークンを使用する必要があります。
