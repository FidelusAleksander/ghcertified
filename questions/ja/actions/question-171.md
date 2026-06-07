---
question: "ワークフローを再実行するのと、新しいワークフローを実行するのではなぜ違いがあるのでしょうか？"
documentation: "https://docs.github.com/en/actions/how-tos/manage-workflow-runs/re-run-workflows-and-jobs"
---

- [x] ワークフローを再実行すると、すべてのジョブを実行する新しいワークフローを生成するのではなく、失敗したワークフロージョブのみを再実行できます。
- [x] ワークフローを再実行すると、ジョブをトリガーした元のイベントのコミットSHAおよびGitリファレンスのコンテキストでワークフロージョブが実行されます。
- [x] ワークフローを再実行すると、選択したジョブに対して追加のデバッグログを有効にすることができます。
- [ ] ワークフローを再実行すると、`GITHUB_TRIGGERING_ACTOR`が変更されないため、ワークフローを最初にトリガーした人物が誰であるかが明確になります。
> [ドキュメント](https://docs.github.com/en/actions/reference/workflows-and-actions/contexts#github-context)によると、`GITHUB_TRIGGERING_ACTOR`の値はワークフローを再実行した人物に基づいて更新されます。  
- [ ] ワークフローを再実行すると、`GITHUB_ACTOR`が更新されるため、ワークフローを再実行した人物が明確になります。
> [ドキュメント](https://docs.github.com/en/actions/reference/workflows-and-actions/contexts#github-context)によると、`GITHUB_ACTOR`の値はワークフローを最初にトリガーした人物を指し、ワークフローを再実行しても変化しません。
- [ ] ワークフローを再実行すると、失敗したジョブが上書きされるため、ジョブルンがより簡潔に表示されます。
> ジョブが再実行されても、失敗したジョブルンはそのまま残ります。UIを使用すれば、元のジョブルンとその後の再実行との間を簡単に切り替えることができます。  
