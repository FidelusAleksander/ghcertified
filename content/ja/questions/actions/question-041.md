---
question: "`caching` を使用すべきなのはどのような場合ですか？"
title: "質問 041"
---



> https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#comparing-artifacts-and-dependency-caching

1. [x] パッケージ管理システムのビルド依存関係など、JobやWorkflowの実行間であまり変化しないファイルを再利用したい場合
1. [ ] パッケージ管理システムのビルド依存関係など、JobやWorkflowの実行間で頻繁に変化するファイルを再利用したい場合
1. [ ] ビルドされたバイナリやビルドログなど、Workflow実行後に確認するためにJobが生成したファイルを保存したい場合  
> その場合はArtifactsを使用する https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts
1. [ ] アプリケーションの新バージョンをデプロイするために、ビルドJobで生成されたバイナリを後続のデプロイJobで使用する場合  
> その場合はArtifactsを使用する https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts