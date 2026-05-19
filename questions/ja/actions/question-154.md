---
question: "GitHub Actions マーケットプレイスで共有するために Docker コンテナアクションを構築するのはどのようなときですか？"
documentation: "https://docs.github.com/en/actions/concepts/workflows-and-actions/custom-actions#docker-container-actions"
---

- [x] Docker コンテナアクションは、一貫したランタイム環境と特定の依存関係を確保し、ユーザーがこれらの側面を自分で処理する必要がないようにします。
- [ ] Docker コンテナアクションは、すぐに使用できてオーバーヘッドが少ないアクションです。
> Docker コンテナアクションは、イメージ（事前構築済みまたは `Dockerfile` によって指定）の使用、エントリポイントスクリプト、場合によってはエントリポイント前後のロジックが必要なため、オーバーヘッドが少ないとは見なされません。
- [ ] Docker コンテナアクションは、Windows と macOS ランナーで高速に起動します。
> Docker コンテナは Linux OS ランナー（GitHub ホストランナーの場合は `ubuntu-latest`）でのみ実行できます。JavaScript アクションやコンポジットアクションと比較すると、時間がかかります。
- [ ] Docker コンテナアクションは、呼び出し元のワークフロー/アクションのコンテキスト内で実行される他のワークフロー内の一連のステップです。
> 「再利用可能な一連のステップ」は Docker コンテナアクションではなく、コンポジットアクションを指します。
- [ ] Docker コンテナアクションでは、`action.yml` ファイルを必要とせずに Docker を利用できます。
> アクションの種類に関係なく、すべてのアクションには `action.yml` ファイルが必要です。
