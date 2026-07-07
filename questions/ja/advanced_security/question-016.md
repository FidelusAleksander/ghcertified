---
question: "GitHub 秘密スキャニングパートナープログラムで新しい秘密パターンが追加または更新された場合の挙動は何ですか?"
documentation: "https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning#accessing-secret-scanning-alerts"
---

- [x] GitHub は、秘密スキャニングが有効になっている公開リポジトリ内のすべての履歴コードコンテンツをスキャンします
- [ ] GitHub は、秘密スキャニングが有効になっているリポジトリ内の新たにプッシュされたコミットでのみ新しいパターンをスキャンします。そのパターンの秘密がすでにリポジトリに存在している場合、それは検出されません。
- [ ] GitHub パートナーが履歴的に漏洩した秘密を扱い、GitHub は新しいパターンに対して新しいコミットのみをスキャンします
- [ ] GitHub は、秘密スキャニングが有効になっているすべてのリポジトリに issue を作成し、リポジトリメンテナーが新しいパターンに一致する秘密をチェックできるようにします
