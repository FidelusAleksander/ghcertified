---
question: "いつ `caching` を使用すべきですか？"
documentation: "https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#comparing-artifacts-and-dependency-caching"
---

- [x] パッケージ管理システムからの依存関係のように、ジョブやワークフローの実行間で頻繁に変更されないファイルを再利用したい場合。
- [ ] パッケージ管理システムからの依存関係のように、ジョブやワークフローの実行間で頻繁に変更されるファイルを再利用したい場合。
- [ ] ワークフローの実行が終了した後に、ビルドされたバイナリまたはビルドログなど、ジョブによって生成されたファイルを確認するために保存したい場合。
> その場合は Artifacts を使用してください https://docs.github.com/en/actions/tutorials/store-and-share-data
- [ ] アプリケーションの新しいバージョンをデプロイするために、ビルドジョブで生成されたバイナリを保存し、その後のデプロイジョブで使用したい場合。
> その場合は Artifacts を使用してください https://docs.github.com/en/actions/tutorials/store-and-share-data
