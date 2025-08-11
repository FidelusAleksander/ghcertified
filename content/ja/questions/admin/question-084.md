---
question: "Public RepositoryでSelf-hostedランナーを有効化する場合の潜在的な悪用経路にはどのようなものがありますか？（4つ選択）"
title: "質問 084"
---

> https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners#self-hosted-runner-security
- [x] マシン上での悪意あるプログラムの実行
- [x] ランナーのサンドボックス環境からの脱出
- [x] ネットワーク環境の露出
- [x] 危険なデータの永続化
- [ ] ジョブ実行後の自動環境クリーンアップによるデータ損失
- [ ] セキュリティ対策による計算効率の低下
- [ ] GitHub-hostedサービスとの統合制限