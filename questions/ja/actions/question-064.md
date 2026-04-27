---
question: "GitHub Enterprise Serverを利用している組織が、GitHub.com上でホストされているサードパーティのGitHub ActionsをGitHub Enterprise Serverインスタンスに自動同期するにはどうすればよいですか？"
documentation: "https://docs.github.com/en/enterprise-server@3.17/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect"
---

- [x] GitHub Connectを使用する
> 有効化すると、GitHub Connectを使用して、GitHub Enterprise Server (GHES)インスタンスとGitHub Enterprise Cloud (GHEC)アカウント（GHECはGitHub.com上にホストされています）の間で自動的に安全な接続が確立されます。GHECアカウントは信頼できる（認証された）アイデンティティとして機能し、GHESインスタンスがGitHub.com上でホストされているActionsにアクセスする権限をGitHub.comに与えます。  
- [ ] GitHub Enterprise ServerはデフォルトですべてのGitHub.com Actionsにアクセスできる
> GitHub Enterprise Server上のGitHub Actionsは、完全なインターネットアクセスがない環境で動作するように設計されています。デフォルトでは、ワークフローはGitHub.comやGitHub MarketplaceからのActionsを使用することができません。
- [ ] actions-syncツールを使用する
> actions-syncはGitHub.comからエンタープライズへアクションリポジトリを個別に同期するために使用できますが、これは手動のアプローチです。詳細については[ドキュメント](https://docs.github.com/en/enterprise-server@3.17/admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom#about-the-actions-sync-tool)を参照してください。
- [ ] GitHub Enterprise Server (GHES)は、そのオンプレミスの性質とインターネットアクセスがないため、GitHub.com Actionsを使用できない
> GHESインスタンス上にあるワークフローは、デフォルトではGitHub.com ActionsやGitHub Marketplace Actionsを使用することはできませんが、GitHub Connectまたはactions-syncを使用することで解決できます。
