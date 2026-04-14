---
question: "GitHub Copilotは、GitHub Copilotのコンテンツ除外によって無視されたファイルのセマンティック情報を利用できますか？"
documentation: "https://docs.github.com/en/copilot/managing-copilot/configuring-and-auditing-content-exclusion/excluding-content-from-github-copilot#limitations-of-content-exclusions"
---

- [x] はい、IDEによって間接的に情報が提供される場合。
- [ ] いいえ、除外されたファイルのすべての情報を無視します。
> Copilotは、除外されたファイルからIDEによって間接的に提供される場合、そのファイルのセマンティック情報を利用する可能性があります。これには、コード内で使用されるシンボルの型情報やホバーオーバー定義、ビルド構成情報などの一般的なプロジェクトプロパティが含まれることがあります。
