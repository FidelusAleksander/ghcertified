---
question: "GitHub 秘密スキャニングパートナープログラムに新しい秘密パターンが追加または更新された場合の動作は何ですか？"
documentation: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning#accessing-secret-scanning-alerts"
---

- [x] GitHub は、秘密スキャニングが有効になっている公開リポジトリ内のすべての履歴コードコンテンツをスキャンします
- [ ] GitHub は、秘密スキャニングが有効になっているリポジトリ内に新しくプッシュされたコミットでのみ新しいパターンをスキャンします。そのパターンの秘密がすでにリポジトリに存在していても検出されません。
- [ ] GitHub パートナーが過去に漏洩した秘密に対処しなければならず、GitHub は新しいパターンに対して新しいコミットのみをスキャンします
- [ ] GitHub は秘密スキャニングが有効になっているすべてのリポジトリに Issue を作成し、メンテナーがその新しいパターンに一致する秘密があるかを確認できるようにします
