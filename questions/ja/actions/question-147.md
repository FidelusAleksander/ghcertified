---
question: "GitHub Actions ワークフロー内で Base64 でエンコードされたシークレットをデコードしました。デコードされたシークレットが誤ってワークフローのログに表示されないようにするためには、どうすればよいですか？"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands#masking-a-value-in-a-log"
---

- [x] デコードされたシークレットが使用されるジョブで `add-mask` ワークフローコマンドを使用する。
> `add-mask` を使用すると、GitHub Actions がシークレットとして検出しない値を伏せ字にすることができます。この操作は、デコードされたシークレットを使用するジョブごとに1回必要です。
- [ ] GitHub Actions のインフラストラクチャが自動的にデコードされたシークレットを伏せ字にするため、何もする必要はありません。
> [ドキュメント](https://docs.github.com/en/actions/reference/security/secure-use#use-secrets-for-sensitive-information) によると、変換済みのシークレットが GitHub Actions によって自動的に検出され、伏せ字にされることは保証されていません。  
- [ ] デコードされたシークレットを含む print 文を使用しないようにする。この方法だけがワークフローのログにシークレットが表示されるのを防ぐ唯一の方法です。
> デコードされたシークレットを含む print 文を避けることは推奨されますが、デコードされたシークレットは API コールに関連するメッセージなど、ワークフローのログ内の他の場所に表示される可能性があります。
- [ ] デコードされたシークレットが使用される場合、`maskSecret` 組み込み関数を使用して伏せ字にする。
> `maskSecret` は GitHub Actions で提供されている組み込み関数ではありません。
