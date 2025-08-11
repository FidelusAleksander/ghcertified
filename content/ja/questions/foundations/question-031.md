---
title: "質問 031"
question: "GitHub Codespacesのライフサイクルに関して正しい記述はどれですか？（3つ選択してください）"
---

> https://docs.github.com/en/codespaces/getting-started/understanding-the-codespace-lifecycle
- [x] Codespaceのライフサイクルは作成時に始まり、削除時に終了する
- [x] Codespaceは停止して再起動しても、プロジェクトへの変更は失われない
- [x] アクティブなCodespaceに切断・再接続しても、実行中のプロセスに影響はない
- [ ] Codespaceは停止して再起動しても、実行中のプロセスに影響はない
- [ ] 同じブランチに新たなCodespaceを作成すると、既存のCodespaceは削除される
- [ ] Codespaceを実行しているブラウザタブを閉じると、自動的にCodespaceが停止する
> ブラウザタブを閉じてもCodespaceは停止せず、プロセスは実行を続けます。タブを閉じただけの場合、非アクティブ状態のタイムアウトに達すると停止します