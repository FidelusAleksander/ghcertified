---
question: "ランナー診断ログを有効にする方法は何ですか？"
documentation: "https://docs.github.com/en/actions/how-tos/monitor-workflows/enable-debug-logging#enabling-runner-diagnostic-logging"
---

- [x] シークレットまたは変数に `ACTIONS_RUNNER_DEBUG` という名前を設定し、値を `true` にする  
> 注: `ACTIONS_RUNNER_DEBUG` は、組織レベルまたはリポジトリレベルでシークレットまたは変数として設定できます。
- [x] ワークフローを「Enable debug logging（デバッグログの有効化）」を選択して再実行する  
- [ ] ワークフローのリポジトリに `ACTIONS_RUNNER_DEBUG` というトップレベルフォルダーを追加する  
- [ ] 使用されているセルフホスト型ランナーの `_diag` ディレクトリに `runner-diagnostic-logs` サブフォルダーを追加する  
> `runner-diagnostic-logs` は、`ACTIONS_RUNNER_DEBUG` が有効な場合に GitHub が生成するフォルダーの名前です。混乱を避けるため、この名前のフォルダーを他の場所に作成しないでください。
- [ ] セルフホスト型ランナーの `_diag` ディレクトリを `runner-diagnostic-logs` にリネームする  
> `_diag` ディレクトリをリネームしてはなりません。これはログ記録の活動に影響を与える可能性があります。
