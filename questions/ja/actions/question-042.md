---
question: "`artifacts`をいつ使用しますか？"
documentation: "https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts#about-workflow-artifacts"
---

- [x] `artifacts`を使用して、テスト結果やビルドログなど、ワークフロー実行が終了した後に表示するためにジョブで生成されたファイルを保存します。
- [x] `artifacts`を使用して、ビルドジョブで生成されたバイナリを保存し、次のデプロイジョブで新しいアプリケーションバージョンをデプロイするために使用します。
- [ ] ジョブ間やワークフロー実行間であまり変更されないファイル、例えばパッケージ管理システムのビルド依存関係などを再利用するために`artifacts`を使用します。
> その場合はキャッシュを使用するべきです https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#comparing-artifacts-and-dependency-caching
- [ ] アプリケーションの新しいバージョンをリリースノート、言及、および/またはコントリビューターとともに作成するために`artifacts`を使用します。
> これは`artifacts`ではなく`releases`の使用例です。
