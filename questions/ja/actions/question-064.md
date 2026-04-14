---
question: "GitHub Enterprise Serverを使用している組織が、GitHub.comにホストされているサードパーティのGitHub Actionsを自身のGitHub Enterprise Serverインスタンスに自動的に同期するにはどうすればよいですか？"
documentation: "https://docs.github.com/en/enterprise-server@3.6/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect"
---

- [x] GitHub Connectを使用する
- [ ] GitHub Enterprise ServerにはデフォルトですべてのGitHub.com Actionsへのアクセス権がある
> GitHub Enterprise Server上のGitHub Actionsは、完全なインターネットアクセスがない環境で動作するよう設計されています。デフォルトでは、ワークフローはGitHub.comやGitHub MarketplaceからのActionsを使用することができません。
- [ ] actions-syncツールを使用する
> https://docs.github.com/en/enterprise-server@3.6/admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom#about-the-actions-sync-tool
- [ ] GitHub Enterprise Serverはオンプレミスの性質上、インターネットアクセスがないため、GitHub.com Actionsを使用することができない
