---
title: "質問 016"
question: "GitHub Secret scanningパートナープログラムに新しいシークレットパターンが追加または更新された場合の挙動は？"
---


> https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning#accessing-secret-scanning-alerts
1. [x] Secret scanningが有効なパブリックリポジトリの過去のすべてのコードコンテンツをGitHubがスキャンする
1. [ ] Secret scanningが有効なリポジトリで新たにプッシュされたコミットのみ新パターンをスキャンする。既存のシークレットは検出されない。
1. [ ] GitHubパートナーが過去に漏洩したシークレットに対応し、GitHubは新コミットのみ新パターンでスキャンする
1. [ ] Secret scanningが有効なすべてのリポジトリにIssueを作成し、管理者が新パターンに合致するシークレットを確認できるようにする