---
question: "`artifacts` を使用すべきなのはどのような場合ですか？（2つ選択）"
title: "質問 042"
---



> https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts#about-workflow-artifacts

- [x] テスト結果やビルドログなど、Workflow実行後に確認するためにJobが生成したファイルを保存する場合
- [x] アプリケーションの新バージョンをデプロイするために、ビルドJobで生成されたバイナリを後続のデプロイJobで使用する場合
- [ ] パッケージ管理システムのビルド依存関係など、JobやWorkflowの実行間であまり変化しないファイルを再利用する場合  
> その場合はCachingを使用する https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#comparing-artifacts-and-dependency-caching
- [ ] リリースノートやメンション、コントリビューター情報と共にアプリケーションの新バージョンを作成する場合  
> それはArtifactsではなくReleasesのユースケース