---
question: "次のうち、GitHub Enterprise Server（GHES）に関して正しいのはどれですか？"
documentation: "https://docs.github.com/en/enterprise-server@3.21/admin/overview/about-github-enterprise-server"
---

- [x] GHESのワークフローはデフォルトではGitHub.comやGitHub Marketplaceアクションにアクセスできません。 
- [x] `actions/actions-sync` は、主にGitHub.comのアクションをGHESインスタンスに移行するためのツールです。
> GitHub.comからアクションを同期する主な方法は、GitHub Connectまたは`actions-sync`です。`actions/actions-sync`ツールは、このプロセスを行うための[手動での方法](https://docs.github.com/en/enterprise-server@3.21/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom)です。
- [ ] GHESは、GitHubホストランナーの拡張バージョンを使用することが許可されています。
> GHESはGitHubホストランナーに全くアクセスできません。このことは、[`actions/actions-sync` ドキュメント](https://docs.github.com/en/enterprise-server@3.21/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom)に記載されています。
- [ ] GitHub Connectを使用すれば、ユーザーはGitHub.comアクションにアクセスするための手動プロセスを実行できます。このプロセスは希望するアクションごとに一度ずつ実行する必要があります。
> GitHub ConnectではGitHub.comアクションへの自動アクセスが可能になります。ユーザーはセットアッププロセスを完了する必要がありますが、一般的にはこのプロセスは一度行うだけで済みます。詳細については、[GitHub Connect ドキュメント](https://docs.github.com/en/enterprise-server/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect#enabling-automatic-access-to-public-githubcom-actions)を参照してください。
- [x] GitHub Enterprise Serverインスタンスは自己ホスト型であり、GitHub Enterprise Cloud（GHEC）はGitHubによってホストおよび管理されています。
> [GitHub Enterprise Server](https://docs.github.com/en/enterprise-server@3.21/admin/overview/about-github-enterprise-server) はGitHubプラットフォームの自己ホスト型バージョンです。[GitHub Enterprise Cloud](https://docs.github.com/en/enterprise-cloud@latest/admin/overview/about-github-enterprise-cloud) インスタンスはGHE.comの専用サブドメイン上でホストされており、これらのサブドメインはすべてGitHubによってホストされています。
