---
question: "シークレットおよび構成変数をスコープできる対象は？"
documentation: "https://docs.github.com/en/actions/using-workflows/sharing-workflows-secrets-and-runners-with-your-organization#sharing-secrets-and-variables-within-an-organization"
---

- [x] 組織全体、または組織内の選択されたリポジトリ
- [x] 単一のリポジトリ
- [x] リポジトリ内の環境
- [ ] 複数のリポジトリ間で共有される環境  
> 環境はリポジトリ間で共有することはできません
- [ ] 組織/エンタープライズを共有していない複数のリポジトリ
- [ ] リポジトリ内の特定のワークフロー  
> 環境変数はワークフローにスコープできますが、構成変数はスコープできません
- [ ] ワークフロー内の特定のジョブ  
> 環境変数はワークフローにスコープできますが、構成変数はスコープできません
