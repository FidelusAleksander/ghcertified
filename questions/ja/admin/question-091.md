---
question: "GitHub Actionsのために、3rdパーティのボールトを使用してシークレットを管理するにはどうすればよいですか？"
title: "質問 091"
---

> https://developer.hashicorp.com/vault/docs/platform/github-actions  
> https://bitwarden.com/help/github-actions-integration/  
> https://docs.keeper.io/en/keeperpam/secrets-manager/integrations/github-actions  
1. [x] シークレットを3rdパーティのボールトに格納し、アクセス資格情報をGitHub Actionsのシークレットとして格納して認証し、ランタイム時にそれらを取得する（ベンダーのアクション/CLIを通して）。  
1. [ ] GitHub Actions内での3rdパーティボールトとのネイティブな直接統合は、追加設定なしでサポートされている。  
1. [ ] 3rdパーティのボールトは、そのAPIキーをワークフローファイル内に埋め込み、ベンダーのAPIまたはCLIを使用してアクセスするべきである。  
1. [ ] GitHub Actionsは、シークレット管理に3rdパーティのボールトの使用をサポートしていない。すべてのシークレットはGitHub内に格納する必要がある。  
