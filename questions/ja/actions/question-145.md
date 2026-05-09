---
question: "アーティファクトをダウンロードする方法にはどのようなものがありますか？"
documentation: "https://github.com/actions/upload-artifact#inputs"
---

- [x] ワークフロー内で`actions/download-artifact`アクションを使用する
- [x] GitHub ActionsのUIのワークフロー実行画面からアーティファクトをダウンロードする  
> UIを使用することで、アーティファクトを手動でダウンロードすることができます。詳細は[ドキュメント](https://docs.github.com/en/actions/how-tos/manage-workflow-runs/download-workflow-artifacts)を参照してください。
- [x] 特定のGitHub APIエンドポイントを使用する  
> GitHub APIには「アーティファクトをダウンロードする」エンドポイントがあります。詳細は[ドキュメント](https://docs.github.com/en/rest/actions/artifacts?apiVersion=2026-03-10#download-an-artifact)を参照してください。
- [ ] ワークフロー内で`actions/upload-artifact`アクションを使用する  
> `actions/upload-artifact`はアーティファクトをダウンロードするのではなくアップロードするためのものです。
- [ ] セルフホストランナーにSSHでリモートアクセスし、`.github/artifacts`ディレクトリにアクセスする  
> アーティファクトは一般的にGitHubのインフラストラクチャで管理され、ランナー上では保存されません。ただし、例外としてGitHub Enterprise Server（GHES）を使用している場合、ワークフロー実行によって生成されたアーティファクトやその他のデータは、外部のBlobストレージに保存されます。GHESストレージに関する詳細は[ドキュメント](https://docs.github.com/en/enterprise-server/admin/managing-github-actions-for-your-enterprise/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#external-storage-requirements)を参照してください。
