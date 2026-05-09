---
question: "特定のワークフローによって生成されたアーティファクトの保持期間を変更するにはどうすればよいですか？"
documentation: "https://github.com/actions/upload-artifact#inputs"
---

- [x] `actions/upload-artifact`で`retention-days`入力を利用する 
- [ ] `actions/download-artifact`で`retention-days`入力を利用する
> `actions/download-artifact`はアーティファクトをダウンロードするために使用されます。そのため、アップロードされたアーティファクトの保持期間に関与することはありません。さらに、`retention-days`はこのアクションの入力項目ではありません。詳細については[ドキュメント](https://github.com/actions/download-artifact#inputs)を参照してください。
- [ ] ワークフローのリポジトリで、Actions設定に移動し、リストされたワークフローの「アーティファクトとログの保持」設定の値を編集する
> リポジトリ内で["アーティファクトとログの保持"設定](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)を編集することはできますが、これはそのリポジトリ内のすべてのワークフローに適用され、個別のワークフローには適用されません。この設定では、個別のワークフローをリスト化していません。
- [ ] 組織のActions設定に移動し、「アーティファクトとログの保持」設定の値を編集する
> 組織内で["アーティファクトとログの保持"設定](https://docs.github.com/en/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization)を編集することはできますが、これはその組織内のすべてのワークフローに適用され、個別のワークフローには適用されません。
