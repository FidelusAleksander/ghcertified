---
title: "質問 012"
question: "GitHub Copilotは、Copilotのコンテンツ除外で無視されたファイルのセマンティック情報を利用できますか？"
---

> https://docs.github.com/en/copilot/managing-copilot/configuring-and-auditing-content-exclusion/excluding-content-from-github-copilot#limitations-of-content-exclusions
1. [x] はい、IDEから間接的に情報が提供される場合は利用可能です。
1. [ ] いいえ、除外されたファイルの情報はすべて無視されます。
> IDEから間接的に情報が提供される場合、Copilotは除外されたファイルのセマンティック情報を利用することがあります。具体例としては、コードで使用されるシンボルの型情報やホバー定義、ビルド構成情報などの一般的なプロジェクト属性が挙げられます。