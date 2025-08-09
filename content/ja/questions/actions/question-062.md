---
question: "Organizationで定義されたSecret `SomeSecret` を`${{ secrets.SomeSecret }}`で参照したところ、予想と異なる値が返されました。考えられる理由は何ですか？"
title: "質問 062"
---

> https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#naming-your-secrets
1. [x] 同名のSecret `SomeSecret` がRepositoryスコープでも定義されている
1. [ ] 同名のSecret `SomeSecret` がEnterpriseスコープでも定義されている  
> 同じ名前のSecretが複数のレベルに存在する場合、最も低いレベルのSecretが優先される
1. [ ] `${{ secrets.SomeSecret }}` 式はRepositoryスコープのSecret専用である
1. [ ] OrganizationスコープのSecretにアクセスするにはGitHub APIを使用する必要がある