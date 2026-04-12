---
question: "GitHub のセルフホストランナーが必要なすべての GitHub サービスにアクセスできることをどのように検証できますか？"
documentation: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-self-hosted-runner-network-connectivity"
---

- [x] ランナーマシン上で GitHub 提供のスクリプトを使用する
- [ ] ネットワーク接続を検証するために `ssh` を使用してランナーマシンにアクセスしてみる
- [ ] 事前定義された GitHub Actions ワークフロー `network-connectivity.yml` を使用する
- [ ] ランナーアプリケーションがランナーマシンにインストールされると、GitHub が自動的にネットワーク接続を検証する
