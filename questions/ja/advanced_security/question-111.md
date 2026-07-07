---
question: "GitHub Actionsを有効にする必要があるのはどれですか？"
documentation: "https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/dependabot-version-updates/about-dependabot-version-updates#about-dependabot-version-updates"
---

- [x] 依存関係のレビュー
- [ ] Dependabot Security Updates
- [ ] Dependabot Version Updates
- [ ] これらすべて
> Dependabot Version UpdatesおよびDependabot Security UpdatesをGitHubで実行するには、GitHub Actionsは必要ありません。しかし、Dependabotによって作成されたPull Requestは、Actionsを実行するWorkflowをトリガーすることがあります。
- [ ] これらすべてではない
> Dependency reviewは`actions/dependency-review-action` GitHub Actionを使用します。
