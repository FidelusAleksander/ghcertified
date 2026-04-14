---
question: "特定のディレクトリやファイルをSecret Scanningから除外するにはどうすればよいですか？"
documentation: "https://docs.github.com/en/code-security/secret-scanning/configuring-secret-scanning-for-your-repositories#excluding-directories-from-secret-scanning-alerts-for-users"
---

- [x] `secret_scanning.yml`ファイルを作成し、スキャン対象外とするパスを含める
- [ ] 特定のファイルやディレクトリをスキャン対象から除外することはできません。リポジトリでSecret Scanningを有効にすると、すべてのファイルとディレクトリがスキャンされます。
- [ ] これらのファイルを`.gitignore`ファイルに含める
- [ ] `dependabot.yml`ファイルを作成し、スキャン対象外とするパスを含める
