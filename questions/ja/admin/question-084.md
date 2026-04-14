---
question: "パブリックリポジトリでセルフホストランナーを有効化する際の潜在的な悪用ベクターは何ですか？"
documentation: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners#self-hosted-runner-security"
---

- [x] マシン上での悪意あるプログラムの実行
- [x] ランナーのサンドボックス環境からの逸脱
- [x] ネットワーク環境の露出
- [x] 危険なデータの永続化
- [ ] ジョブ実行後の環境の自動クリーンアップによるデータ損失
- [ ] セキュリティ対策による計算効率の低下
- [ ] GitHubホスト型サービスとの統合の制約

