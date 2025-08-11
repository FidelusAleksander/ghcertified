---
title: "質問 111"
question: "GitHub Actionsを有効にする必要があるのはどれですか？"
---

> https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/about-dependabot-version-updates#about-dependabot-version-updates
1. [x] Dependency Review
1. [ ] Dependabot Security Updates
1. [ ] Dependabot Version Updates
1. [ ] すべて
> Dependabot version updatesやDependabot security updatesの実行にGitHub Actionsは不要。ただし、Dependabotが作成したプルリクエストはActionsをトリガーできる。
1. [ ] なし
> Dependency reviewは`actions/dependency-review-action` GitHub Actionを使用