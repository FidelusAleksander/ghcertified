---
title: "質問 011"
question: "クラウドプロバイダーの資格情報を含むコミットがGitHubにプッシュされるのを防ぐにはどうすればよいですか？"
---


> https://docs.github.com/en/code-security/secret-scanning/push-protection-for-repositories-and-organizations
1. [x] リポジトリまたは組織に対してSecret scanningのプッシュ保護ルールを有効化する
1. [ ] シークレットを含むファイルを無視する`.gitignore`ファイルをリポジトリに含める
1. [ ] プッシュ前にコミット内のシークレットをスキャンするGitHub Actionsを作成する
1. [ ] リポジトリにブランチ保護ルールを有効にする