---
question: "いつ `caching` を使用すべきですか？"
documentation: "https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#comparing-artifacts-and-dependency-caching"
---

- [x] パッケージ管理システムのビルドに必要な依存関係など、ジョブやワークフロー実行間であまり変更されないファイルを再利用したい場合。
- [ ] ジョブやワークフロー実行間で頻繁に変更されるファイルを再利用したい場合（例: パッケージ管理システムのビルド依存関係など）。
- [ ] ワークフロー実行が終了した後に閲覧するために、ジョブで作成されたファイル（例: ビルドされたバイナリやビルドログ）を保存したい場合。
> その場合は Artifacts を使用します https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts
- [ ] アプリケーションの新しいバージョンをデプロイするために、ビルドジョブで生成されたバイナリを保存し、後続のデプロイジョブで使用したい場合。
> その場合は Artifacts を使用します https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts
