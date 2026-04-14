---
question: "あなたのOrganizationでは、シークレット `SomeSecret` を定義していますが、そのシークレットを `${{ secrets.SomeSecret }}` を使用してワークフローで参照すると、予期しない値が返されます。その理由として考えられるものは何ですか？"
documentation: "https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#naming-your-secrets"
---

- [x] シークレット `SomeSecret` がリポジトリスコープでも宣言されています
- [ ] シークレット `SomeSecret` がエンタープライズスコープでも宣言されています
> 同じ名前のシークレットが複数のレベルで存在する場合、最も低いレベルのシークレットが優先されます。
- [ ] `${{ secrets.SomeSecret }}` 式はリポジトリスコープのシークレットでのみ使用されます
- [ ] OrganizationスコープのシークレットにアクセスするにはGitHub APIを使用する必要があります
