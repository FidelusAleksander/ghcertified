---
question: "GitHub の依存関係グラフは、プロジェクトが使用している依存関係をどのように認識しますか？"
documentation: "https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-graph#supported-package-ecosystems"
---

- [x] GitHub は、リポジトリにコミットされたマニフェストやロックファイルから依存関係を自動的に抽出します
- [x] 依存関係は Dependency submission API を使用して手動で追加することができます
- [ ] GitHub は外部パッケージのインポートステートメントをリポジトリコード内でスキャンします
- [ ] 新しいコミットがリポジトリにプッシュされるたびに依存関係をグラフに追加する公式な `actions/dependency-graph` GitHub Action を使用する GitHub Actions ワークフローを追加する必要があります
