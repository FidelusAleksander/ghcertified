---
question: "GitHub Actionsを有効にする必要があるのはどれですか？"
documentation: "https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/about-dependabot-version-updates#about-dependabot-version-updates"
---

- [x] 依存関係レビュー
- [ ] Dependabot Security Updates
- [ ] Dependabot Version Updates
- [ ] すべて
> Dependabotバージョン更新とDependabotセキュリティ更新がGitHubで実行されるためにGitHub Actionsは必要ありません。ただし、Dependabotによって作成されたプルリクエストは、アクションを実行するワークフローをトリガーすることがあります。
- [ ] どれも該当しない
> 依存関係レビューは`actions/dependency-review-action` GitHub Actionを使用します。
