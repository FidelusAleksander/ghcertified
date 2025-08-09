---
question: "GitHub ActionsでSecretを管理するためにサードパーティVaultを利用するにはどうしますか？"
title: "質問 091"
---

> https://developer.hashicorp.com/vault/docs/platform/github-actions
> https://bitwarden.com/help/github-actions-integration/
> https://docs.keeper.io/en/keeperpam/secrets-manager/integrations/github-actions
1. [x] SecretをサードパーティVaultに保存し、Workflow内で復号ステップを使用してアクセスする。このとき復号鍵はGitHub Actions Secretとして保存する
1. [ ] GitHub Actionsは追加設定なしでサードパーティVaultとネイティブに統合されている
1. [ ] サードパーティVaultには、そのベンダーのAPIキーをWorkflowファイル内に直接埋め込み、APIまたはCLIでアクセスする
1. [ ] GitHub ActionsはサードパーティVaultによるSecret管理をサポートしておらず、すべてのSecretはGitHub内に保存しなければならない