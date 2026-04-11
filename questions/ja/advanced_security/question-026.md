---
title: "質問 026"
question: "GitHub Dependency graphはどのようにしてプロジェクトの依存関係を把握していますか？（2つ選択）"
---




> https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph#supported-package-ecosystems
- [x] リポジトリにコミットされたマニフェストやロックファイルから自動的に依存関係を抽出
- [x] Dependency submission APIを使って依存関係を手動で追加可能
- [ ] リポジトリコードをスキャンし、外部パッケージのimport文を検出
- [ ] 新しいコミットがプッシュされるたびにactions/dependency-graph GitHub Actionを使うワークフローが必要