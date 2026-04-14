---
question: "ワークフローが最初に `commit A` で実行され失敗しました。その後、`commit B` でワークフローを修正しました。このワークフローを再実行すると、どのコミットのコードで実行されますか？"
documentation: "https://docs.github.com/en/actions/managing-workflow-runs/re-running-workflows-and-jobs#about-re-running-workflows-and-jobs"
---

- [x] `commit A` のコードで実行されます
- [ ] `commit B` のコードで実行されます
> ワークフローを再実行すると、ワークフロー実行をトリガーした元のイベントのコミットSHAとGit参照を使用して実行されます。
- [ ] GitHub Actionsではワークフローを再実行することはできません。新しいワークフローをトリガーする必要があり、それは最新の変更で実行されます
- [ ] `commit A` のコードで1回、`commit B` のコードで1回、2つのワークフローがトリガーされます
