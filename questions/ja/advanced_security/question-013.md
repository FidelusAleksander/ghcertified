---
question: "特定のディレクトリやファイルをシークレットスキャンから除外するにはどうすればよいですか？"
documentation: "https://docs.github.com/en/code-security/how-tos/secure-your-secrets/customize-leak-detection/exclude-folders-and-files"
---

- [x] `secret_scanning.yml` ファイルを作成し、スキャン対象から除外するパスを含める
- [ ] 特定のファイルやディレクトリをスキャンから除外することはできません。リポジトリでシークレットスキャンを有効にすると、すべてのファイルとディレクトリがスキャンされます。
- [ ] `.gitignore` ファイルにこれらのファイルを含める
- [ ] `dependabot.yml` ファイルを作成し、スキャン対象から除外するパスを含める
