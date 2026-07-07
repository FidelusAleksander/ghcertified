---
question: "クラウドプロバイダーの認証情報を含むコミットがGitHubにプッシュされるのを防ぐにはどうすればよいですか？"
documentation: "https://docs.github.com/en/code-security/concepts/secret-security/push-protection"
---

- [x] リポジトリまたは組織に対してシークレットスキャンのプッシュ保護ルールを有効化する。
- [ ] シークレットを含むファイルを無視する`.gitignore`ファイルをリポジトリに含める。
- [ ] GitHubにプッシュされる前にコミット内のシークレットをスキャンするGitHub Actionを作成する。
- [ ] リポジトリに対してブランチ保護ルールを有効化する。
