---
question: "GitHub Enterprise Serverを使用している組織が、GitHub.comにホストされているサードパーティのGitHub ActionsをGitHub Enterprise Serverインスタンスに自動同期するにはどうすればよいですか？"
documentation: "https://docs.github.com/en/enterprise-server@3.17/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect"
---

- [x] GitHub Connectを使用する  
> 有効にすると、GitHub Connectを使用してGitHub Enterprise Server（GHES）インスタンスとGitHub Enterprise Cloud（GHEC）アカウント（GHECはGitHub.com上にホストされている）間で安全な接続が自動的に確立されます。GHECアカウントは信頼された（認証された）アイデンティティとして機能し、GitHub.comがGHESインスタンスのGitHub.comでホストされているActionsへのアクセスを承認します。  

- [ ] GitHub Enterprise Serverはデフォルトで全てのGitHub.com Actionsにアクセス可能  
> GitHub Enterprise Server上のGitHub Actionsは、完全なインターネットアクセスがない環境で動作するよう設計されています。デフォルトでは、ワークフローはGitHub.comおよびGitHub MarketplaceのActionsを使用できません。  

- [ ] actions-syncツールを使用する  
> actions-syncはGitHub.comからエンタープライズへの個々のActionリポジトリを同期するために使用できますが、これは手動のアプローチです。詳細は[ドキュメント](https://docs.github.com/en/enterprise-server@3.17/admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom#about-the-actions-sync-tool)を参照してください。  

- [ ] GitHub Enterprise Server（GHES）はオンプレミスの性質とインターネットアクセスがないため、GitHub.com Actionsを使用できません。  
> GHESインスタンス上に配置されたワークフローはデフォルトでGitHub.com ActionsやGitHub Marketplace Actionsを使用できませんが、GitHub Connectまたはactions-syncを使用することで解決可能です。  
