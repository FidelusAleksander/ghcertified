---
question: "GitHub Enterprise Server を使用している組織が、GitHub.com 上でホストされているサードパーティGitHub ActionsをGitHub Enterprise Serverインスタンスに自動同期できるようにするにはどうすればよいですか？"
title: "質問 064"
---

> https://docs.github.com/en/enterprise-server@3.6/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect
1. [x] GitHub Connectを使用する
1. [ ] GitHub Enterprise Serverはデフォルトで全てのGitHub.com Actionsにアクセスできる  
> GitHub Enterprise ServerのActionsは、インターネットアクセスが制限された環境でも動作するように設計されている。デフォルトではGitHub.comやGitHub MarketplaceのActionsは使用できない
1. [ ] actions-syncツールを使用する  
> https://docs.github.com/en/enterprise-server@3.6/admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom#about-the-actions-sync-tool
1. [ ] GitHub Enterprise Serverはオンプレミスの性質上インターネットアクセスがないため、GitHub.com Actionsは使用できない