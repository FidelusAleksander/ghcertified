---
question: "クラウドプロバイダーの資格情報を含むコミットがGitHubにプッシュされるのを防ぐにはどうすればよいですか？"
documentation: "https://docs.github.com/en/code-security/secret-scanning/push-protection-for-repositories-and-organizations"
---

- [x] リポジトリまたは組織でシークレットスキャニングのプッシュ保護ルールを有効にする。
- [ ] シークレットを含むファイルを無視する`.gitignore`ファイルをリポジトリに含める。
- [ ] シークレットをスキャンするGitHub Actionを作成し、GitHubにプッシュする前にコミットをスキャンする。
- [ ] リポジトリのブランチ保護ルールを有効にする。
