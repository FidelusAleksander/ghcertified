---
question: "GitHub Actionsやその他のCI/CDツールでGitHub Packageをダウンロードまたは公開するために必要なものは何ですか？"
title: "質問 094"
---

> https://docs.github.com/en/packages/learn-github-packages/introduction-to-github-packages#authenticating-to-github-packages
1. [x] WorkflowのRepositoryに関連するパッケージを公開する場合は`GITHUB_TOKEN`を使用し、Private Repositoryからパッケージをインストールする場合はPATを使用する
1. [ ] GitHub PackagesはGitHub Actions WorkflowやCI/CDツールでは使用できない
1. [ ] WorkflowでGitHub Packagesを使用するにはSSHキーのみが必要
1. [ ] 各Workflow実行ごとにパッケージを手動でダウンロードおよびアップロードする必要がある