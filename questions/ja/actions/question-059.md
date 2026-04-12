---
question: "あなたのオープンソースで公開されているリポジトリには、`pull_request` イベントトリガーを持つワークフローがあります。リポジトリのフォークからトリガーされたワークフローの実行に承認を必要とするにはどうすればよいですか？"
documentation: "https://docs.github.com/en/actions/managing-workflow-runs/approving-workflow-runs-from-public-forks#about-workflow-runs-from-public-forks"
---

- [x] フォークの実行に必要な承認をリポジトリで設定する
- [ ] リポジトリに対するデプロイ保護ルールを設定する  
> デプロイ保護ルールは環境を保護するために使用されます
- [ ] リポジトリに対するブランチ保護ルールを設定する  
- [ ] `pull_request` イベントを使用している場合、フォークのためにワークフローはトリガーされません。それを行いたい場合は、`require-approval` フラグ付きの `fork_pull_request` イベントトリガーを使用する必要があります。
