---
question: "ジョブ間で情報を渡す際に使用すべきものは、ジョブの出力（job outputs）と`GITHUB_ENV`のどちらですか？"
documentation: "https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-variables#passing-values-between-steps-and-jobs-in-a-workflow"
---

- [x] ジョブの出力（job outputs）。`GITHUB_ENV`を使用して設定した環境変数の値は、現在のジョブにのみ適用されるため。
> `env`はワークフローレベルで設定可能であり（複数のジョブで変数を参照可能）、ただし環境変数の値を変更しても、それを変更したジョブを超えて値が保持されるわけではありません。
- [ ] `GITHUB_ENV`。ジョブの出力（job outputs）は、同じジョブ内でのみ設定および参照が可能なため。
- [ ] ジョブの出力（job outputs）。セットアップがより簡単なため。
> ジョブの出力をセットアップして参照するのは、`GITHUB_ENV`を利用するよりも複雑です。例えば、ジョブの出力を設定するには、`outputs`ブロックをセットアップし、ステップに`id`を追加し、依存関係を示すために`needs`を使用する必要があります。
- [ ] `GITHUB_ENV`。環境変数の設定に使用すれば、ランナーへの負荷が大幅に軽減され、ワークフローの実行時間が短縮されるため。
