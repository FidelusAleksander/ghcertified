---
question: "組織が保存されたアーティファクトの保持期間を短縮しようとしています。ストレージの懸念を理由にしています。これを組織レベルで行うにはどうすればよいですか？"
documentation: "https://docs.github.com/en/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization"
---

- [x] 組織のActions設定に移動し、「Artifact and log retention」設定の値を編集する
- [ ] セルフホストランナーを使用し、`.github/retention-policy.yml`ファイルを作成して、`artifact-retention-period`キーの値を指定する  
> アーティファクトの保持期間をカスタマイズすることは、セルフホストランナーに限定されません。  
- [ ] これは組織レベルでは実行できません。`actions/upload-artifact`を利用するすべてのワークフローは、必須の`retention-days`入力を使用する必要があります。  
> `retention-days`入力を使用して、ワークフローで作成された個々のアーティファクトの保持期間をカスタマイズすることは可能ですが、組織レベルの一律なポリシーを適用しようとする場合には適切ではありません。また、`retention-days`入力は[オプションであり、必須ではありません](https://github.com/actions/upload-artifact#inputs)。  
- [ ] これは実行できません: アーティファクトは、GitHub Actionsを実装しているすべてのシステムで厳密に90日間保存されます。  
> アーティファクトのデフォルトの保持期間は90日です。この値は、GitHub Actionsを実装しているすべてのシステムで変更可能です。  
