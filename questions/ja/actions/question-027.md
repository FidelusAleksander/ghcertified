---
question: "有効な **defaults** の使用例は何ですか？"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#defaults"
---

- [x] ワークフロー全体に対してデフォルトのシェル（例えば bash）を設定するために、workflow レベルで defaults.run を使用する
- [x] 単一のジョブ内のすべてのステップに対してデフォルトの作業ディレクトリを設定するために、job レベルで defaults.run を使用する
- [ ] 単一のステップに対してデフォルトのシェル（例えば bash）を設定するために、step レベルで defaults.run を使用する  
> defaults.run は workflow レベルまたは job レベルでのみ設定できます
- [ ] ワークフロー全体に対してデフォルトの環境変数を設定するために、workflow レベルで defaults.env を使用する  
> defaults.env というものは存在しません
- [ ] 単一のジョブ内のすべてのステップに対してデフォルトの環境変数を設定するために、job レベルで defaults.env を使用する  
> defaults.env というものは存在しません
