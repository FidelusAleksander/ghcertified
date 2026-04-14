---
question: "GitHub PackagesをGitHub Actionsやその他のCI/CDツール内のワークフローでダウンロードまたは公開するために必要なものは何ですか？"
documentation: "https://docs.github.com/en/packages/learn-github-packages/introduction-to-github-packages#authenticating-to-github-packages"
---

- [x] ワークフローリポジトリに関連付けられたパッケージを公開する際は`GITHUB_TOKEN`を使用し、プライベートリポジトリからパッケージをインストールする際はPATを使用します。
- [ ] GitHub Packagesは、GitHub Actionsワークフローやその他のCI/CDツールでは使用できません。
- [ ] GitHub Packagesをワークフローで使用するにはSSHキーのみが必要です。
- [ ] 各ワークフロー実行ごとにパッケージを手動でダウンロードおよびアップロードする必要があります。
