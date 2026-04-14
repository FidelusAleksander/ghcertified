---
question: "GitHub Dependency graph は、プロジェクトが使用している依存関係をどのようにして把握しますか？"
documentation: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph#supported-package-ecosystems"
---

- [x] GitHub は、リポジトリにコミットされたマニフェストおよびロックファイルから自動的に依存関係を取得します
- [x] Dependency submission API を使用して依存関係を手動で追加できます
- [ ] GitHub は、リポジトリコードをスキャンして外部パッケージのインポートステートメントを検出します
- [ ] GitHub Actions ワークフローを追加し、新しいコミットがリポジトリにプッシュされるたびに公式の `actions/dependency-graph` GitHub Action を使用して依存関係をグラフに追加する必要があります
