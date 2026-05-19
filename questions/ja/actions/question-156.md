---
question: "ワークフロー成果物を削除する方法はどのようなものがありますか？"
documentation: "https://docs.github.com/en/actions/how-tos/manage-workflow-runs/remove-workflow-artifacts"
---

- [x] GitHub Actions UIを使用してワークフロー実行ページに移動し、個別に成果物を削除する
- [x] GitHub Actions UIを使用して成果物を生成したワークフロー実行を削除する
> ワークフロー実行を削除すると、その実行に関連付けられた成果物も削除されます。
- [x] 特定のGitHub APIエンドポイントを使用する
> GitHub APIには「成果物を削除する」エンドポイントがあります。詳細については[ドキュメント](https://docs.github.com/en/rest/actions/artifacts?apiVersion=2026-03-10#delete-an-artifact)を参照してください。
- [ ] ワークフロー内で`actions/delete-artifact`アクションを使用する
- [ ] SSHを介してセルフホストランナーにリモートアクセスし、`.github/artifacts`ディレクトリに移動して選択した成果物を削除する
> 成果物は一般的にGitHubのインフラストラクチャ上に保存され、ランナーには保存されません。
- [ ] 成果物の保持期間を0日に設定する
> 成果物の保持期間を0日に設定することはできません。詳細については[ドキュメント](https://docs.github.com/en/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization)を参照してください。
