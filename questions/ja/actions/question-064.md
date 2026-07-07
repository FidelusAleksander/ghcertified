---
question: "GitHub Enterprise Server を使用している組織は、GitHub.com 上にホストされているサードパーティの GitHub Actions を GitHub Enterprise Server インスタンスに自動的に同期するにはどうすればよいですか？"
documentation: "https://docs.github.com/en/enterprise-server@3.17/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect"
---

- [x] GitHub Connect を使用する  
> 有効化すると、GitHub Connect を使用して GitHub Enterprise Server (GHES) インスタンスと GitHub Enterprise Cloud (GHEC) アカウント (GHEC は GitHub.com 上でホストされています) の間に安全な接続を自動的に確立します。GHEC アカウントは、GitHub.com が GHES インスタンスに GitHub.com ホストのアクションへのアクセス権を認証するために使用する信頼された (認証された) アイデンティティとして機能します。  
- [ ] GitHub Enterprise Server はデフォルトで、すべての GitHub.com Actions にアクセスできます  
> GitHub Enterprise Server 上の GitHub Actions は、完全なインターネットアクセスがない環境で動作するように設計されています。デフォルトでは、ワークフローは GitHub.com や GitHub Marketplace からのアクションを使用することはできません。  
- [ ] actions-sync ツールを使用する  
> actions-sync は GitHub.com からエンタープライズに個別のアクションリポジトリを同期するために使用できますが、これは手動によるアプローチです。詳細については [ドキュメント](https://docs.github.com/en/enterprise-server@3.17/admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom#about-the-actions-sync-tool) を参照してください。  
- [ ] GitHub Enterprise Server (GHES) はオンプレミスの性質とインターネットアクセスのない環境により、GitHub.com Actions を使用できません。  
> GHES インスタンス上で実行されるワークフローは、デフォルトでは GitHub.com Actions や GitHub Marketplace Actions を使用することができませんが、GitHub Connect や actions-sync を使用することでこの問題を解決できます。  
